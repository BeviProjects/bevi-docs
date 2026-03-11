export type LibSelectedType<T> = {
  data: T[];
  setData: (data: T[]) => void;
  sortedLetters: string[];
  groupedData: Record<string, T[]>;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  isFiltering: boolean;
};
