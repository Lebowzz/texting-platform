import React from "react";
import classes from "./page.module.css";
import Link from "next/link";

function LoginPage() {
  return (
    <main className={classes.loginMain}>
      <form>
        <fieldset>
          <h1>Log In</h1>
          <div>
            <input type="text" name="username" placeholder="username" />
            <input type="password" name="password" placeholder="password" />
          </div>
          <button type="submit">submit</button>
        </fieldset>
        <span>
          <Link href="/signup">Sign up</Link>
          <Link href="/signup">forgot password?</Link>
        </span>
      </form>
    </main>
  );
}

export default LoginPage;
