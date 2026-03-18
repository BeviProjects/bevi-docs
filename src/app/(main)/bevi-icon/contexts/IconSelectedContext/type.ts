import type { BvIconType, BvIconVariants, } from 'bevi-icon'
import type { VariantType, WeightType } from "@bevi-icon/types/variants";

export type IconSelectedContextType = {
  iconSelected: BvIconType;
  setIconSelected: (icon: BvIconType) => void;
  variantSelected: VariantType;
  setVariantSelected: (variant: VariantType) => void;
  weightSelected: WeightType;
  setWeightSelected: (weight: WeightType) => void;
};
