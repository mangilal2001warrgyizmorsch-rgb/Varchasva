import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import { Subscriber } from "@/models/Subscriber";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    
    if (!email) {
      return NextResponse.json({ success: false, error: "Email is required" }, { status: 400 });
    }

    await connectToDatabase();
    
    // Create subscriber, ignore if already exists (unique constraint)
    const subscriber = await Subscriber.findOneAndUpdate(
      { email },
      { email },
      { upsert: true, new: true }
    );
    
    return NextResponse.json({ success: true, data: subscriber }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

export async function GET() {
  try {
    await connectToDatabase();
    const subscribers = await Subscriber.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: subscribers });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
