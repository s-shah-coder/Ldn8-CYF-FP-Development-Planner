import React from "react";
import { Link } from "react-router-dom";

function MentorDashboard() {
  return (
    <>
      <h1>Dashboard Mentor</h1>
      <section>
        <h2>Inbox</h2>
        {/* hardcoded for now */}
        <ul>
          <li>
            <Link>Plan_1</Link>
          </li>
          <Link>
            <li>Plan_2</li>
          </Link>
          <Link>
            <li>Plan_3</li>
          </Link>
        </ul>
      </section>
    </>
  );
}

export default MentorDashboard;
