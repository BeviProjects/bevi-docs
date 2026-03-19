import type { VariantType, WeightType } from "@bevi-icon/types/variants";

export type IconGlobalVariantType = {
	variant: VariantType;
	setVariant: (variant: VariantType) => void;
	weight: WeightType;
	setWeight: (weight: WeightType) => void;
};
