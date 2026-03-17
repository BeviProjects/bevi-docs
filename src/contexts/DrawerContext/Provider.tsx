"use client";
import { createContext, type ReactNode, useState } from "react";
import { Drawer } from "vaul";
import type { DrawerContextType } from "./type";

export const DrawerContext = createContext<DrawerContextType | null>(null);

type ProviderProps = {
  children: ReactNode;
};

export const Provider = ({ children }: ProviderProps) => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <DrawerContext.Provider value={{ toggle, setToggle }}>
      <Drawer.Root open={toggle} onOpenChange={setToggle} shouldScaleBackground>
        {children}
      </Drawer.Root>
    </DrawerContext.Provider>
  );
};
