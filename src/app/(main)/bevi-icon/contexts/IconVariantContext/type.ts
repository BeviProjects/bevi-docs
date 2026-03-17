import type { BvIconVariants } from "bevi-icon";

export type VariantType = BvIconVariants["variant"][number];
export type WeightType = BvIconVariants["weight"][number];

export type IconVariantType = {
  variant: VariantType;
  setVariant: (variant: VariantType) => void;
  weight: WeightType;
  setWeight: (weight: WeightType) => void;
};
