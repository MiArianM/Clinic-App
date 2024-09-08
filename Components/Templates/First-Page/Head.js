import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneFlip, faStar } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import { context } from "../context";
FontAwesomeIcon;
function Head() {
  const menudata = useContext(context);
  return (
    <div className="relative flex justify-center flex-col items-center">
      <div
        className={`text-center relative top-10 text-gray-100 max-w-md md:max-w-2xl transition-all z-50 ${
          menudata.menuOpen ? "translate-x-80" : "translate-x-0"
        }`}
      >
        <h2 className="brightness-120 text-center font-title text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl">
          کلینیک دکتر آنیتا پورحسین٬قدم در راهی جهت زیبایی مشتریان خود بر می
          دارد
        </h2>
        <div className="flex justify-center gap-10 mt-2">
          <button className=" flex items-center text-2xl px-5 sm:text-3xl sm:px-10 lg:py-1 lg:p-12  xl:text-3xl 2xl:text-5xl font-button gap-1 rounded-3xl transition-all bg-red-200 hover:bg-red-300">
            <FontAwesomeIcon icon={faStar} />
            <span>چرا ما ؟</span>
          </button>
          <button className="flex items-center text-2xl px-5 sm:text-3xl sm:px-10 lg:py-1 lg:p-12  xl:text-3xl 2xl:text-5xl font-button gap-1 rounded-3xl transition-all bg-red-200 hover:bg-red-300">
            <FontAwesomeIcon icon={faPhoneFlip} />
            رزرو نوبت‌ !
          </button>
        </div>
      </div>
      <video
        className="brightness-75 dark:brightness-50 w-full relative -top-56 sm:-top-52 md:-top-64 xl:-top-96 2xl:-top-[25rem] z-30 bg-white"
        src={"clinic.mp4"}
        type="video/mp4"
        muted
        preload="none"
        loop
        autoPlay
      >
        {" "}
        <p className="m-auto font-Alertdescription">
          مرورگر شما از ویدیو مربوط به کلینیک دکتر آنیتا پورحسین ساپورت نمی کند
          !
        </p>
      </video>
    </div>
  );
}

export default Head;
