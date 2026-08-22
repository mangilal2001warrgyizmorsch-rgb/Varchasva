import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectDB from "@/lib/mongodb";
import { Admin } from "@/models/Admin";

export async function GET() {
  try {
    await connectDB();

    // Check if an admin already exists
    const existingAdmin = await Admin.findOne({ username: "admin" });
    if (existingAdmin) {
      return NextResponse.json(
        { success: false, message: "Admin user already exists." },
        { status: 400 }
      );
    }

    // Hash the default password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash("Varchasva@Admin2026", salt);

    // Create the admin user
    const newAdmin = new Admin({
      username: "admin",
      password: hashedPassword,
    });

    await newAdmin.save();

    return NextResponse.json(
      { success: true, message: "Admin user created successfully." },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
