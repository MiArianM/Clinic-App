import React from "react";

function Services() {
  return (
    <div className="container flex items-center flex-col text-center -mt-40 md:-mt-60">
      <h3 className="text-slate-600 dark:text-slate-300 font-title mb-16 text-6xl ">
        خدمات کلینیک
      </h3>
      <div className="z-20 w-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 ">
        <div className="bg-gray-100 text-slate-600 dark:bg-slate-600 dark:text-slate-300 dark:hover:text-slate-50 text-4xl p-4 shadow-lg font-regular transition-all rounded-md dark:hover:bg-indigo-500 hover:bg-indigo-200 hover:rounded-none hover:scale-110 hover:text-white cursor-pointer">
          مزونیدلینگ
        </div>
        <div className="bg-gray-100 text-slate-600 dark:bg-slate-600 dark:text-slate-300 dark:hover:text-slate-50 text-4xl p-4 shadow-lg font-mono transition-all rounded-md dark:hover:bg-indigo-500 hover:bg-indigo-200 hover:rounded-none hover:scale-110 hover:text-white cursor-pointer">
          RF
        </div>
        <div className="bg-gray-100 text-slate-600 dark:bg-slate-600 dark:text-slate-300 dark:hover:text-slate-50 text-4xl p-4 shadow-lg font-mono transition-all rounded-md dark:hover:bg-indigo-500 hover:bg-indigo-200 hover:rounded-none hover:scale-110 hover:text-white cursor-pointer">
          PRP
        </div>
        <div className="bg-gray-100 text-slate-600 dark:bg-slate-600 dark:text-slate-300 dark:hover:text-slate-50 text-4xl p-4 shadow-lg font-regular transition-all rounded-md dark:hover:bg-indigo-500 hover:bg-indigo-200 hover:rounded-none hover:scale-110 hover:text-white cursor-pointer">
          هایفوتراپی
        </div>
        <div className="bg-gray-100 text-slate-600 dark:bg-slate-600 dark:text-slate-300 dark:hover:text-slate-50 text-4xl p-4 shadow-lg font-regular transition-all rounded-md dark:hover:bg-indigo-500 hover:bg-indigo-200 hover:rounded-none hover:scale-110 hover:text-white cursor-pointer">
          درمان بیماری
        </div>
        <div className="bg-gray-100 text-slate-600 dark:bg-slate-600 dark:text-slate-300 dark:hover:text-slate-50 text-4xl p-4 shadow-lg font-regular transition-all rounded-md dark:hover:bg-indigo-500 hover:bg-indigo-200 hover:rounded-none hover:scale-110 hover:text-white cursor-pointer">
          تزریق فیلر
        </div>
        <div className="bg-gray-100 text-slate-600 dark:bg-slate-600 dark:text-slate-300 dark:hover:text-slate-50 text-4xl p-4 shadow-lg font-regular transition-all rounded-md dark:hover:bg-indigo-500 hover:bg-indigo-200 hover:rounded-none hover:scale-110 hover:text-white cursor-pointer">
          مزوتراپی
        </div>
        <div className="bg-gray-100 text-slate-600 dark:bg-slate-600 dark:text-slate-300 dark:hover:text-slate-50 text-4xl p-4 shadow-lg font-regular transition-all rounded-md dark:hover:bg-indigo-500 hover:bg-indigo-200 hover:rounded-none hover:scale-110 hover:text-white cursor-pointer">
          بوتاکس
        </div>
        <div className="bg-gray-100 col-span-2 text-slate-600 dark:bg-slate-600 dark:text-slate-300 dark:hover:text-slate-50 text-4xl p-4 shadow-lg font-regular transition-all rounded-md dark:hover:bg-indigo-500 hover:bg-indigo-200 hover:rounded-none hover:scale-110 hover:text-white cursor-pointer">
          خال برداری
        </div>
        <div className="bg-gray-100  col-span-2 text-slate-600 dark:bg-slate-600 dark:text-slate-300 dark:hover:text-slate-50 text-4xl p-4 shadow-lg font-regular transition-all rounded-md dark:hover:bg-indigo-500 hover:bg-indigo-200 hover:rounded-none hover:scale-110 hover:text-white cursor-pointer">
          جراحی پوستی
        </div>
      </div>
    </div>
  );
}

export default Services;
