import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-Stack Web Developer",
          "AI / ML & Deep Learning Engineer",
          "React.js & Laravel PHP Specialist",
          "MERN Stack Developer",
          "Algorithmic & Systems Programmer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;