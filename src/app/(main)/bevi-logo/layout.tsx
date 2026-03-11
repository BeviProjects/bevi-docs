import { LibSelectedProvider } from "@context/LibSelectedContext";
import { type LogoRegistryType, logos } from "bevi-logo";
import type { ReactNode } from "react";
import { Suspense } from "react";

const BeviLogoLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <Suspense>
      <LibSelectedProvider<LogoRegistryType> initialData={logos}>
        {children}
      </LibSelectedProvider>
    </Suspense>
  );
};

export default BeviLogoLayout;
