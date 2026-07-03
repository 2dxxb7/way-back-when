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

  const data = await response.json();
  const closest = data?.archived_snapshots?.closest;

  if (!closest?.available || !closest.url) return null;

  return {
    url: closest.url as string,
    timestamp: closest.timestamp as string,
    available: true,
  };
}
