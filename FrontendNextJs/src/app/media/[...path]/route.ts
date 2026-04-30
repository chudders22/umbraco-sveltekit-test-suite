import { type NextRequest, NextResponse } from 'next/server';

const UMBRACO_URL = process.env.NEXT_PUBLIC_UMBRACO_API_URL ?? 'https://localhost:44356';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path } = await params;
  const upstreamUrl = `${UMBRACO_URL}/media/${path.join('/')}`;

  try {
    const res = await fetch(upstreamUrl, { cache: 'no-store' });
    if (!res.ok) {
      return new NextResponse(null, { status: res.status });
    }

    const contentType = res.headers.get('content-type') ?? 'application/octet-stream';
    const cacheControl = res.headers.get('cache-control') ?? 'public, max-age=31536000, immutable';

    return new NextResponse(res.body, {
      headers: { 'Content-Type': contentType, 'Cache-Control': cacheControl },
    });
  } catch {
    return new NextResponse(null, { status: 502 });
  }
}
