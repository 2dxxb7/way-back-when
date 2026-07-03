export type WaybackSnapshot = {
  url: string;
  timestamp: string;
  available: boolean;
};

export async function checkAvailability(
  url: string,
  timestamp: string
): Promise<WaybackSnapshot | null> {
  const response = await fetch(
    `/api/wayback?url=${encodeURIComponent(url)}&timestamp=${timestamp}`
  );

  if (!response.ok) return null;

  let data: unknown;
  try {
    data = await response.json();
  } catch {
    return null;
  }
  const closest = (data as { archived_snapshots?: { closest?: { available?: boolean; url?: string; timestamp?: string } } })?.archived_snapshots?.closest;

  if (!closest?.available || !closest.url) return null;

  return {
    url: closest.url as string,
    timestamp: closest.timestamp as string,
    available: true,
  };
}
