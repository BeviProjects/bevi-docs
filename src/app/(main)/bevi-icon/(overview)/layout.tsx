"use client";
import type { ReactNode } from "react";
import { useLibSelectedContext } from "@context/LibSelectedContext";
import useElementSize from "@hook/useElementSize";
import { BvIconRegistry, BvIconVariants } from "bevi-icon";
import { ActionBar } from "@/components/ActionBar";
import { SearchBar } from "@/components/SearchBar";
import { Switch, type SwitchData } from "@/components/Switch";
import { AlphabeticLinks } from "@/components/AlphabetLinks";
import {
  IconVariantProvider,
  useIconVariantContext,
  type VariantType,
  type WeightType,
} from "@/contexts/IconVariantContext";

const variants: SwitchData[] = [
  {
    id: "solid",
    label: "Solid",
    value: "solid",
    iconName: "cube",
    iconVariant: "solid",
  },
  {
    id: "duo",
    label: "Duo",
    value: "duo",
    iconName: "cube",
    iconVariant: "duo",
  },
  {
    id: "dark",
    label: "Dark",
    value: "dark",
    iconName: "cube",
    iconVariant: "dark",
  },
  {
    id: "light",
    label: "Light",
    value: "light",
    iconName: "cube",
    iconVariant: "light",
  },
];

const weights: SwitchData[] = [
  {
    id: "regular",
    label: "Regular",
    value: 400,
  },
  {
    id: "bold",
    label: "Bold",
    value: 600,
  },
];

const BeviIconLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const { sortedLetters } = useLibSelectedContext<BvIconRegistry>();
  const [ref, { height }] = useElementSize<HTMLDivElement>();
  const { variant, setVariant, weight, setWeight } = useIconVariantContext();

  return (
    <>
      <ActionBar ref={ref}>
        <div className="flex flex-col gap-2xs">
          <div className="flex flex-row gap-2xs justify-between">
            <SearchBar />
            <div className="flex flex-row gap-2xs">
              <Switch
                data={weights}
                defaultValue={weight}
                onChangeTransform={(item) => item.value as WeightType}
                onChange={(selected) => setWeight(selected)}
              />
              <Switch
                data={variants}
                defaultValue={variant}
                onChangeTransform={(item) => item.value as VariantType}
                onChange={(selected) => setVariant(selected)}
              />
            </div>
          </div>
          <div className="flex">
            <AlphabeticLinks letters={sortedLetters} />
          </div>
        </div>
      </ActionBar>
      <div style={{ paddingTop: height }}>{children}</div>
    </>
  );
};

export default BeviIconLayout;
