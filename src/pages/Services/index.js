import React from "react";

// Reusable Figure Component
const Testimonial = ({ imgSrc, name, title, position, quote }) => {
  return (
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
  );
};

function Index() {
  const testimonials = [
    {
      imgSrc: "AnitaPourhossein.png",
      name: "آنیتا پورحسین",
      position: "پزشک زیبایی پوست و مو",
      title: "بوتاکس",
      quote:
        "بعد از بوتاکس، چروک‌های پیشانی و دور چشم‌ها صاف شده و ظاهری جوان‌تر و شاداب‌تر به چهره شما بخشیده می‌شود.",
    },
    {
      imgSrc: "AnitaPourhossein.png",
      name: "آنیتا پورحسین",
      position: "پزشک زیبایی پوست و مو",
      title: "هایفوتراپی",
      quote:
        "با هایفوتراپی، پوست ناحیه‌های صورت و گردن شما لیفت شده و چروک‌ها و افتادگی‌های پوست بهبود می‌یابند.",
    },
    {
      imgSrc: "AnitaPourhossein.png",
      name: "آنیتا پورحسین",
      position: "پزشک زیبایی پوست و مو",
      title: "مزوتراپی",
      quote:
        "با مزوتراپی، پوست شما آبرسانی و تغذیه شده، درخشندگی و طراوت دوباره به صورت و بدن شما باز می‌گردد.",
    },
    {
      imgSrc: "AnitaPourhossein.png",
      name: "آنیتا پورحسین",
      position: "پزشک زیبایی پوست و مو",
      title: "تزریق فیلر",
      quote:
        "پس از تزریق فیلر، نواحی از جمله گونه‌ها و لب‌ها پرتر و برجسته‌تر به نظر می‌رسند و حجم طبیعی به صورت شما باز می‌گردد.",
    },
    {
      imgSrc: "AnitaPourhossein.png",
      name: "آنیتا پورحسین",
      position: "پزشک زیبایی پوست و مو",
      title: "مزونیدلینگ",
      quote:
        "بعد از مزونیدلینگ، پوست شما صاف‌تر، روشن‌تر و محکم‌تر شده و جای زخم‌ها و لک‌ها کاهش پیدا می‌کند.",
    },
    {
      imgSrc: "SaeidKaviani.png",
      name: "سعید کاویانی",
      position: "متخصص پوست و مو",
      title: "درمان بیماری های پوستی",
      quote:
        "با درمان بیماری‌های پوستی، التهابات، قرمزی و مشکلاتی مانند آکنه و اگزما به طور چشمگیری کاهش یافته و پوست شما سلامت خود را بازمی‌یابد.",
    },
    {
      imgSrc: "SaeidKaviani.png",
      name: "سعید کاویانی",
      position: "متخصص پوست و مو",
      title: "RF",
      quote:
        "پس از درمان با RF، پوست شما سفت‌تر شده و خطوط و چروک‌های ریز از بین می‌روند و شادابی بیشتری به پوست شما داده می‌شود.",
    },
    {
      imgSrc: "SaeidKaviani.png",
      name: "سعید کاویانی",
      position: "متخصص پوست و مو",
      title: "PRP",
      quote:
        "بعد از PRP، جوانسازی عمیقی در پوست رخ داده، چروک‌ها کاهش یافته و ظاهری جوان‌تر به دست می‌آورید.",
    },
    {
      imgSrc: "AnitaPourhossein.png",
      name: "آنیتا پورحسین",
      position: "پزشک زیبایی پوست و مو",
      title: "خال برداری",
      quote:
        "پس از خال‌برداری، پوست شما صاف‌تر و یکدست‌تر شده و ظاهری تمیزتر و جوان‌تر به ناحیه‌های درمان شده می‌دهد.",
    },
    {
      imgSrc: "SaeidKaviani.png",
      name: "سعید کاویانی",
      position: "متخصص پوست و مو",
      title: "جراحی های پوستی",
      quote:
        "پس از جراحی‌های پوستی، ضایعات و مشکلات پوستی برطرف شده و ناحیه‌های درمان شده ظاهری سالم‌تر و جذاب‌تر خواهند داشت.",
    },
  ];

  return (
    <div className="grid border border-gray-200 rounded-lg shadow-sm dark:border-gray-700  md:grid-cols-2 bg-white dark:bg-gray-800">
      {testimonials.map((testimonial, index) => (
        <Testimonial key={index} {...testimonial} />
      ))}
    </div>
  );
}

export default Index;
