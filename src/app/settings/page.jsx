import React from "react";
import "./SettingsPage.css";

function SettingsPage() {
  return (
    <main id="settings-main">
      <span className="settings-span settings-span-1">
        <span className="settings-span">
          <img src="icons/gear.png" alt="gear-icon" />
          <h1>Settings</h1>
        </span>
        <button id="closing">
          <img src="icons/x-black.png" alt="x" />
        </button>
      </span>
      <div>
        <p>Dark Mode</p>
        <label class="switch">
          <input type="checkbox" />
          <span class="slider"></span>
        </label>
      </div>
      <span className="settings-span">
        <img src="icons/gear.png" alt="gear-icon" />
        <h1>Account Settings</h1>
      </span>
      <div>
        <p>Username: </p>
        <button>change</button>
      </div>
      <div>
        <p>Profile Picture</p>
        <button>change</button>
      </div>
      <div>
        <p>Email: </p>
        <button>change</button>
      </div>
      <div>
        <p>Password </p>
        <button>change</button>
      </div>

      <div id="logOut">
        <button>Log out</button>
      </div>
    </main>
  );
}

export default SettingsPage;
