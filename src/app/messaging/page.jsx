import React from "react";
import "./MessagingPage.css";

function MessagingPage() {
  return (
    <main id="messaging-main">
      <aside>
        <section className="side-bar-top">
          <h1>Messaging App</h1>
          <input type="search" />
        </section>

        <section className="side-bar-mid">
          <h2>Rooms</h2>
          <nav></nav>
          {/*rooms navigation | should be changed by a navigation component that takes the chat as props*/}
          <h2>Direct Messages</h2>
          <nav></nav>
          {/*DMs navigation | should be changed by a navigation component that takes the chat as props*/}
        </section>

        <section className="side-bar-end">
          {/* user info component that takes in the user info and adds his name pfp and username */}
          <section className="user-info">
            <img src="" alt="profile pic" />
            <div>
              <h4>Full name</h4>
              <p>Username</p>
            </div>
          </section>
          <section className="settings">
            {/* settings icon */}
            {/* dark mode icon */}
          </section>
        </section>
      </aside>
    </main>
  );
}

export default MessagingPage;
