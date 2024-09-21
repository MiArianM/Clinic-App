import React, { useEffect, useState } from "react";

function Loader() {
  const [smoothcomes, setSmoothComes] = useState(false);
  const [smoothout, setSmoothOut] = useState(false);

  useEffect(() => {
    const TimerComes = setTimeout(() => {
      setSmoothComes(true);
    }, 200);

    const TimerEnds = setTimeout(() => {
      setSmoothOut(true);
    }, 4000);

    return () => {
      clearTimeout(TimerComes);
      clearTimeout(TimerEnds);
    };
  }, []);

  return (
    <div
      className={`flex justify-center items-center h-[100vh] transition-opacity animate__animated ${
        smoothcomes && !smoothout
          ? "animate__rotateIn opacity-100"
          : smoothcomes && smoothout
          ? "animate__bounceOut opacity-0"
          : "opacity-0"
      }`}
    >
      <div className="loader">
        {Array(26)
          .fill("")
          .map((_, index) => (
            <div key={index} className="dot"></div>
          ))}
      </div>
    </div>
  );
}

export default Loader;
