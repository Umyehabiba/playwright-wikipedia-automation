export function isSortedAlphabetically(arr: string[]): boolean {
  const normalize = (value: string) =>
    value
      .replace(/\[\d+\]/g, '') 
      .trim()
      .toLowerCase();

  const normalized = arr.map(normalize);

  const sorted = [...normalized].sort((a, b) =>
    a.localeCompare(b, undefined, { sensitivity: 'base' })
  );

  return normalized.every((value, index) => value === sorted[index]);
}

export function normalize(text: string): string {
  return text.trim().toLowerCase();
}