"use client";
import { LibSelectedProvider } from "@context/LibSelectedContext";

import { type BvIconRegistry, allBvIcons } from "bevi-icon";

import type { ReactNode } from "react";
import { Suspense } from "react";
import { Footer } from "@component/Footer";
import { IconGlobalVariant } from "@bevi-icon/contexts/IconGlobalVariantContext";


const BeviIconLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <Suspense>
      <LibSelectedProvider<BvIconRegistry> initialData={allBvIcons}>
        <IconGlobalVariant.Provider
          initialData={{ variant: "duo", weight: 400 }}
        >
          <div className="w-full bg-gray-95">
            <main className="min-h-screen flex-bgs pb-5xl">{children}</main>
            <Footer total={allBvIcons.length} />
          </div>
        </IconGlobalVariant.Provider>
      </LibSelectedProvider>
    </Suspense>
  );
};

export default BeviIconLayout;
