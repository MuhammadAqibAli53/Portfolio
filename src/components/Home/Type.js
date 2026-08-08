import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Senior Full-Stack Developer",
          "AI & Machine Learning Engineer",
          "React.js & Laravel Specialist",
          "MERN Stack Architect",
          "Systems & Automation Engineer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
        delay: 60,
      }}
    />
  );
}

export default Type;
