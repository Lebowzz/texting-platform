import React from "react";
import classes from "./page.module.css";
import Link from "next/link";

function MessagingPage() {
  // const name = props.user.name;
  // const userName = props.user.userName;
  return (
    <main className={classes.messagingmain}>
      {/* SIDE BAR ------------------------------------------------------------- */}
      <aside className={classes.sidebar}>
        <section className={classes.sidebartop}>
          <h1>Messaging App</h1>
          <div>
            <fieldset>
              <input type="search" placeholder="search..." />
              <button type="submit">
                <img src="icons/search.png" />
              </button>
            </fieldset>
          </div>
        </section>

        <section className={classes.sidebarmid}>
          <div>
            <h2>Rooms</h2>
            <nav>
              <ul>{/*map each room*/}</ul>
            </nav>
          </div>
          {/*rooms navigation | should be changed by a navigation component that takes the chat as props*/}
          <div>
            <h2>Direct Messages</h2>
            <nav>
              <ul>
                <ul></ul> {/*map each dm*/}
              </ul>
            </nav>
          </div>
          {/*DMs navigation | should be changed by a navigation component that takes the chat as props*/}
        </section>

        <section className={classes.sidebarend}>
          {/* user info component that takes in the user info and adds his name pfp and username */}
          <section className={classes.userinfo}>
            <img src="icons/black.png" alt="profile pic" />
            <div>
              {/* <h4>{name}</h4>
              <p>{userName}</p> */}
              <h4>Full Name</h4>
              <p>@username1234</p>
            </div>
            <section className={classes.settings}>
              <Link href="/settings">
                <img src="icons/gear-black.png" alt="settings-icon" />
              </Link>
              <img src="icons/moon-stroke.png" alt="dark-mode-icon" />
            </section>
          </section>
        </section>
      </aside>
      {/* ---------------------------------------------------------------------- */}

      {/* CHAT SPACE ----------------------------------------------------------- */}
      <section className={classes.chat}>
        {/* .map last 2 days of chat || last 50 messages(the one thats smallest) */}
        <section className={classes.messages}></section>
        <section className={classes.send}>
          {/*overflow-x: scroll*/}
          <form>
            <fieldset>
              <input type="text" placeholder="Enter your message here..." />
              <button type="submit">
                <img src="icons/send.png" alt="send-icon" />
              </button>
            </fieldset>
          </form>
        </section>
      </section>
      {/* ---------------------------------------------------------------------- */}

      {/* EXTRA BUTTONS -------------------------------------------------------- */}
      <section className={classes.extra}>
        <Link href="/help">
          <button>?</button>
        </Link>
        <button>
          <img src="icons/double-up.png" alt="go-down-icon" />
        </button>
      </section>
      {/* ---------------------------------------------------------------------- */}
    </main>
  );
}

export default MessagingPage;
