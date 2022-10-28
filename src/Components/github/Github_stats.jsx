import React from "react";
import "./Github_stats.css"
import GitHubCalendar from "react-github-calendar";

export default function Github_stats() {
  return (
    <div>
      <p id="github" className="head">Github</p>
      <div>
        <p className="title">My GitHub stats</p>
        <div className="stats">
          <img
            src="https://github-readme-stats.vercel.app/api?username=itsAkash12&show_icons=true&locale=en"
            alt="akashSingh"
          />
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=itsAkash12&"
            alt="akashSingh"
          />
        </div>
      </div>
      <div>
        <p className="title">My Github Calender</p>
        <div className="calender">
          <GitHubCalendar
            username="itsAkash12"
            year="last"
            blockMargin={4}
            blockRadius={20}
            blockSize={20}
          />
        </div>
      </div>
    </div>
  );
}
