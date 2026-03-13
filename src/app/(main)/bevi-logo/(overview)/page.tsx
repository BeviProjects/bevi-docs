"use client";
import { BvLogo, type LogoRegistryType } from "bevi-logo";
import { OverviewPageTemplate } from "@component/OverviewPageTemplate";

const BeviLogo = () => {
  const handleClick = (selected: LogoRegistryType) => {
    console.log(`Click: `, selected);
  };
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

      <OverviewPageTemplate<LogoRegistryType>
        onItemClick={handleClick}
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
    </>
  );
};

export default BeviLogo;
