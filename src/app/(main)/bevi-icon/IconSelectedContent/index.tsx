"use client";
import { useState, useEffect } from "react";
import { Container } from "@component/Container";
import { BvIcon, type BvIconRegistry, BvIconName } from "bevi-icon";
import { useIconSelectedContext } from "../contexts/IconSelectedContext";
import { CopyBox } from "@/components/CopyBox";
import { Switch, type SwitchData } from "@component/Switch";
import {
  useIconVariantContext,
  type VariantType,
  type WeightType,
} from "@/app/(main)/bevi-icon/contexts/IconVariantContext";
import {variantsSwitch} from '../data/variantsSwitch'

export const IconSelectedContent = () => {
  const { iconSelected, setIconSelected, setVariantsSelected } = useIconSelectedContext();
  const { variant, weight } = useIconVariantContext();

  return (
    <Container className="py-2xl flex flex-row gap-2xl">
      <div className="bg-white p-2xl rounded-2xl">
        <BvIcon
          name={iconSelected.displayName as BvIconName}
          variant="duo"
          width={256}
        />
      </div>
      <div className="py-2xl flex-start flex-col gap-2xl">
        <CopyBox label="Name" value={iconSelected.name}>
          {iconSelected.name}
        </CopyBox>
        <CopyBox
          as="h3"
          size="text-xl"
          label="Display name"
          value={iconSelected.displayName}
        >
          {iconSelected.displayName}
        </CopyBox>
        <div className="flex flex-row gap-4xs">
          {iconSelected.tags.map((tag) => (
            <div className="px-4xs inset-ring-1 inset-ring-gray-85 rounded-2xs">
              <span key={tag} className="text-gray-45 leading-none">
                {tag}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        {/*<Switch
          data={variantsSwitch}
          defaultValue={"solid"}
          onChangeTransform={(item) => item.value as VariantType}
          onChange={() => setVariantsSelected({ variant: 'duo', weight: 400 })}
        />*/}
      </div>
    </Container>
  );
};
