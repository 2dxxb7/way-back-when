import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');
  const timestamp = searchParams.get('timestamp') ?? '';

  if (!url) {
    return NextResponse.json({ error: 'url is required' }, { status: 400 });
  }

  const archiveUrl =
    `https://archive.org/wayback/available` +
    `?url=${encodeURIComponent(url)}` +
    (timestamp ? `&timestamp=${timestamp}` : '');

  try {
    const response = await fetch(archiveUrl, {
      headers: {
        'User-Agent': 'WayBackWhen/1.0 (https://github.com/personal/way-back-when)',
      },
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `Archive API responded ${response.status}` },
        { status: 502 }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: 'Failed to reach archive.org' }, { status: 500 });
  }
}
