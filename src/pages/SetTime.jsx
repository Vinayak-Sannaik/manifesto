import React from "react";
import Addmusic from "../component1/Addmusic";
import { Link } from "react-router-dom";

const SetTime = () => {
  return (
    <div className="container">
      <h1>MANIFEST MIRACLES</h1>
      <Addmusic />
      <Link to={'/'}><button className="go-home-button">
        <span>←</span>Home
      </button>
      </Link>
    </div>
  );
};

export default SetTime;
