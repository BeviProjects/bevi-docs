export const groupByFirstLetter = <T extends { displayName: string }>(
	array: readonly T[],
) => {
	const grouped = array.reduce(
		(acc, item) => {
			const firstLetter = item.displayName[0].toUpperCase();

			if (!acc[firstLetter]) {
				acc[firstLetter] = [];
			}

			acc[firstLetter].push(item);

			return acc;
		},
		{} as Record<string, T[]>,
	);

	return Object.keys(grouped)
		.sort()
		.reduce(
			(sortedAcc, letter) => {
				sortedAcc[letter] = grouped[letter];
				return sortedAcc;
			},
			{} as Record<string, T[]>,
		);
};
