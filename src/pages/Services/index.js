import Link from "next/link";
import React from "react";
import { Services } from "../../../Components/data/Services";

const Testimonial = ({ imgSrc, name, title, position, quote, sID }) => {
  return (
    <Link href={`Services/${sID}`}>
      <figure className="flex border-l-2 border-solid flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transition-all hover:bg-slate-200 hover:dark:bg-slate-700 cursor-pointer">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <h3 className=" font-title text-4xl text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="my-4 font-regular text-xl">{quote}</p>
          <hr className="w-1/2 container" />
        </blockquote>
        <figcaption className="flex gap-3  items-center justify-center">
          <span className="font-service text-slate-900 dark:text-pink-400">
            توسط
          </span>
          <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
            <div className="font-title text-slate-600 dark:text-slate-200">
              {name}
            </div>
            <div className="font-regular text-sm text-gray-500 dark:text-gray-400">
              {position}
            </div>
          </div>
          <img className="rounded-full w-9 h-9" src={imgSrc} alt={name} />
        </figcaption>
      </figure>
    </Link>
  );
};
function Index() {
  return (
    <div className="grid border border-gray-200 rounded-lg shadow-sm dark:border-gray-700  md:grid-cols-2 bg-white dark:bg-gray-800">
      {Services.map((testimonial, index) => (
        <Testimonial key={index} {...testimonial} />
      ))}
    </div>
  );
}

export default Index;
