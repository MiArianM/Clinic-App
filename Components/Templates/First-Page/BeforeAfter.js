import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MainSamples } from "../../data/MainSamples";
function BeforeAfter() {
  return (
    <section className="w-full relative h-[1500px] sm:h-[2400px] lg:h-[1200px] ">
      <div className="absolute left-0 blur-sm dark:blur-3xl z-10 rounded-3xl w-full h-[224px] opacity-50 -mt-48 bg-gradient-to-r from-slate-200 to-stone-100 dark:opacity-0 dark:from-slate-100 dark:to-stone-400"></div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 h-[1500px] mt-64 md:mt-0 sm:h-[2500px] lg:h-[500px] lg:gap-10">
        {MainSamples.map((sample, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="flex justify-center h-[200px] md:h-[400px] lg:h-[500px] items-end gap-5">
              <figure slot="first" className="before">
                <figcaption className="dark:bg-slate-500 dark:text-stone-50 font-title text-2xl z-10">
                  بعد
                </figcaption>
                <Image
                  className="dark:opacity-90"
                  src={"/" + sample.After}
                  width={405}
                  height={380}
                />
              </figure>
              <figure slot="second" className="after">
                <figcaption className="font-title text-2xl z-10 dark:bg-slate-500 dark:text-stone-50">
                  قبل
                </figcaption>
                <Image
                  className="dark:opacity-90"
                  src={"/" + sample.Before}
                  width={405}
                  height={380}
                />
              </figure>
            </div>
            <span className="text-4xl text-neutral-800 dark:text-slate-300 bg-slate-200 dark:bg-slate-600 p-6 -mt-14 w-fit font-regular text-center relative -top-48 rounded-3xl sm:-top-0">
              {sample.title}
            </span>
          </div>
        ))}
        <div className="font-service text-center absolute bottom-0 w-full text-3xl">
          <Link
            href={"./samples"}
            className=" transition-all text-pink-700 hover:text-pink-900 dark:text-purple-50 dark:hover:text-purple-200"
          >
            برای دیدن نمونه کار های بیشتر کلیک کنید!
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BeforeAfter;
