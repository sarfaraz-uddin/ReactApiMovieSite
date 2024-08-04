import React from "react";
import "./main.css";
import Schedule from "./Schedule";
import Trend from "./Trend";
import Blogs from "./Blogs";

function Main() {
  return (
    <main>
      <Schedule />
      <Trend />
      <Blogs />
    </main>
  );
}

export default Main;
