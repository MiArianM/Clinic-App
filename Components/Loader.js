import React, { useEffect, useState } from "react";
function Loader() {
  const [smoothcomes, setSmoothComes] = useState(false);
  const [smoothout, setSmoothOut] = useState(false);

  useEffect(() => {
    const TimerComes = setTimeout(() => {
      setSmoothComes(true);
      return () => {
        clearTimeout(TimerComes);
      };
    }, 200);
    const TimerEnds = setTimeout(() => {
      setSmoothOut(true);
      return () => {
        clearTimeout(TimerEnds);
      };
    }, 4000);
  }, []);
  return (
    <div
      className={`flex justify-center items-center h-[100vh] transition-opacity animate__animated ${
        smoothcomes && !smoothout
          ? "animate__rotateIn opacity-100"
          : !smoothcomes && !smoothout
          ? "opacity-0"
          : smoothcomes && smoothout
          ? "animate__rotateOut opacity-0"
          : "opacity-0"
      }`}
    >
      <div className="loader">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
}

export default Loader;
