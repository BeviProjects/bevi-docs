"use client";
import { ButtonShow } from "@component/ButtonShow";
import { Container } from "@component/Container";
import { useLibSelectedContext } from "@context/LibSelectedContext";
import useHash from "@hook/useHash";

type GridConfig = {
  cols?: string;
  gap?: string;
};

type LibraryPageTemplateProps<TItem> = {
  renderItem: (item: TItem) => React.ReactNode;
  onItemClick: (item: TItem) => void;
  gridConfig?: GridConfig;
};

const DEFAULT_GRID: GridConfig = {
  cols: "grid-cols-4",
  gap: "gap-md",
};

export const OverviewPageTemplate = <
  TItem extends { id: string; displayName: string },
>({
  renderItem,
  onItemClick,
  gridConfig = DEFAULT_GRID,
}: LibraryPageTemplateProps<TItem>) => {
  const { groupedData, sortedLetters, isFiltering } =
    useLibSelectedContext<TItem>();

  const hash = useHash();

  const { cols = DEFAULT_GRID.cols, gap = DEFAULT_GRID.gap } = gridConfig;

  return (
    <>
      {isFiltering && sortedLetters.length === 0 && (
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
                  className={`text-xl font-semibold mb-2xs pl-md ${
                    hash === letter ? "text-violet-20" : "text-gray-65"
                  }`}
                >
                  {letter}
                </h2>
                <div className={`grid ${cols} ${gap}`}>
                  {groupedData[letter].map((item) => (
                    <ButtonShow key={item.id} onClick={() => onItemClick(item)}>
                      {renderItem(item)}
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
