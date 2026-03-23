"use client";
import type { VariantType, WeightType } from "@bevi-icon/types/variants";
import { createContext, type ReactNode, useState } from "react";
import type { IconGlobalVariantType } from "./type";

export const IconGlobalVariantContext =
	createContext<IconGlobalVariantType | null>(null);

type ProviderProps = {
	children: ReactNode;
	initialData: {
		variant: VariantType;
		weight: WeightType;
	};
};

export const Provider = ({ children, initialData }: ProviderProps) => {
	const [variant, setVariant] = useState(initialData.variant);
	const [weight, setWeight] = useState(initialData.weight);
	const [color, setColor] = useState(
		variant === "solid" || variant === "dark"
			? "#222343"
			: variant === "light"
				? "#25CBDB"
				: "#222343",
	);

	console.log(color);

	return (
		<IconGlobalVariantContext.Provider
			value={{ variant, setVariant, weight, setWeight, color, setColor }}
		>
			{children}
		</IconGlobalVariantContext.Provider>
	);
};
