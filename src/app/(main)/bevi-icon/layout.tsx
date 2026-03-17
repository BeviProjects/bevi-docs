"use client";
import { LibSelectedProvider } from "@context/LibSelectedContext";

import { type BvIconRegistry, allBvIcons } from "bevi-icon";

import type { ReactNode } from "react";
import { Suspense } from "react";
import { Footer } from "@component/Footer";
import { IconVariantProvider } from "@/app/(main)/bevi-icon/contexts/IconVariantContext";
import { IconSelectet } from "./contexts/IconSelectedContext";

const BeviIconLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <Suspense>
      <LibSelectedProvider<BvIconRegistry> initialData={allBvIcons}>
        <IconVariantProvider initialData={{ variant: "duo", weight: 400 }}>
          <IconSelectet.Provider>
            <div className="w-full">
              <main className="flex-bgs pb-5xl">{children}</main>
              <Footer total={allBvIcons.length} />
            </div>
          </IconSelectet.Provider>
        </IconVariantProvider>
      </LibSelectedProvider>
    </Suspense>
  );
};

export default BeviIconLayout;
