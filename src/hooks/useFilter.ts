import { useMemo, useState } from "react";

export default function useFilter<T>(
  allItems: T[],
  filter: (input: string) => (item: T) => boolean
) {
  const [inputValue, setInputValue] = useState<string>("");

  const items = useMemo(() => {
    if (inputValue) {
      const predicate = filter(inputValue);
      return allItems.filter(predicate);
    }
    return allItems;
  }, [allItems, inputValue, filter]);

  return {
    items,
    inputValue,
    setInputValue,
  };
}
