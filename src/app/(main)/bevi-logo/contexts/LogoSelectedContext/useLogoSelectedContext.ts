"use client";

import { useContext } from "react";
import { LogoSelectedContext } from "./Provider";

export const useLogoSelectedContext = () => {
	const context = useContext(LogoSelectedContext);

	if (context === null) {
		throw new Error(
			"useLogoSelectedContext deve ser usado dentro de <LogoSelectedProvider>",
		);
	}

	return context;
};
