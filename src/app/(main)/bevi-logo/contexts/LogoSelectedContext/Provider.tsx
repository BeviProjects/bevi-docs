"use client";
import type {} from "bevi-logo";
import { createContext, type ReactNode, useRef, useState } from "react";
import type { LogoSelectedContextType } from "./type";
import type { BvLogoType } from "bevi-logo";
import type { VariantType, ColorType } from "@bevi-logo/types/variants";


export const LogoSelectedContext =
  createContext<LogoSelectedContextType | null>(null);

type ProviderProps = {
  children: ReactNode;
};

export const Provider = ({ children }: ProviderProps) => {
  const logoRef = useRef<HTMLDivElement>(null);
  const [logoSelected, setLogoSelected] = useState<BvLogoType>(
    {} as BvLogoType,
  );
  const [logoVariantSelected, setLogoVariantSelected] = useState<VariantType>({} as VariantType,);
  const [logoColorSelected, setLogoColorSelected] = useState<ColorType>({} as ColorType);

  return (
    <LogoSelectedContext.Provider
      value={{
        logoRef,
        logoSelected,
        setLogoSelected,
        logoVariantSelected,
        setLogoVariantSelected,
        logoColorSelected,
        setLogoColorSelected,
      }}
    >
      {children}
    </LogoSelectedContext.Provider>
  );
};
