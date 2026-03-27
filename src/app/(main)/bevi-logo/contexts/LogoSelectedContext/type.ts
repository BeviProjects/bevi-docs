import type { BvLogoType } from "bevi-logo";
import type { RefObject } from "react";
import type { VariantType, ColorType } from "@bevi-logo/types/variants";


export type LogoSelectedContextType = {
	logoRef: RefObject<HTMLDivElement | null>;
	logoSelected: BvLogoType;
  setLogoSelected: (logo: BvLogoType) => void;
	logoVariantSelected: VariantType;
  setLogoVariantSelected: (variant: VariantType) => void;
	logoColorSelected: ColorType;
  setLogoColorSelected: (color: ColorType) => void;
};
