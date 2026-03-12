"use client";
import type { ReactNode } from "react";
import { useLibSelectedContext } from "@context/LibSelectedContext";
import useElementSize from "@hook/useElementSize";
import { BvIconRegistry, BvIconVariants } from "bevi-icon";
import { ActionBar } from "@/components/ActionBar";
import { SearchBar } from "@/components/SearchBar";
import { Switch, type SwitchData } from "@/components/Switch";

const variants: SwitchData[] = [
  {
    id: "solid",
    label: "Solid",
    value: 'solid',
  },
  {
    id: "duo",
    label: "Duo",
    value: 'duo',
  },
  {
    id: "dark",
    label: "Dark",
    value: 'dark',
  },
  {
    id: "light",
    label: "Light",
    value: 'light',
  },
]

const BeviIconLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const { sortedLetters } = useLibSelectedContext<BvIconRegistry>();
  const [ref, { height }] = useElementSize<HTMLDivElement>();

  return (
    <>
      <ActionBar ref={ref}>
        <div>
          <div>
          <SearchBar />

          </div>
          <div>
            <Switch data={variants} />
          </div>
        </div>
      </ActionBar>
      <div style={{ paddingTop: height }}>{children}</div>
    </>
  );
};

export default BeviIconLayout;
