import connectMongoDB from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import Encrypt from "../Encrypt";

const fs = require("fs");

export async function POST(request) {
  /* Taking user info & awaiting connection to database */
  const { first_name, last_name, email, password } = await request.json();
  await connectMongoDB();

  /* creating default username */
  const username = `@${first_name}${last_name}`; // make it unique later on

  /* Hashing password (Encrypt function not added in the same file for security mesures) */
  password = Encrypt(password);

  /* adding default profile picture */
  const imageBuffer = fs.readFileSync("icons/black");
  const profile_picture = imageBuffer;
  const profile_picture_type = "image/png";

  /* creating the variables that weren't taken from the user */
  const isLoggedIn = true;
  const isInDarkMode = false;
  const isTyping = false;

  /* Creating user */
  await User.create({ first_name, last_name, username, password, email });

  return NextResponse.json({ message: "User created" }, { status: 201 });
}
