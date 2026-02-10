"use client";
import { groupByFirstLetter } from "@util/grouping";
// src/contexts/LibSelected/provider.tsx
import { createContext, type ReactNode, useMemo, useState } from "react";
import type { LibSelectedType } from "./type";

export type GroupableItem = { displayName: string };

export const LibSelectedContext =
	createContext<LibSelectedType<GroupableItem> | null>(null);

type ProviderProps<T extends GroupableItem> = {
	children: ReactNode;
	initialData?: readonly T[] | T[];
};

export const Provider = <T extends GroupableItem>({
	children,
	initialData = [],
}: ProviderProps<T>) => {
	const [data, setData] = useState<T[]>([...initialData]);

	const groupedData = useMemo(() => groupByFirstLetter(data), [data]);

	const sortedLetters = useMemo(() => Object.keys(groupedData), [groupedData]);

	const value: LibSelectedType<T> = {
		data,
		setData,
		groupedData,
		sortedLetters,
	};

	return (
		<LibSelectedContext.Provider
			value={value as unknown as LibSelectedType<GroupableItem>}
		>
			{children}
		</LibSelectedContext.Provider>
	);
};
