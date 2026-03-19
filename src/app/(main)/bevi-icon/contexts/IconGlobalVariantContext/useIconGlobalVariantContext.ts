"use client";
import { useContext } from "react";
import { IconGlobalVariantContext } from "./Provider";
import type { IconGlobalVariantType } from "./type";

export const useIconGlobalVariantContext = () => {
	const context = useContext(IconGlobalVariantContext);

	if (context === null) {
		throw new Error(
			"useIconVariantContext deve ser usado dentro de <IconVariantProvider>",
		);
	}

	return context as unknown as IconGlobalVariantType;
};
