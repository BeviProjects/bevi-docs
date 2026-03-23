"use client";
import { useIconGlobalVariantContext } from "@bevi-icon/contexts/IconGlobalVariantContext";
import { IconSelected } from "@bevi-icon/contexts/IconSelectedContext";
import type { VariantType, WeightType } from "@bevi-icon/types/variants";
import { InputColor } from "@component/InputColor";
import { useLibSelectedContext } from "@context/LibSelectedContext";
import useElementSize from "@hook/useElementSize";
import type { BvIconRegistry } from "bevi-icon";
import type { ReactNode } from "react";
import { ActionBar } from "@/components/ActionBar";
import { AlphabeticLinks } from "@/components/AlphabetLinks";
import { SearchBar } from "@/components/SearchBar";
import { Switch } from "@/components/Switch";
import { variantsSwitch, weightsSwitch } from "../data/variantsSwitch";

const BeviIconLayout = ({
	children,
}: Readonly<{
	children: ReactNode;
}>) => {
	const { sortedLetters } = useLibSelectedContext<BvIconRegistry>();
	const [ref, { height }] = useElementSize<HTMLDivElement>();
	const { variant, setVariant, weight, setWeight, color, setColor } =
		useIconGlobalVariantContext();

	return (
		<IconSelected.Provider>
			<ActionBar ref={ref}>
				<div className="flex flex-col gap-2xs">
					<div className="flex flex-col xl:flex-row gap-2xs">
						<SearchBar />

						<AlphabeticLinks letters={sortedLetters} />
					</div>
					<div className="flex flex-row gap-2xs">
						<Switch
							data={weightsSwitch}
							defaultValue={weight}
							onChangeTransform={(item) => item.value as WeightType}
							onChange={(selected) => setWeight(selected)}
						/>
						<Switch
							data={variantsSwitch}
							defaultValue={variant}
							onChangeTransform={(item) => item.value as VariantType}
							onChange={(selected) => setVariant(selected)}
						/>

						<InputColor
							color={color}
							onChange={(selected) => setColor(selected)}
						/>
					</div>
				</div>
			</ActionBar>
			<div style={{ paddingTop: height }}>{children}</div>
		</IconSelected.Provider>
	);
};

export default BeviIconLayout;
