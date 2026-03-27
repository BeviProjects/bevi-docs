"use client";
import { useLogoSelectedContext } from "@bevi-logo/contexts/LogoSelectedContext";
import { Container } from "@component/Container";
import { BvLogo, type BvLogoNameType } from "bevi-logo";
import { CopyBox } from "@component/CopyBox";
import { Tooltip } from "@component/Tooltip";
import { LabelContent } from "@component/LabelContent";
import { useEffect } from "react";


export const LogoSelectedContent = () => {
  const {
    logoRef,
    logoSelected,
    logoVariantSelected,
    setLogoVariantSelected,
    logoColorSelected,
    setLogoColorSelected
  } = useLogoSelectedContext();

 //  useEffect(() => {
	// 	setLogoVariantSelected('default');
	// 	setLogoColorSelected('default');
	// }, [setLogoColorSelected, setLogoVariantSelected]);

  return (
    <Container className="py-2xl flex-start flex-row gap-2xl">
      <div className="p-2xs bg-gray-95 rounded-md">
        <div
          className="size-10xl flex-center p-md bg-white inset-ring-1 inset-ring-gray-90 rounded-2xs"
          ref={logoRef}
        >
          <BvLogo
            name={logoSelected.displayName as BvLogoNameType}
            width={256}
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="content flex-bgs w-full py-2xs flex-start flex-col">
        <div className="w-full flex flex-row justify-between items-start">
          <CopyBox label="Display name" value={logoSelected.displayName}>
            <h2 className="text-2xl font-bold leading-none">
              {logoSelected.displayName}
            </h2>
          </CopyBox>
          <div className="flex flex-row gap-2xs">
            <Tooltip
              label={logoSelected.metadata.createdAt.replaceAll("-", "/")}
            >
              <LabelContent label="Created">
                <span
                  className={`
                    px-2xs pb-3xs pt-4xs
                    font-semibold leading-none text-gray-35
                    rounded-md inset-ring-1 inset-ring-gray-85`}
                >
                  {logoSelected.metadata.updatedIn}
                </span>
              </LabelContent>
            </Tooltip>
            {logoSelected.metadata.createdAt !==
              logoSelected.metadata.updatedAt && (
              <Tooltip
                label={logoSelected.metadata.updatedAt.replaceAll("-", "/")}
              >
                <LabelContent label="Updated">
                  <span
                    className={`
                    px-2xs pb-3xs pt-4xs
                    font-semibold leading-none text-gray-35
                    rounded-md inset-ring-1 inset-ring-gray-85`}
                  >
                    {logoSelected.metadata.updatedIn}
                  </span>
                </LabelContent>
              </Tooltip>
            )}
          </div>
        </div>

        <div className="w-full px-2xs pt-4xs">
          <hr className="h-px bg-gray-75 border-none" />
        </div>

        <div className="flex flex-col gap-md px-2xs pt-2xl">
          {logoSelected.variants.variant.length !== 1 && (
            <LabelContent label="Variant">
              {logoSelected.variants.variant.map((v: string) => (
                <button
                  type="button"
                  key={v}
                  onClick={() => setLogoVariantSelected(v)}
                >
                  {v}
                </button>
              ))}
            </LabelContent>
          )}
        </div>
      </div>
    </Container>
  );
};
