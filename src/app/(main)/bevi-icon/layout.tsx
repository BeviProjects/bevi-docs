'use client'
import { LibSelectedProvider } from "@context/LibSelectedContext";

import { type BvIconRegistry, allBvIcons } from "bevi-icon";


import type { ReactNode } from "react";
import { Suspense } from "react";
import { Footer } from "@component/Footer";
import {IconVariantProvider} from '@context/IconVariantContext'

const BeviIconLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  console.log("allArray", allBvIcons);
  console.log("allArray.length", allBvIcons.length);

  return (
    <Suspense>
      <LibSelectedProvider<BvIconRegistry> initialData={allBvIcons}>
        <IconVariantProvider initialData={{ variant: "duo", weight: 400 }}>
        <div className="w-full">
          <main className="flex-bgs pb-5xl">{children}</main>
          <Footer total={allBvIcons.length} />
          </div>
        </IconVariantProvider>
      </LibSelectedProvider>
    </Suspense>
  );
};

export default BeviIconLayout;
