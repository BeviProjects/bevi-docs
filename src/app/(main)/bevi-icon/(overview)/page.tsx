"use client";
import { useEffect, useRef, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { OverviewPageTemplate } from "@component/OverviewPageTemplate";
import { BvIcon, type BvIconRegistry, allBvIcons } from "bevi-icon";
import { useIconGlobalVariantContext } from "@bevi-icon/contexts/IconGlobalVariantContext";
import { VaulDrawer } from "@/components/VaulDrawer";
import { useDrawerContext } from "@/contexts/DrawerContext";
import { useIconSelectedContext } from "../contexts/IconSelectedContext";
import { IconSelectedContent } from "@bevi-icon/components/IconSelectedContent";
import { resolveIconException } from "@bevi-icon/utils/resolveIconExeptions";

const BeviIcon = () => {
  const { variant, weight } = useIconGlobalVariantContext();
  const { toggle, setToggle } = useDrawerContext();
  const { setIconSelected } = useIconSelectedContext();
  const router = useRouter();
  const searchParams = useSearchParams();
  const isMounted = useRef(false);

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

  const updateIconParam = useCallback(
    (iconName?: string) => {
      const params = new URLSearchParams(searchParams.toString());
      iconName ? params.set("icon", iconName) : params.delete("icon");
      router.replace(`?${params.toString()}`, { scroll: false });
    },
    [searchParams, router],
  );

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
    if (!iconParam) return;

    const found = allBvIcons.find((icon) => icon.displayName === iconParam);
    if (found) openDrawer(found);
  }, []);

  // Sincroniza o fechamento do drawer com a URL
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }

    if (!toggle) closeDrawer();
  }, [toggle]);

  return (
    <>
      <OverviewPageTemplate<BvIconRegistry>
        onItemClick={openDrawer}
        gridConfig={{
          cols: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6",
        }}
        renderItem={(icon) => {
          const { variant: resolveVariant, weight: resolveWeight } =
            hasInteractedRef.current
              ? { variant, weight }
              : resolveIconException(icon.id, variant, weight);

          return (
            <BvIcon
              name={icon.displayName}
              width={64}
              className={`${variant === "light" ? "text-ciano-50" : "text-violet-20"}`}
              variant={resolveVariant}
              weight={resolveWeight}
            />
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
