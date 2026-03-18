"use client";
import { createContext, type ReactNode, useState } from "react";
import type { IconSelectedContextType } from "./type";
import type { BvIconType, BvIconVariants } from "bevi-icon";
import type { VariantType, WeightType } from "@bevi-icon/types/variants";

export const IconSelectedContext =
  createContext<IconSelectedContextType | null>(null);

type ProviderProps = {
  children: ReactNode;
};

export const Provider = ({ children }: ProviderProps) => {
  const [iconSelected, setIconSelected] = useState<BvIconType>({} as BvIconType);
  const [variantSelected, setVariantSelected] = useState<VariantType>({} as VariantType);
  const [weightSelected, setWeightSelected] = useState<WeightType>({} as WeightType);

  return (
    <IconSelectedContext.Provider value={{ iconSelected, setIconSelected, variantSelected, setVariantSelected, weightSelected, setWeightSelected }}>
      {children}
    </IconSelectedContext.Provider>
  );
};
