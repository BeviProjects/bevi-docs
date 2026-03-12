'use client'
import { LibSelectedProvider } from "@context/LibSelectedContext";

import { type BvIconRegistry, allBvIcons } from "bevi-icon";


import type { ReactNode } from "react";
import { Suspense } from "react";
import { Footer } from "@component/Footer";

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
        <div className="w-full">
          <main className="flex-bgs pb-5xl">{children}</main>
          <Footer total={allBvIcons.length} />
        </div>
      </LibSelectedProvider>
    </Suspense>
  );
};

export default BeviIconLayout;
