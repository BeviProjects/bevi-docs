"use client";
import { useContext } from "react";
import { IconVariantContext } from "./provider";
import type { IconVariantType } from "./type";

export const useIconVariantContext = () =>  {
	const context = useContext(IconVariantContext);

	if (context === null) {
		throw new Error(
			"useIconVariantContext deve ser usado dentro de <IconVariantProvider>",
		);
	}

	return context as unknown as IconVariantType;
};
