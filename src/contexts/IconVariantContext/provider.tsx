"use client";
import { createContext, type ReactNode, useState } from "react";
import type { IconVariantType, VariantType, WeightType } from "./type";

export const IconVariantContext = createContext<IconVariantType | null>(null);

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
    <IconVariantContext.Provider value={{variant, setVariant, weight, setWeight}}>
      {children}
    </IconVariantContext.Provider>
  );
};
