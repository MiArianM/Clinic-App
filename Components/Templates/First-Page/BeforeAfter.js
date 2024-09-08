import Image from "next/image";
import React from "react";
function BeforeAfter() {
  return (
    <section className="w-full relative h-[3000px]">
      <div className="absolute left-0 blur-sm dark:blur-3xl z-10 rounded-3xl w-full h-[224px] opacity-50 -mt-48 bg-gradient-to-r from-slate-200 to-stone-100 dark:opacity-0 dark:from-slate-100 dark:to-stone-400"></div>
      <div className="relative">Hello</div>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-[1500px] mt-64 md:mt-0 sm:h-[2500px] lg:h-[500px] lg:gap-10">
        <div className="flex justify-center h-[200px] md:h-[400px] lg:h-[500px] items-end gap-5">
          <figure slot="first" className="before">
            <figcaption className="font-title text-2xl z-10">بعد</figcaption>
            <Image src={"/After2.png"} width={405} height={380} />
          </figure>
          <figure slot="second" className="after">
            <figcaption className="font-title text-2xl z-10">قبل</figcaption>
            <Image src={"/Before2.png"} width={405} height={380} />
          </figure>
        </div>
        <div className="flex  justify-center h-[200px] md:h-[400px] lg:h-[500px] items-end gap-5">
          <figure slot="first" className="before">
            <figcaption className="font-title text-2xl z-10">بعد</figcaption>
            <Image src={"/After1.png"} width={405} height={380} />
          </figure>
          <figure slot="second" className="after">
            <figcaption className="font-title text-2xl z-10">قبل</figcaption>
            <Image src={"/Before1.png"} width={405} height={380} />
          </figure>
        </div>
        <div className="flex  justify-center h-[200px] md:h-[400px] lg:h-[500px] items-end gap-5">
          <figure slot="first" className="before">
            <figcaption className="font-title text-2xl z-10">بعد</figcaption>
            <Image src={"/After3.png"} width={405} height={380} />
          </figure>
          <figure slot="second" className="after">
            <figcaption className="font-title text-2xl z-10">قبل</figcaption>
            <Image src={"/Before3.png"} width={405} height={380} />
          </figure>
        </div>{" "}
        <div className="flex  justify-center h-[200px] md:h-[400px] lg:h-[500px] items-end gap-5">
          <figure slot="first" className="before">
            <figcaption className="font-title text-2xl z-10">بعد</figcaption>
            <Image src={"/After4.png"} width={405} height={380} />
          </figure>
          <figure slot="second" className="after">
            <figcaption className="font-title text-2xl z-10">قبل</figcaption>
            <Image src={"/Before4.png"} width={405} height={380} />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default BeforeAfter;
