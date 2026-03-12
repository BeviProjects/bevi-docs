"use client";
import type { ReactNode } from "react";
import { ActionBar } from "@/components/ActionBar";
import { logos, type LogoRegistryType } from "bevi-logo";
import { useLibSelectedContext } from "@context/LibSelectedContext";
import { AlphabeticLinks } from "@component/AlphabetLinks";
import { SearchBar } from "@/components/SearchBar";
import useElementSize from "@hook/useElementSize";

const BeviLogoLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const { sortedLetters } = useLibSelectedContext<LogoRegistryType>();
  const [ref, { height }] = useElementSize<HTMLDivElement>();

  return (
    <>
      <ActionBar ref={ref}>
        <div className="flex flex-col gap-2xs">
          <div>
            <SearchBar />
          </div>
          <div>
            <AlphabeticLinks letters={sortedLetters} />
          </div>
        </div>
      </ActionBar>
      <div style={{ paddingTop: height }}>{children}</div>
    </>
  );
};

export default BeviLogoLayout;
