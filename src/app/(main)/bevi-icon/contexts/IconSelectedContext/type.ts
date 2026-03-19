import type { VariantType, WeightType } from "@bevi-icon/types/variants";
import type { BvIconType } from "bevi-icon";
import type { RefObject } from "react";

export type IconSelectedContextType = {
	iconRef: RefObject<HTMLDivElement | null>;
	iconSelected: BvIconType;
	setIconSelected: (icon: BvIconType) => void;
	variantSelected: VariantType;
	setVariantSelected: (variant: VariantType) => void;
	weightSelected: WeightType;
	setWeightSelected: (weight: WeightType) => void;
};
