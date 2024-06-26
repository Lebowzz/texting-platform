import connectMongoDB from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const {
    newUsername: username,
    newPassword: password,
    newEmail: email,
    newProfilePicture: profile_picture,
  } = await request.json;
  await connectMongoDB();
  await User.findByIdAndUpdate(id, { username, password });
  return NextResponse.json({ message: "User updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const user = await User.findOne({ _id: id });
  return NextResposne.json({ user }, { status: 200 });
}
