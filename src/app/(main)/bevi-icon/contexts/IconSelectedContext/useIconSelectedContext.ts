"use client";

import { useContext } from "react";
import { IconSelectedContext } from "./Provider";

export const useIconSelectedContext = () => {
  const context = useContext(IconSelectedContext);

  if (context === null) {
    throw new Error(
      "useIconSelectedContext deve ser usado dentro de <IconSelectedProvider>",
    );
  }

  return context;
};
