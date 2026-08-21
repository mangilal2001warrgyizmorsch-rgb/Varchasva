import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import { Article } from "@/models/Article";

export async function GET(req: Request) {
  try {
    await connectToDatabase();
    // Parse query params (e.g. ?publishedOnly=true, ?slug=foo-bar)
    const { searchParams } = new URL(req.url);
    const publishedOnly = searchParams.get("publishedOnly");
    const slug = searchParams.get("slug");

    let query: any = {};
    if (publishedOnly === "true") query.isPublished = true;
    if (slug) query.slug = slug;

    const articles = await Article.find(query).sort({ createdAt: -1 });

    return NextResponse.json({ success: true, data: articles });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await connectToDatabase();
    
    // Auto-generate slug if not provided
    if (!body.slug && body.title) {
      body.slug = body.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    }

    const article = await Article.create(body);
    return NextResponse.json({ success: true, data: article }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
