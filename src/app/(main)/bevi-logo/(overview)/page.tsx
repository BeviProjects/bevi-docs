"use client";
import { ButtonShow } from "@component/ButtonShow";
import { Container } from "@component/Container";
import { useLibSelectedContext } from "@context/LibSelectedContext";
import { BvLogo, type LogoRegistryType, logos } from "bevi-logo";

const BeviLogo = () => {
  const { groupedData, sortedLetters, isFiltering } =
    useLibSelectedContext<LogoRegistryType>();

  const handleClick = (selected: string) => {
    console.log(`Click: `, selected);
  };
  return (
    <>
      <>
        <section className="mb-2xl">
          <Container size="full">
            <h1 className="text-2xl font-bold text-violet-20">
              Overview {logos.length}
            </h1>
          </Container>
        </section>

        {/* Estado vazio — só aparece quando há busca ativa sem resultados */}
        {isFiltering && sortedLetters.length === 0 && (
          <section>
            <Container size="full">
              <p>Nenhum resultado encontrado.</p>
            </Container>
          </section>
        )}

        <section>
          <Container size="full">
            <div className="space-y-md">
              {sortedLetters.map((letter) => (
                <div key={letter} id={letter}>
                  <h2 className="text-xl font-semibold text-gray-65 mb-2xs pl-md">
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
        </section>
      </>
    </>
  );
};

export default BeviLogo;
