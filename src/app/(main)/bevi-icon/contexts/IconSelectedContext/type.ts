import type { BvIconType, BvIconVariants,  } from 'bevi-icon'

export type IconSelectedContextType = {
  iconSelected: BvIconType;
  setIconSelected: (icon: BvIconType) => void;
  variantsSelected: BvIconVariants;
  setVariantsSelected: (variantsSelected: BvIconVariants) => void;
};
