import { Footer } from "@component/Footer";
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
        <div className="w-full">
          <main className="flex-bgs pb-5xl">{children}</main>
          <Footer>Test</Footer>
        </div>
      </LibSelectedProvider>
    </Suspense>
  );
};

export default BeviLogoLayout;
