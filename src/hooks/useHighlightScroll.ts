import { useCombobox } from "downshift";
import { useCallback, useState } from "react";

export default function useHighlightScroll(virtual: boolean) {
  const [scrollIndex, setScrollIndex] = useState<number>();
  const onHighlightedIndexChange = useCallback(
    (change) => {
      if (
        virtual &&
        change.highlightedIndex !== undefined &&
        change.isOpen &&
        (change.type === useCombobox.stateChangeTypes.InputKeyDownArrowDown ||
          change.type === useCombobox.stateChangeTypes.InputKeyDownArrowUp)
      ) {
        setScrollIndex(change.highlightedIndex);
      } else {
        setScrollIndex(undefined);
      }
    },
    [virtual, setScrollIndex]
  );

  return { scrollIndex, onHighlightedIndexChange };
}
