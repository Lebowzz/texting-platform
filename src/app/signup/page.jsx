"use client";

import React, { useState } from "react";
import classes from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

function SignupPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [unhashedPassword, setUnhashedPassword] = useState("");
  const [checkUnhashedPassword, setCheckUnhashedPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !firstName ||
      !lastName ||
      !email ||
      !unhashedPassword ||
      !checkUnhashedPassword
    ) {
      alert("All inputs should be filled!");
      return;
    } else if (unhashedPassword !== checkUnhashedPassword) {
      alert("Entered passwords are different!");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          unhashedPassword,
        }),
      });

      if (res.ok) {
        router.push("/messaging");
      } else {
        throw new Error("Failed to create User");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className={classes.signupMain}>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h1>Sign Up</h1>
          <div>
            <span>
              <input
                type="text"
                name="firstName"
                placeholder="first name"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />
              <input
                type="text"
                name="lastName"
                placeholder="last name"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />
            </span>
            <input
              type="email"
              name="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={(e) => setUnhashedPassword(e.target.value)}
              value={unhashedPassword}
            />
            <input
              type="password"
              name="check-password"
              placeholder="re-enter password"
              onChange={(e) => setCheckUnhashedPassword(e.target.value)}
              value={checkUnhashedPassword}
            />
          </div>
          <button type="submit">submit</button>
        </fieldset>
        <Link href="/login">Log In</Link>
      </form>
    </main>
  );
}

export default SignupPage;
