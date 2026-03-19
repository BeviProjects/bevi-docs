"use client";

import { useContext } from "react";
import { DrawerContext } from "./Provider";

export const useDrawerContext = () => {
	const context = useContext(DrawerContext);

	if (context === null) {
		throw new Error(
			"useDrawerContext deve ser usado dentro de <DrawerProvider>",
		);
	}

	return context;
};
