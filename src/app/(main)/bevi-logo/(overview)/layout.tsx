"use client";
import { AlphabeticLinks } from "@component/AlphabetLinks";
import { useLibSelectedContext } from "@context/LibSelectedContext";
import useElementSize from "@hook/useElementSize";
import type { BvLogoRegistryType } from "bevi-logo";
import type { ReactNode } from "react";
import { ActionBar } from "@/components/ActionBar";
import { SearchBar } from "@/components/SearchBar";
import { LogoSelected } from "@bevi-logo/contexts/LogoSelectedContext";

const BeviLogoLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const { sortedLetters } = useLibSelectedContext<BvLogoRegistryType>();
  const [ref, { height }] = useElementSize<HTMLDivElement>();

  return (
    <LogoSelected.Provider>
      <ActionBar ref={ref}>
        <div className="flex flex-col gap-2xs">
          <div className="flex flex-col xl:flex-row gap-2xs">
            <SearchBar />
            <AlphabeticLinks letters={sortedLetters} />
          </div>
        </div>
      </ActionBar>
      <div style={{ paddingTop: height }}>{children}</div>
    </LogoSelected.Provider>
  );
};

export default BeviLogoLayout;
