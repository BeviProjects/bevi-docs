"use client";
import type { VariantType, WeightType } from "@bevi-icon/types/variants";
import type { BvIconType } from "bevi-icon";
import { createContext, type ReactNode, useRef, useState } from "react";
import type { IconSelectedContextType } from "./type";

export const IconSelectedContext =
  createContext<IconSelectedContextType | null>(null);

type ProviderProps = {
  children: ReactNode;
};

export const Provider = ({ children }: ProviderProps) => {
  const iconRef = useRef<HTMLDivElement>(null);
  const [iconSelected, setIconSelected] = useState<BvIconType>(
    {} as BvIconType,
  );
  const [variantSelected, setVariantSelected] = useState<VariantType>(
    {} as VariantType,
  );
  const [weightSelected, setWeightSelected] = useState<WeightType>(
    {} as WeightType,
  );
  const [colorSelected, setColorSelected] = useState(
    variantSelected === "solid" || variantSelected === "dark"
      ? "#222343"
      : variantSelected === "light"
        ? "#25CBDB"
        : "#222343",
  );

  return (
    <IconSelectedContext.Provider
      value={{
        iconRef,
        iconSelected,
        setIconSelected,
        variantSelected,
        setVariantSelected,
        weightSelected,
        setWeightSelected,
        colorSelected,
        setColorSelected,
      }}
    >
      {children}
    </IconSelectedContext.Provider>
  );
};
