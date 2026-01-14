"use client";
import { Container } from "@component/Container";
import { BvLogo, logos } from "bevi-logo";
import { ButtonShow } from "@component/ButtonShow";

const BeviLogo = () => {
  // Agrupa os logos por letra inicial
  const groupedLogos = logos.reduce(
    (acc, logo) => {
      const firstLetter = logo.displayName[0].toUpperCase();

      if (!acc[firstLetter]) {
        acc[firstLetter] = [];
      }

      acc[firstLetter].push(logo);

      return acc;
    },
    {} as Record<string, Array<(typeof logos)[number]>>,
  );

  // Ordena as letras alfabeticamente
  const sortedLetters = Object.keys(groupedLogos).sort();

  return (
    <>
      <section className="mb-2xl">
        <Container>
          <h1 className="text-2xl font-bold text-violet-20">Overview</h1>
        </Container>
      </section>
      <section>
        <Container size="full">
          <div className="space-y-md">
            {sortedLetters.map((letter) => (
              <div key={letter}>
                <h2 className="text-xl font-semibold text-gray-65 mb-2xs pl-md">
                  {letter}
                </h2>
                <div className="grid grid-cols-4 gap-md">
                  {groupedLogos[letter].map((logo) => (
                    <ButtonShow key={logo.id}>
                      <div className="px-2xl py-md">
                        <BvLogo
                          name={logo.displayName}
                          height={92}
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
  );
};

export default BeviLogo;
