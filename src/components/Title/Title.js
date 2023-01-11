import React from "react";
import "./Title.css";

const Title = ({ greeting }) => {
  console.log({ greeting });
  return (
    <div className="saludo">
      <h1>{greeting}</h1>
    </div>
  );
};

export default Title;
