import React from "react";
import { Cards } from "../../data/CardData";
import Link from "next/link";

function ServiceCards() {
  return (
    <div className="container text-center">
      <div className="flex mb-20 mt-20 items-end w-full">
        <hr className="border-pink-700 dark:border-slate-300  h-2 w-full z-30 opacity-65 mt-20" />
        <h3 className="text-violet-600 dark:text-fuchsia-800 align-bottom w-full font-title text-3xl">
          خدمات کلینیک دقیقن تو زیبایی ما چه تاثیری دارن ؟
        </h3>
        <hr className="border-pink-500 dark:border-slate-300  h-2 w-full z-30 opacity-65 mt-20" />
      </div>
      <h3 className="font-regular text-slate-800 dark:text-slate-100 text-xl">
        این کلینیک تحت نظارت دکتر آنیتا پورحسین و دکتر سعید کاویانی ٬ از
        جدیدترین تکنیک و متد ها جهت ارائه خدمات به مشتریان کلینیک بهره می برد:
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 md:gap-y-36  gap-x-5 mt-8">
        {Cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center bg-pink-100 dark:bg-slate-700 hover:shadow-red-500 dark:hover:shadow-pink-600 hover:shadow-md hover:scale-105 dark:hover:shadow-lg transition-all shadow-none"
          >
            <div className="bg-slate-100 rounded-full -mt-5">
              <img
                className="rounded-full object-fill w-8 h-8"
                src={card.icon}
              />
            </div>
            <h2 className="text-gray-800 dark:text-gray-50 h-8 font-title text-3xl mb-2">
              {card.title}
            </h2>
            <hr className="w-16 border-2 border-gray-300" />
            <p className="text-slate-900 dark:text-slate-300 text-2xl w-52 h-40 mt-5 mb-5 overflow-y-auto font-regular">
              {card.description}
            </p>
            <Link
              className="text-slate-800 dark:text-purple-400 text-4xl font-Alertdescription hover:text-fuchsia-900 transition-all dark:hover:text-red-400"
              href={`./Services/${card.id}`}
            >
              اطلاعات بیشتر
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceCards;
