import React from "react";
import classes from "./page.module.css";
import Link from "next/link";

function SettingsPage() {
  return (
    <main id={classes.settingsmain}>
      <span className={`${classes.settingsspan} ${classes.settingsspan1}`}>
        <span className={classes.settingsspan}>
          <img src="icons/gear.png" alt="gear-icon" />
          <h1>Settings</h1>
        </span>
        <Link href="/messaging" id={classes.closing}>
          <img src="icons/x-black.png" alt="x" />
        </Link>
      </span>
      <div>
        <p>Dark Mode</p>
        <label className={classes.switch}>
          <input type="checkbox" />
          <span className={classes.slider}></span>
        </label>
      </div>
      <span className={classes.settingsspan}>
        <img src="icons/gear.png" alt="gear-icon" />
        <h1>Account Settings</h1>
      </span>
      <div>
        <p>Username: </p>
        <button>change</button>
      </div>
      <div>
        <p>Password </p>
        <button>change</button>
      </div>
      <div>
        <p>Email: </p>
        <button>change</button>
      </div>
      <div>
        <p>Profile Picture</p>
        <button>change</button>
      </div>

      <div id={classes.logOut}>
        <button>Log out</button>
      </div>
    </main>
  );
}

export default SettingsPage;
