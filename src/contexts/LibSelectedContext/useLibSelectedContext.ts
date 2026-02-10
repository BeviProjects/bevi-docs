"use client";
import { useContext } from "react";
import { LibSelectedContext } from "./provider";
import type { LibSelectedType } from "./type";

export const useLibSelectedContext = <
	T extends { displayName: string },
>(): LibSelectedType<T> => {
	const context = useContext(LibSelectedContext);

	if (context === null) {
		throw new Error(
			"useLibSelectedContext deve ser usado dentro de <LibSelectedContext.Provider>",
		);
	}

	return context as unknown as LibSelectedType<T>;
};
