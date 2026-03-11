"use client";
import type { ReactNode } from "react";
import { ActionBar } from "@/components/ActionBar";
import type { LogoRegistryType } from "bevi-logo";
import { useLibSelectedContext } from "@context/LibSelectedContext";
import { AlphabeticLinks } from "@component/AlphabetLinks";
import { SearchBar } from "@/components/SearchBar";

const BeviLogoLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const { groupedData, sortedLetters } =
    useLibSelectedContext<LogoRegistryType>();

  return (
    <>
      <ActionBar>
        <div className="flex flex-col gap-2xs">
          <div>
            <SearchBar />
          </div>
          <div>
            <AlphabeticLinks letters={sortedLetters} />
          </div>
        </div>
      </ActionBar>
      {children}
    </>
  );
};

export default BeviLogoLayout;
