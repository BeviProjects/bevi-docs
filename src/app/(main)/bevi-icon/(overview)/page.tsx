"use client";
import { Suspense, useEffect, useState } from "react";
import { Container } from "@component/Container";
import { OverviewPageTemplate } from "@component/OverviewPageTemplate";
import { BvIcon, type BvIconRegistry } from "bevi-icon";
import { useIconVariantContext } from "@context/IconVariantContext";
import { Skeleton } from "@component/Skeleton";
import { OverviewPageSkeleton } from "@component/OverviewPageSkeleton";

const iconsWithoutRegularVersion = [
  "add",
  "chevronDownward",
  "chevronUpDouble",
  "chevronUpward",
  "close",
  "check",
];

const iconsWithoutVariants = [
  "add",
  "arrowBack",
  "arrowForward",
  "arrowNorth",
  "arrowNorthEast",
  "arrowNorthWeast",
  "arrowNorthWeast",
  "attachFile",
  "chevronBack",
  "chevronDown",
  "chevronDownward",
  "chevronForward",
  "chevronLeft",
  "chevronRight",
  "chevronUp",
  "chevronUpDouble",
  "chevronUpward",
  "close",
  "check",
  "remove",
];

const BeviIcon = () => {
  const { variant, weight } = useIconVariantContext();

  const handleClick = (selected: BvIconRegistry) => {
    console.log(`Click: `, selected);
  };

  return (
    <>
      <OverviewPageTemplate<BvIconRegistry>
        onItemClick={handleClick}
        gridConfig={{
          cols: "grid-cols-5",
        }}
        renderItem={(logo) => (
          <BvIcon
            name={logo.displayName}
            width={64}
            className="text-violet-20"
            variant={variant}
            weight={weight}
          />
        )}
      />
    </>
  );
};

export default BeviIcon;
