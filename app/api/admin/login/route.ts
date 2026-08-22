import { NextResponse } from "next/server";
import { SignJWT } from "jose";
import connectDB from "@/lib/mongodb";
import { Admin } from "@/models/Admin";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { password } = await req.json();

    const jwtSecret = process.env.JWT_SECRET;

    if (!jwtSecret) {
      return NextResponse.json(
        { success: false, error: "Server configuration error (JWT Secret missing)" },
        { status: 500 }
      );
    }

    await connectDB();
    const adminUser = await Admin.findOne({ username: "admin" });

    if (!adminUser) {
      return NextResponse.json(
        { success: false, error: "Admin user not found in database" },
        { status: 500 }
      );
    }

    const isMatch = await bcrypt.compare(password, adminUser.password);

    if (!isMatch) {
      return NextResponse.json(
        { success: false, error: "Invalid password" },
        { status: 401 }
      );
    }

    const secret = new TextEncoder().encode(jwtSecret);
    const alg = "HS256";

    const token = await new SignJWT({ role: "admin" })
      .setProtectedHeader({ alg })
      .setIssuedAt()
      .setExpirationTime("7d")
      .sign(secret);

    const response = NextResponse.json({ success: true }, { status: 200 });

    // Set cookie
    response.cookies.set({
      name: "admin_token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
