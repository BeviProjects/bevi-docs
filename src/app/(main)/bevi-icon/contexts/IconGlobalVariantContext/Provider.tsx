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

	return (
		<IconGlobalVariantContext.Provider
			value={{ variant, setVariant, weight, setWeight }}
		>
			{children}
		</IconGlobalVariantContext.Provider>
	);
};
