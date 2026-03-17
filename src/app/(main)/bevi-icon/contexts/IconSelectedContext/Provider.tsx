"use client";
import { createContext, type ReactNode, useState } from "react";
import type { IconSelectedContextType } from "./type";
import type { BvIconType, BvIconVariants } from "bevi-icon";

export const IconSelectedContext =
  createContext<IconSelectedContextType | null>(null);

type ProviderProps = {
  children: ReactNode;
};

export const Provider = ({ children }: ProviderProps) => {
  const [iconSelected, setIconSelected] = useState<BvIconType>({} as BvIconType);
  const [variantsSelected, setVariantsSelected] = useState<BvIconVariants>({} as BvIconVariants);

  return (
    <IconSelectedContext.Provider value={{ iconSelected, setIconSelected, variantsSelected, setVariantsSelected }}>
      {children}
    </IconSelectedContext.Provider>
  );
};
