import React from "react";
import classes from "./page.module.css";
import Link from "next/link";

function SignupPage() {
  return (
    <main className={classes.signupMain}>
      <form>
        <fieldset>
          <h1>Sign Up</h1>
          <div>
            <span>
              <input type="text" name="first-name" placeholder="first name" />
              <input type="text" name="last-name" placeholder="last name" />
            </span>
            <input type="email" name="email" placeholder="email" />
            <input type="password" name="password" placeholder="password" />
            <input
              type="password"
              name="check-password"
              placeholder="re-enter password"
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
