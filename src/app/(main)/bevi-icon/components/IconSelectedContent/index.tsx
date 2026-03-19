"use client";
import { Container } from "@component/Container";
import { BvIcon, BvIconName } from "bevi-icon";
import { useIconSelectedContext } from "@bevi-icon/contexts/IconSelectedContext";
import { CopyBox } from "@/components/CopyBox";
import { variantsSwitch, weightsSwitch } from "@bevi-icon/data/variantsSwitch";
import type { VariantType, WeightType } from "@bevi-icon/types/variants";
import { Switch } from "@component/Switch";
import { useIconGlobalVariantContext } from "@bevi-icon/contexts/IconGlobalVariantContext";
import { useEffect } from "react";
import { Tooltip } from "@component/Tooltip";
import { LabelContent } from "@component/LabelContent";
import { CodeBlock } from "@component/CodeBlock";
import { CopySvgToClipboard } from "@component/CopySvgToClipboard";
import { DownloadSvg } from "@component/DownloadSvg";

export const IconSelectedContent = () => {
  const {
    iconRef,
    iconSelected,
    variantSelected,
    setVariantSelected,
    weightSelected,
    setWeightSelected,
  } = useIconSelectedContext();
  const { variant, weight } = useIconGlobalVariantContext();

  useEffect(() => {
    setVariantSelected(variant);
    setWeightSelected(weight);
  }, [variant, weight]);

  return (
    <Container className="py-2xl flex flex-row gap-2xl">
      <div className="p-2xs bg-gray-95 rounded-md">
        <div
          className="size-10xl bg-white inset-ring-1 inset-ring-gray-90 rounded-2xs"
          ref={iconRef}
        >
          <BvIcon
            name={iconSelected.displayName as BvIconName}
            variant={variantSelected}
            weight={weightSelected}
            width={256}
          />
        </div>
        <div className="flex-center flex-row gap-2xs mt-2xs">
          <DownloadSvg
            targetRef={iconRef}
            filename={iconSelected.id}
            className={`
            w-full flex-center flex-row gap-2xs
            py-2xs px-md
            leading-none text-gray-35 hover:text-gray-15 disabled:text-gray-75
            rounded-2xs bg-gray-98
            ring-4 ring-transparent hover:ring-gray-75
            cursor-pointer disabled:cursor-not-allowed`}
          >
            SVG <BvIcon name="download" width={16} />
          </DownloadSvg>
          <CopySvgToClipboard
            targetRef={iconRef}
            className={`
            w-full flex-center flex-row gap-2xs
            py-2xs px-md
            leading-none text-gray-35 hover:text-gray-15 disabled:text-gray-75
            rounded-2xs bg-gray-98
            ring-4 ring-transparent hover:ring-gray-75
            cursor-pointer disabled:cursor-not-allowed`}
          >
            Copiar
          </CopySvgToClipboard>
          {/*<button
              className={`
              w-full flex-center flex-row gap-2xs
              py-2xs px-md
              leading-none text-gray-35 disabled:text-gray-75
              rounded-2xs bg-gray-98
              cursor-pointer disabled:cursor-not-allowed`} disabled
            >
              Copiar <BvIcon name="contentCut" width={16} />
            </button>*/}
        </div>
      </div>
      <div className="content w-full py-2xs flex-start flex-col">
        <div className="w-full flex flex-row justify-between items-start">
          <CopyBox label="Display name" value={iconSelected.displayName}>
            <h2 className="text-2xl font-bold leading-none">
              {iconSelected.displayName}
            </h2>
          </CopyBox>
          <Tooltip label="test">
            <LabelContent label="Version">
              <span
                className={`
                px-2xs pb-3xs pt-4xs
                font-semibold leading-none text-gray-35
                rounded-md inset-ring-1 inset-ring-gray-85`}
              >
                {iconSelected.metadata.iconVersion}
              </span>
            </LabelContent>
          </Tooltip>
        </div>
        <div className="w-full px-2xs pt-4xs">
          <hr className="h-px bg-gray-75 border-none" />
        </div>
        <div className="flex flex-col gap-md pt-2xl">
          <div className="flex flex-row gap-md px-2xs">
            <LabelContent label="Variant">
              <Switch
                data={variantsSwitch}
                defaultValue={variantSelected ? variantSelected : "solid"}
                onChangeTransform={(item) => item.value as VariantType}
                onChange={(selected) => setVariantSelected(selected)}
              />
            </LabelContent>
            <LabelContent label="Weight">
              <Switch
                data={weightsSwitch}
                defaultValue={weightSelected ? weightSelected : 600}
                onChangeTransform={(item) => item.value as WeightType}
                onChange={(selected) => setWeightSelected(selected)}
              />
            </LabelContent>
          </div>
          <CopyBox
            label="React"
            value="<BvIcon name=”arrowFoward” variant=”solid” weight={400} />"
          >
            <CodeBlock language="html">
              {`<BvIcon name=”arrowFoward” variant=”solid” weight={400} />`}
            </CodeBlock>
          </CopyBox>
          <div className="px-2xs">
            <LabelContent label="Tags">
              <div className="flex flex-row gap-4xs">
                {iconSelected.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`
                    px-2xs pb-3xs pt-4xs
                    font-semibold leading-none text-gray-35
                    rounded-md inset-ring-1 inset-ring-gray-85`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </LabelContent>
          </div>
        </div>
      </div>
    </Container>
  );
};
