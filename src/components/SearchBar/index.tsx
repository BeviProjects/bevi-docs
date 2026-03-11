"use client";
import { useLibSelectedContext } from "@/contexts/LibSelectedContext";
import { BvIcon } from "bevi-icon";

export function SearchBar() {
  const { searchTerm, setSearchTerm } = useLibSelectedContext();

  return (
    <div className="w-fit flex flex-row gap-2xs p-4xs inset-ring-1 inset-ring-gray-75 rounded-sm bg-white">
      <input
        type="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Buscar..."
        className="min-w-10xl px-2xs h-2xl leading-none text-gray-55 inset-ring-1 inset-ring-gray-75 rounded-2xs"
      />

      <button
        type="button"
        title="Buscar"
        className="size-2xl flex-center cursor-pointer text-gray-55 hover:text-violet-20"
      >
        <BvIcon name="search" width={16} />
      </button>
    </div>
  );
}
