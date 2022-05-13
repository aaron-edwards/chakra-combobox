import escapeRegExp from "lodash.escaperegexp";

export function defaultItemToString<T>(item: T | null) {
  if (item) {
    return typeof item === "string" ? item : JSON.stringify(item);
  }
  return "";
}

export function createDefaultFilter<T>(itemToString: (item: T) => string) {
  return (input: string) => {
    const re = new RegExp(escapeRegExp(input), "i");
    return (item: T) => !!itemToString(item).match(re);
  };
}
