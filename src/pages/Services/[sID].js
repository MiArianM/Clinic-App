import { useRouter } from "next/router";
import React, { useState } from "react";
import { Services } from "../../../Components/data/Services";
import styles from "../../styles/services.module.css";
import Image from "next/image";
function TabContent({ Tab, Service }) {
  const info = Service.More_Info;
  const Tozihat = (
    <div className="container">
      <div className="mt-14 text-slate-800 dark:text-slate-50 text-right font-regular text-2xl w-full p-10">
        {info.Overview}
      </div>
      <h1
        className={`${styles.title} relative flex text-6xl text-pink-600 dark:text-pink-400 items-center mt-4 font-title`}
      >
        فواید
      </h1>
      <ul
        className={`${styles.tilesWrap} p-0 my-[50px] mx-auto list-none text-center grid md:grid-cols-2 w-full lg:grid-cols-4 transition-all duration-300`}
      >
        <li className="inline-block relative m-[10px] bg-purple-50 dark:bg-slate-800  text-right">
          <h2 className="text-gray-900 dark:text-slate-100 text-8xl m-0 absolute opacity-10 top-[50px] right-[10px] transition-all duration-300 ease-in-out">
            01
          </h2>
          <h3 className="font-title text-slate-900 h-24 dark:text-pink-200 text-center mb-4 text-2xl">
            {info.Pros.sub1.title}
          </h3>
          <p className="text-xl leading-7  font-regular text-slate-600 dark:text-slate-300 text-right ">
            {info.Pros.sub1.desc}
          </p>
          <button className="bg-transparent py-[10px] px-[20px] text-gray-500 dark:text-gray-200 rounded-lg relative transition-all duration-300 ease-in-out opacity-0 cursor-pointer overflow-hidden">
            بیشتر
          </button>
        </li>
        <li className="inline-block relative m-[10px] bg-purple-50 dark:bg-slate-800  text-right">
          <h2 className="text-gray-900 dark:text-slate-100 text-8xl m-0 absolute opacity-10 top-[50px] right-[10px] transition-all duration-300 ease-in-out">
            02
          </h2>
          <h3 className="font-title text-slate-900 h-24 dark:text-pink-200 text-center mb-4 text-2xl">
            {info.Pros.sub2.title}
          </h3>
          <p className="text-xl leading-7  font-regular text-slate-600 dark:text-slate-300 text-right ">
            {info.Pros.sub2.desc}{" "}
          </p>
          <button className="bg-transparent py-[10px] px-[20px] text-gray-500 dark:text-gray-200 rounded-lg relative transition-all duration-300 ease-in-out opacity-0 cursor-pointer overflow-hidden">
            بیشتر
          </button>
        </li>
        <li className="inline-block relative m-[10px] bg-purple-50 dark:bg-slate-800  text-right">
          <h2 className="text-gray-900 dark:text-slate-100 text-8xl m-0 absolute opacity-10 top-[50px] right-[10px] transition-all duration-300 ease-in-out">
            03
          </h2>
          <h3 className="font-title text-slate-900 h-24 dark:text-pink-200 text-center mb-4 text-2xl">
            {info.Pros.sub3.title}
          </h3>
          <p className="text-xl leading-7  font-regular text-slate-600 dark:text-slate-300 text-right ">
            {info.Pros.sub3.desc}{" "}
          </p>
          <button className="bg-transparent py-[10px] px-[20px] text-gray-500 dark:text-gray-200 rounded-lg relative transition-all duration-300 ease-in-out opacity-0 cursor-pointer overflow-hidden">
            بیشتر
          </button>
        </li>
        <li className="inline-block relative m-[10px] bg-purple-50 dark:bg-slate-800  text-right">
          <h2 className="text-gray-900 dark:text-slate-100 text-8xl m-0 absolute opacity-10 top-[50px] right-[10px] transition-all duration-300 ease-in-out">
            04
          </h2>
          <h3 className="font-title text-slate-900 h-24 dark:text-pink-200 text-center mb-4 text-2xl">
            {info.Pros.sub4.title}
          </h3>
          <p className="text-xl leading-7  font-regular text-slate-600 dark:text-slate-300 text-right ">
            {info.Pros.sub4.desc}{" "}
          </p>
          <button className="bg-transparent py-[10px] px-[20px] text-gray-500 dark:text-gray-200 rounded-lg relative transition-all duration-300 ease-in-out opacity-0 cursor-pointer overflow-hidden">
            بیشتر
          </button>
        </li>
      </ul>
      <p
        className={`${styles.listItem} md:w-1/3 text-4xl  px-8 py-7 bg-amber-200 dark:bg-cyan-400 cursor-pointer font-regular transition-all duration-300`}
      >
        {info.tips}
      </p>
    </div>
  );
  const Cares = (
    <div className="container">
      <div className="mt-14 text-right text-2xl w-full p-10">
        <h1
          className={`${styles.title} relative flex text-2xl text-emerald-500 dark:text-emerald-400 items-center mt-4 font-title`}
        >
          قبل از عمل
        </h1>
        <ul>
          {info.Description.Before.map((beforeitem, index) => (
            <li key={index} className="flex items-center gap-3 mt-5">
              <h3 className="text-violet-700 w-1/6 font-title dark:text-violet-400">
                {beforeitem.title}:
              </h3>
              <p className="text-slate-500 w-full font-regular dark:to-blue-300 dark:text-slate-100 shadow-sm dark:shadow-white p-5">
                {beforeitem.Description}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-14 text-right text-2xl w-full p-10">
        <h1
          className={`${styles.title} relative flex text-2xl text-emerald-500 dark:text-emerald-400 items-center mt-4 font-title`}
        >
          بعد از عمل
        </h1>
        <ul>
          {info.Description.After.map((afteritem, index) => (
            <li key={index} className="flex items-center gap-3 mt-5">
              <h3 className="text-violet-700 font-title dark:text-violet-400 w-1/6">
                {afteritem.title}:
              </h3>
              <p className="text-slate-500 font-regular dark:to-blue-300 dark:text-slate-100 w-full text-right shadow-sm dark:shadow-white p-5">
                {afteritem.Description}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <h1
        className={`${styles.title} relative flex text-6xl text-pink-600 dark:text-pink-400 items-center mt-4 font-title`}
      >
        مراحل عمل
      </h1>
      <ul
        className={`${styles.list} relative z-10 grid p-8 pb-16 text-blue-700 list-none text-xl`}
      >
        <li
          className={`${styles.listItem} px-8 py-7 bg-green-200 dark:bg-cyan-500 cursor-pointer transition-all duration-300`}
        >
          <ul className={styles.subList}>
            {info.steps.map((step, index) => (
              <li className="flex items-center gap-3" key={index}>
                <span className="font-title dark:text-blue-100 text-green-800 text-md sm:text-lg md:text-xl xl:text-5xl">
                  {step.title}:
                </span>
                <h4 className="font-regular dark:text-blue-50 text-slate-900 sm:text-md md:text-lg xl:text-2xl">
                  {step.desc}
                </h4>
              </li>
            ))}
          </ul>
        </li>

        <li
          className={`${styles.listItem} px-8 py-7 flex items-center gap-5 cursor-pointer transition-all duration-300 bg-pink-100`}
        >
          <span className="text-xl xl:text-3xl font-title text-red-600 dark:text-red-800">
            محدودیت ها
          </span>
          <ul>
            {info.Complications.map((Complication, index) => (
              <li
                key={index}
                className="font-regular text-xl text-pink-700 dark:text-pink-400"
              >
                {Complication.description}
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
  return Tab === "توضیحات" ? Tozihat : Tab === "مراقبت ها" ? Cares : "";
}
function ServiceContent({ Service }) {
  const [tab, setTab] = useState("توضیحات");
  const TabHandelling = (e) => {
    setTab(e.target.textContent);
  };
  return (
    <>
      {" "}
      <div className="flex flex-col md:flex-row items-center justify-around w-full py-10 px-20">
        <h1 className="text-slate-800 dark:text-slate-50 text-8xl font-service">
          {Service.title}
        </h1>
        <div className="flex flex-col gap-5">
          <div className="flex items-center flex-col sm:flex-row justify-center gap-3">
            <Image src={"/" + Service.imgSrc} width={60} height={60} />
            <span className="text-slate-900 font-button text-xl">توسط</span>
            <span className="text-pink-900 dark:text-slate-400 w-full text-5xl font-regular">
              دکتر {Service.name}
            </span>
            <h5 className="text-amber-600 dark:text-amber-400 sm:mt-28 font-menu w-full md:w-auto text-lg">
              {Service.position}
            </h5>
          </div>
          <button className="dark:bg-rose-400 max-h-20 dark:opacity-90 dark:hover:opacity-100 text-2xl px-5 sm:text-3xl sm:px-10 lg:py-1 lg:p-12  xl:text-3xl 2xl:text-5xl font-button gap-1 rounded-3xl transition-all duration-300 bg-red-200 hover:bg-red-300">
            <span className="text-slate-50 font-button">رزرو نوبت !</span>
          </button>
        </div>
      </div>
      <div className="flex justify-between w-full flex-wrap sm:flex-nowrap mr-5 gap-1">
        <h5
          onClick={TabHandelling}
          className={`bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-50 w-full min-h-24 text-center cursor-pointer hover:shadow-ServiceHover-shadow transition-all duration-500 pt-9 font-menu text-xl
             ${
               tab === "توضیحات"
                 ? "shadow-service-shadow hover:shadow-service-shadow hover:scale-100"
                 : " hover:scale-90 "
             }`}
        >
          توضیحات
        </h5>
        <h5
          onClick={TabHandelling}
          className={`bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-50 w-full min-h-24 text-center cursor-pointer hover:shadow-ServiceHover-shadow transition-all duration-500 pt-9 font-menu text-xl
             ${
               tab === "مراقبت ها"
                 ? "shadow-service-shadow hover:shadow-service-shadow hover:scale-100"
                 : " hover:scale-90 "
             }`}
        >
          مراقبت ها
        </h5>
        <h5
          onClick={TabHandelling}
          className={`bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-50 w-full min-h-24 text-center cursor-pointer hover:shadow-ServiceHover-shadow transition-all duration-500 pt-9 font-menu text-xl ml-5
              ${
                tab === "نمونه کار"
                  ? "shadow-service-shadow hover:shadow-service-shadow hover:scale-100"
                  : " hover:scale-90 "
              }`}
        >
          نمونه کار
        </h5>
      </div>
      <TabContent Tab={tab} Service={Service} />
    </>
  );
}

function serviceID() {
  const squareBaseStyles = {
    background: "#ddd",
    width: "10px",
    height: "10px",
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: "-5px",
    marginLeft: "-5px",
  };

  const squaresStyles = [
    {
      marginTop: "-25px",
      marginLeft: "-25px",
      animation: "loader_5191 675ms ease-in-out 0s infinite alternate",
    },
    {
      marginTop: "-25px",
      animation: "loader_5191 675ms ease-in-out 75ms infinite alternate",
    },
    {
      marginTop: "-25px",
      marginLeft: "15px",
      animation: "loader_5191 675ms ease-in-out 150ms infinite",
    },
    {
      marginLeft: "-25px",
      animation: "loader_5191 675ms ease-in-out 225ms infinite",
    },
    { animation: "loader_5191 675ms ease-in-out 300ms infinite" },
    {
      marginLeft: "15px",
      animation: "loader_5191 675ms ease-in-out 375ms infinite",
    },
    {
      marginTop: "15px",
      marginLeft: "-25px",
      animation: "loader_5191 675ms ease-in-out 450ms infinite",
    },
    {
      marginTop: "15px",
      animation: "loader_5191 675ms ease-in-out 525ms infinite",
    },
    {
      marginTop: "15px",
      marginLeft: "15px",
      animation: "loader_5191 675ms ease-in-out 600ms infinite",
    },
  ];

  const loaderContainerStyles = {
    position: "relative",
    width: "50px",
    height: "50px",
  };
  const { query: sID } = useRouter();
  const Service = Services.find((service) => service.sID === sID.sID);

  return (
    <section className="min-h-screen flex flex-col items-center container">
      {Service ? (
        <ServiceContent Service={Service} />
      ) : (
        <div style={loaderContainerStyles}>
          {squaresStyles.map((squareStyle, index) => (
            <div
              key={index}
              style={{ ...squareBaseStyles, ...squareStyle }}
            ></div>
          ))}
        </div>
      )}
    </section>
  );
}

export default serviceID;
