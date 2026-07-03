export function yearToTimestamp(year: number): string {
  return `${year}0101`;
}

export function timestampToYear(timestamp: string): number {
  return parseInt(timestamp.slice(0, 4), 10);
}

export function formatArchiveDate(timestamp: string): string {
  const year = timestamp.slice(0, 4);
  const month = timestamp.slice(4, 6);
  const day = timestamp.slice(6, 8);
  return `${month}/${day}/${year}`;
}
