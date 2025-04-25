import React from "react";

const stacks = ["React", "NodeJS", "MongoDB", "ExpressJS"];

const List = () => {
  return (
    <>
      <div>
        <h1>MERN Stack Development</h1>
      </div>
      <ul
        style={{ listStyle: "none" }}
        className="mt-12 bg-yellow-700 py-5 space-y-4 rounded-lg"
      >
        {stacks.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </>
  );
};

export default List;
