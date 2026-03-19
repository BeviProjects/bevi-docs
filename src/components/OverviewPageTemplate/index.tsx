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
	btnMinHeight?: string;
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
	btnMinHeight = "min-h-7xl",
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
						<div className="p-2xs inset-ring-1 inset-ring-gray-75 rounded-sm bg-white">
							<p className="font-semibold text-gray-35">
								Nenhum resultado encontrado.
							</p>
						</div>
					</Container>
				</section>
			)}

			<section className="pb-5xl bg-gray-95">
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
										<ButtonShow
											key={item.id}
											onClick={() => onItemClick(item)}
											className={btnMinHeight}
										>
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
