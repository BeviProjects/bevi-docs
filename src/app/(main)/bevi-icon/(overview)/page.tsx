"use client";
import { IconSelectedContent } from "@bevi-icon/components/IconSelectedContent";
import { useIconGlobalVariantContext } from "@bevi-icon/contexts/IconGlobalVariantContext";
import { resolveIconException } from "@bevi-icon/utils/resolveIconExeptions";
import { OverviewPageTemplate } from "@component/OverviewPageTemplate";
import { Tooltip } from "@component/Tooltip";
import { allBvIcons, BvIcon, type BvIconRegistry } from "bevi-icon";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";
import { VaulDrawer } from "@/components/VaulDrawer";
import { useDrawerContext } from "@/contexts/DrawerContext";
import { useIconSelectedContext } from "../contexts/IconSelectedContext";

const BeviIcon = () => {
	const { variant, weight, color } = useIconGlobalVariantContext();
	const { toggle, setToggle } = useDrawerContext();
	const { setIconSelected } = useIconSelectedContext();
	const router = useRouter();
	const searchParams = useSearchParams();
	const isMounted = useRef(false);
	const searchParamsRef = useRef(searchParams);

	const initialVariantRef = useRef(variant);
	const initialWeightRef = useRef(weight);
	const hasInteractedRef = useRef(false);

	if (
		!hasInteractedRef.current &&
		(variant !== initialVariantRef.current ||
			weight !== initialWeightRef.current)
	) {
		hasInteractedRef.current = true;
	}

	useEffect(() => {
		searchParamsRef.current = searchParams;
	}, [searchParams]);

	const routerRef = useRef(router);
	useEffect(() => {
		routerRef.current = router;
	}, [router]);

	const updateIconParam = useCallback((iconName?: string) => {
		const params = new URLSearchParams(searchParamsRef.current.toString());
		iconName ? params.set("icon", iconName) : params.delete("icon");
		routerRef.current.replace(`?${params.toString()}`, { scroll: false });
	}, []); // ← sem dependências que causam recriação

	const openDrawer = useCallback(
		(selected: BvIconRegistry) => {
			setIconSelected(selected);
			setToggle(true);
			updateIconParam(selected.displayName);
		},
		[setIconSelected, setToggle, updateIconParam],
	);

	const closeDrawer = useCallback(() => {
		setToggle(false);
		updateIconParam();
	}, [setToggle, updateIconParam]);

	// Abre o drawer se houver ?icon= na URL ao montar
	useEffect(() => {
		const iconParam = searchParams.get("icon");
		if (!iconParam || isMounted.current) return; // só na montagem

		const found = allBvIcons.find((icon) => icon.displayName === iconParam);
		if (found) {
			setIconSelected(found);
			setToggle(true);
		}
		isMounted.current = true;
	}, [searchParams.get, setIconSelected, setToggle]); // ← roda só uma vez, na montagem

	// Sincroniza o fechamento do drawer com a URL
	useEffect(() => {
		if (!isMounted.current) {
			isMounted.current = true;
			return;
		}

		if (!toggle) closeDrawer();
	}, [toggle, closeDrawer]);

	return (
		<>
			<OverviewPageTemplate<BvIconRegistry>
				onItemClick={openDrawer}
				gridConfig={{
					cols: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6",
				}}
				renderItem={(icon) => {
					const {
						variant: resolveVariant,
						weight: resolveWeight,
						isExeption,
					} = hasInteractedRef.current
						? { variant, weight }
						: resolveIconException(icon.id, variant, weight, false);

					return (
						<>
							<BvIcon
								name={icon.displayName}
								width={64}
								variant={resolveVariant}
								weight={resolveWeight}
								style={{ color: color }}
							/>

							{isExeption && (
								<aside className="absolute top-2xs right-2xs">
									<Tooltip label="Esse ícone só tem versão Solid">
										<div className="group size-2xl flex-center inset-ring-1 inset-ring-gray-90 rounded-2xs bg-gray-95">
											<BvIcon
												name="info"
												weight={600}
												width={16}
												className="text-gray-55 group-hover:text-gray-35"
											/>
										</div>
									</Tooltip>
								</aside>
							)}
						</>
					);
				}}
			/>

			<VaulDrawer title="Just a test" description="Its a test">
				<IconSelectedContent />
			</VaulDrawer>
		</>
	);
};

export default BeviIcon;
