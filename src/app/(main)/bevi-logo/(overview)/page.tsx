"use client";
import { OverviewPageTemplate } from "@component/OverviewPageTemplate";
import { allBvLogos, BvLogo, type BvLogoRegistryType } from "bevi-logo";
import { VaulDrawer } from "@/components/VaulDrawer";
import { IconSelectedContent } from "@bevi-icon/components/IconSelectedContent";
import { LogoSelectedContext } from "../contexts/LogoSelectedContext/Provider";
import { LogoSelectedContent } from '@bevi-logo/components/LogoSelectedContent'
import { useCallback, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {useLogoSelectedContext} from "@bevi-logo/contexts/LogoSelectedContext"
import { useDrawerContext } from "@/contexts/DrawerContext";


const BeviLogo = () => {
  const { setLogoSelected } = useLogoSelectedContext();
  const { toggle, setToggle } = useDrawerContext();

	const router = useRouter();
	const searchParams = useSearchParams();
	const _isMounted = useRef(false);
	const searchParamsRef = useRef(searchParams);

	const isInitialMountRef = useRef(false);
	const isSyncReadyRef = useRef(false);


	useEffect(() => {
		searchParamsRef.current = searchParams;
	}, [searchParams]);

	const routerRef = useRef(router);
	useEffect(() => {
		routerRef.current = router;
	}, [router]);

	const updateLogoParam = useCallback((logoName?: string) => {
		const params = new URLSearchParams(searchParamsRef.current.toString());
		logoName ? params.set("logo", logoName) : params.delete("logo");
		routerRef.current.replace(`?${params.toString()}`, { scroll: false });
	}, []); // ← sem dependências que causam recriação

	const openDrawer = useCallback(
		(selected: BvLogoRegistryType) => {
			setLogoSelected(selected);
			setToggle(true);
			updateLogoParam(selected.displayName);
		},
		[setLogoSelected, setToggle, updateLogoParam],
	);

	const closeDrawer = useCallback(() => {
		setToggle(false);
		updateLogoParam();
	}, [setToggle, updateLogoParam]);

	// Abre o drawer se houver ?icon= na URL ao montar
	useEffect(() => {
		if (isInitialMountRef.current) return;
		isInitialMountRef.current = true;

		const logoParam = searchParams.get("logo"); // ✅ lê o valor aqui
		if (!logoParam) return;

		const found = allBvLogos.find((logo) => logo.displayName === logoParam);
		if (found) {
			setLogoSelected(found);
			setToggle(true);
		}
	}, [searchParams.get, setLogoSelected, setToggle]); // ← roda só uma vez, na montagem

	// Sincroniza o fechamento do drawer com a URL
	useEffect(() => {
		if (!isSyncReadyRef.current) {
			isSyncReadyRef.current = true;
			return;
		}
		if (!toggle) closeDrawer();
  }, [toggle, closeDrawer]);

	return (
		<>
			{/* Estado vazio — só aparece quando há busca ativa sem resultados */}
			{/*{isFiltering && sortedLetters.length === 0 && (
        <section>
          <Container size="full">
            <p>Nenhum resultado encontrado.</p>
          </Container>
        </section>
      )}

      <section className="pb-5xl">
        <Container size="full">
          <div className="space-y-md">
            {sortedLetters.map((letter) => (
              <div key={letter} id={letter}>
                <h2
                  className={`text-xl font-semibold mb-2xs pl-md ${hash === letter ? "text-violet-20" : "text-gray-65"}`}
                >
                  {letter}
                </h2>
                <div className="grid grid-cols-4 gap-md">
                  {groupedData[letter].map((logo) => (
                    <ButtonShow
                      key={logo.id}
                      onClick={() => handleClick(logo.displayName)}
                    >
                      <div className="px-2xl py-md">
                        <BvLogo
                          name={logo.displayName}
                          width={192}
                          height={171}
                          className="w-full"
                        />
                      </div>
                    </ButtonShow>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>*/}

			<OverviewPageTemplate<BvLogoRegistryType>
				onItemClick={openDrawer}
				btnMinHeight="min-h-[203px]"
				renderItem={(logo) => (
					<BvLogo
						name={logo.displayName}
						width={192}
						height={171}
						className="w-full"
					/>
				)}
      />

      <VaulDrawer title="Bandeja de logo" description="Conteúdo do logo selecionado">
				<LogoSelectedContent />
			</VaulDrawer>
		</>
	);
};

export default BeviLogo;
