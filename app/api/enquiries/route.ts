import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import { Enquiry } from "@/models/Enquiry";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await connectToDatabase();
    
    const enquiry = await Enquiry.create(body);
    return NextResponse.json({ success: true, data: enquiry }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

export async function GET() {
  try {
    await connectToDatabase();
    // Assuming GET is only accessed by admin. We can add auth checks here later if not using middleware, 
    // but middleware is preferred for route protection.
    const enquiries = await Enquiry.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: enquiries });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
