"use client";
import { IconGlobalVariant } from "@bevi-icon/contexts/IconGlobalVariantContext";
import { Footer } from "@component/Footer";
import { LibSelectedProvider } from "@context/LibSelectedContext";
import { allBvIcons, BvIcon, type BvIconRegistry } from "bevi-icon";
import type { ReactNode } from "react";
import { Suspense } from "react";
import Link from "next/link";
import { Tooltip } from "@/components/Tooltip";
import packageJson from "../../../../package.json";

const BeviIconLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const version = packageJson.dependencies["bevi-icon"];

  return (
    <Suspense>
      <LibSelectedProvider<BvIconRegistry> initialData={allBvIcons}>
        <IconGlobalVariant.Provider
          initialData={{ variant: "duo", weight: 400 }}
        >
          <div className="w-full bg-gray-95">
            <main className="min-h-screen flex-bgs pb-5xl">{children}</main>
            <Footer>
              <div className="flex flex-row justify-between items-center py-sm">
                <div className="flex flex-row gap-md leading-none">
                  <p><b>Total de ícones:</b> {allBvIcons.length}</p>
                  <p><b>Versão da biblioteca:</b> {version}</p>
                </div>
                <div className="flex flex-row gap-2xs">
                  <Tooltip label="GitHub">
                    <Link
                      href="https://github.com/BeviProjects/bevi-icon"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-center p-2xs bg-white inset-ring inset-ring-gray-85 rounded-2xs"
                    >
                      <BvIcon
                        name="github"
                        width={24}
                        className="text-violet-20"
                      />
                    </Link>
                  </Tooltip>
                  <Tooltip label="Npm lib">
                    <Link
                      href="https://www.npmjs.com/package/bevi-icon"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-center p-2xs bg-white inset-ring inset-ring-gray-85 rounded-2xs"
                    >
                      <BvIcon
                        name="book"
                        width={24}
                        className="text-violet-20"
                      />
                    </Link>
                  </Tooltip>
                </div>
              </div>
            </Footer>
          </div>
        </IconGlobalVariant.Provider>
      </LibSelectedProvider>
    </Suspense>
  );
};

export default BeviIconLayout;
