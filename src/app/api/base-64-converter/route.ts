import { NextResponse } from 'next/server';
import { getPlaiceholder } from 'plaiceholder';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const imageUrl = searchParams.get('image_url') as string;

    const buffer = await fetch(imageUrl).then(async (res) =>
        Buffer.from(await res.arrayBuffer())
    );

    const {
        metadata: { height, width },
        ...plaiceholder
    } = await getPlaiceholder(buffer, { size: 10 });

    return NextResponse.json({
        ...plaiceholder,
        img: { imageUrl, height, width },
    });
}
