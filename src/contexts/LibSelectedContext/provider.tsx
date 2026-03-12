"use client";
import { groupByFirstLetter } from "@util/grouping";
import {
  createContext,
  type ReactNode,
  useMemo,
  useState,
  useEffect,
} from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useDebounce } from "@/hooks/useDebounce";
import type { LibSelectedType } from "./type";

export type GroupableItem = {
  displayName: string;
  name?: string;
  tags?: ReadonlyArray<string>;
};

export const LibSelectedContext =
  createContext<LibSelectedType<GroupableItem> | null>(null);

type ProviderProps<T extends GroupableItem> = {
  children: ReactNode;
  initialData?: readonly T[] | T[];
};

function filterItems<T extends GroupableItem>(items: T[], term: string): T[] {
  if (!term.trim()) return items;

  const normalized = term.toLowerCase().trim();

  return items.filter((item) => {
    const inDisplayName = item.displayName.toLowerCase().includes(normalized);
    const inName = item.name?.toLowerCase().includes(normalized) ?? false;
    const inTags =
      item.tags?.some((tag) => tag.toLowerCase().includes(normalized)) ?? false;

    return inDisplayName || inName || inTags;
  });
}

export const Provider = <T extends GroupableItem>({
  children,
  initialData = [],
}: ProviderProps<T>) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Inicializa o searchTerm com o valor que já está na URL
  const [searchTerm, setSearchTerm] = useState(
    () => searchParams.get("q") ?? "",
  );

  const [data, setData] = useState<T[]>([...initialData]);

  const debouncedTerm = useDebounce(searchTerm, 300);

  // Quando o debouncedTerm mudar, sincroniza a URL
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (debouncedTerm.trim()) {
      params.set("q", debouncedTerm.trim());
    } else {
      params.delete("q");
    }

    // replace: não empilha no histórico a cada letra
    // push: empilha — botão voltar funciona como histórico de busca
    router.replace(`${pathname}?${params.toString()}`);
  }, [debouncedTerm]);

  const filteredData = useMemo(
    () => filterItems(data, debouncedTerm),
    [data, debouncedTerm],
  );

  const groupedData = useMemo(
    () => groupByFirstLetter(filteredData),
    [filteredData],
  );

  const sortedLetters = useMemo(() => Object.keys(groupedData), [groupedData]);

  const value: LibSelectedType<T> = {
    data,
    setData,
    groupedData,
    sortedLetters,
    searchTerm,
    setSearchTerm,
    isFiltering: debouncedTerm.trim().length > 0,
  };

  return (
    <LibSelectedContext.Provider
      value={value as unknown as LibSelectedType<GroupableItem>}
    >
      {children}
    </LibSelectedContext.Provider>
  );
};
