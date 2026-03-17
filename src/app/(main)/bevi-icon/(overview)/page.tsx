"use client";
import { OverviewPageTemplate } from "@component/OverviewPageTemplate";
import { BvIcon, type BvIconRegistry, BvIconName } from "bevi-icon";
import { useIconVariantContext } from "@/app/(main)/bevi-icon/contexts/IconVariantContext";
import { VaulDrawer } from "@/components/VaulDrawer";
import { useDrawerContext } from "@/contexts/DrawerContext";
import { useIconSelectedContext } from "../contexts/IconSelectedContext";
import { IconSelectedContent } from "../IconSelectedContent";

const BeviIcon = () => {
  const { variant, weight } = useIconVariantContext();
  const { setToggle } = useDrawerContext();
  const { setIconSelected } = useIconSelectedContext();

  const handleClick = (selected: BvIconRegistry) => {
    setIconSelected(selected);
    setToggle(true);
  };

  return (
    <>
      <OverviewPageTemplate<BvIconRegistry>
        onItemClick={handleClick}
        gridConfig={{
          cols: "grid-cols-5",
        }}
        renderItem={(logo) => {
          return (
            <BvIcon
              name={logo.displayName}
              width={64}
              className={`${variant === "light" ? "text-ciano-50" : "text-violet-20"}`}
              variant={variant}
              weight={weight}
            />
          );
        }}
      />

      <VaulDrawer title="Just a test" aria-describedby="test">
        <IconSelectedContent />
      </VaulDrawer>
    </>
  );
};

export default BeviIcon;
