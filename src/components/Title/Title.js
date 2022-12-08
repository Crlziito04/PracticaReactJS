import React from "react";
import "./Title.css";

const Title = ({ greenting }) => {
  console.log({ greenting });
  return (
    <div className="saludo">
      <h1>{greenting}</h1>
    </div>
  );
};

export default Title;
