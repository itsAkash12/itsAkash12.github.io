import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
export default function Header() {
  const name = "<Akash />";
  return (
    <div className="main">
      <div className="container">
        <div className="name">
          <p>{name}</p>
        </div>
        <div className="details">
          <NavLink className="button"><button>HOME</button></NavLink>
          <NavLink className="button"><button>ABOUT ME</button></NavLink>
          <NavLink className="button"><button>SKILLS</button></NavLink>
          <NavLink className="button"><button>PROJECT</button></NavLink>
          <NavLink className="button"><button>CONTACT & RESUME</button></NavLink>
        </div>
      </div>
    </div>
  );
}
