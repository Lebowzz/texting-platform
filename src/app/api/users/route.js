import connectMongoDB from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import Encrypt from "../Encrypt";

const fs = require("fs");

export async function POST(request) {
  /* Taking user info & awaiting connection to database */
  const { firstName, lastName, email, unhashedPassword } = await request.json();
  await connectMongoDB();

  const fullName = `${firstName}${lastName}`;
  const lowerFullName = fullName.toLowerCase();

  const first_name = firstName;
  const last_name = lastName;

  /* creating default username */
  const username = `@${lowerFullName}`; // make it unique later on

  /* Hashing password (Encrypt function not added in the same file for security mesures) */
  const password = Encrypt(unhashedPassword);

  /* adding default profile picture */
  const imageBuffer = fs.readFileSync("public/icons/black.png");
  const profile_picture = imageBuffer;
  const profile_picture_type = "image/png";

  /* creating the variables that weren't taken from the user */
  const isLoggedIn = true;
  const isInDarkMode = false;
  const isTyping = false;

  /* Creating user */
  await User.create({
    first_name,
    last_name,
    email,
    username,
    password,
    profile_picture,
    profile_picture_type,
    isLoggedIn,
    isInDarkMode,
    isTyping,
  });

  return NextResponse.json({ message: "User created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const users = await User.find();
  return NextResponse.json({ users });
}

export async function DELELTE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await User.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}
