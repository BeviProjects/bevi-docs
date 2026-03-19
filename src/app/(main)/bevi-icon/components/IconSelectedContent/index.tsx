"use client";
import { useIconGlobalVariantContext } from "@bevi-icon/contexts/IconGlobalVariantContext";
import { useIconSelectedContext } from "@bevi-icon/contexts/IconSelectedContext";
import { variantsSwitch, weightsSwitch } from "@bevi-icon/data/variantsSwitch";
import type { VariantType, WeightType } from "@bevi-icon/types/variants";
import { CodeBlock } from "@component/CodeBlock";
import { Container } from "@component/Container";
import { CopySvgToClipboard } from "@component/CopySvgToClipboard";
import { DownloadSvg } from "@component/DownloadSvg";
import { LabelContent } from "@component/LabelContent";
import { Switch } from "@component/Switch";
import { Tooltip } from "@component/Tooltip";
import { BvIcon, type BvIconName } from "bevi-icon";
import { useEffect, useState } from "react";
import { CopyBox } from "@/components/CopyBox";

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
	const [reactCode, setReactCode] = useState<string>("");

	useEffect(() => {
		setVariantSelected(variant);
		setWeightSelected(weight);
		console.log("variant: ", variant);
		setReactCode(
			`<BvIcon name=”${iconSelected.displayName}” ${variant !== "solid" && `variant=”${variant}”`} ${weight !== 400 && "weight={600}"} />`,
		);
	}, [variant, weight, setWeightSelected, iconSelected, setVariantSelected]);

	useEffect(() => {
		const attrs = [
			`name="${iconSelected.displayName}"`,
			variantSelected !== "solid" ? `variant="${variantSelected}"` : null,
			weightSelected !== 400 ? `weight={600}` : null,
		]
			.filter(Boolean)
			.join(" ");
		setReactCode(`<BvIcon ${attrs} />`);
	}, [iconSelected, variantSelected, weightSelected]);

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
					<CopyBox label="React" value={reactCode}>
						<CodeBlock language="html">{reactCode}</CodeBlock>
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
