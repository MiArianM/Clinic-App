import Image from "next/image";
import React from "react";
function Me() {
  return (
    <div className="container text-center flex flex-col justify-between mt-28">
      <h3 className=" text-3xl font-title mb-10 text-red-500 dark:text-red-400">
        مراقبت٬زیبایی و درمان پوست خود را به دو متخصص کلینیک بسپارید.
      </h3>
      <div className="flex items-center">
        <div className="flex flex-col items-center">
          <Image
            className="dark:opacity-95 "
            src={"/AnitaPourhossein.png"}
            alt="Dr.AnitaPourhossein"
            width={428}
            height={400}
          />
          <h2 className="text-3xl font-menu mt-5 text-pink-800 dark:text-pink-300">
            دکتر آنیتا پورحسین
          </h2>
          <h4 className="font-regular text-2xl text-yellow-600 dark:text-yellow-500">
            پزشک پوست و مو عضو انجمن لیزر ایران
          </h4>
          <p className="block md:hidden leading-10 text-2xl font-regular rounded-lg border-solid border-red-300 text-violet-800 dark:text-violet-300 mr-5 ml-5">
            {" "}
            دکتر آنیتا پورحسین به عنوان یکی از پزشکان برجسته پوست و مو و عضو
            انجمن لیزر ایران، در زمینه ارائه خدمات زیبایی و درمانی پوستی شناخته
            شده است. تخصص و تجربه ایشان در استفاده از لیزر برای درمان‌های پوستی
            و جوان‌سازی به‌ویژه در درمان لکه‌های پوستی، رفع چین و چروک و بهبود
            بافت پوست بسیار مورد توجه است.
          </p>
        </div>
        <p className="hidden md:block leading-10 w-1/2 text-2xl font-regular rounded-lg border-solid border-red-300 text-violet-800 dark:text-violet-300 mr-5 ml-5">
          {" "}
          دکتر آنیتا پورحسین به عنوان یکی از پزشکان برجسته پوست و مو و عضو انجمن
          لیزر ایران، در زمینه ارائه خدمات زیبایی و درمانی پوستی شناخته شده است.
          تخصص و تجربه ایشان در استفاده از لیزر برای درمان‌های پوستی و جوان‌سازی
          به‌ویژه در درمان لکه‌های پوستی، رفع چین و چروک و بهبود بافت پوست بسیار
          مورد توجه است.
        </p>
      </div>
      <div className="flex items-center flex-row-reverse">
        <div className="flex flex-col items-center">
          <Image
            className="dark:opacity-95"
            src={"/SaeidKaviani.png"}
            alt="Dr.SaeidKaviani"
            width={430}
            height={400}
          />
          <h2 className="text-3xl font-menu mt-5 text-blue-800 dark:text-blue-300">
            دکتر سعید کاویانی
          </h2>
          <h4 className="font-regular text-2xl text-yellow-600 dark:text-yellow-500">
            رزیدنت رشته تخصصی پوست و مو،جراحی های پوست و لیزر
          </h4>
          <p className="block md:hidden leading-10 text-2xl font-regular rounded-lg border-solid border-red-300 text-violet-800 dark:text-violet-300 mr-5 ml-5">
            دکتر سعید کاویانی ، به عنوان رزیدنت رشته تخصصی پوست و مو و متخصص در
            جراحی‌های پوست و لیزر، توانسته است با ارائه خدمات پیشرفته و دقیق در
            حوزه زیبایی و درمان‌های پوستی، رضایت بسیاری از مراجعین خود را جلب
            کند. او با تسلط کامل بر روش‌های مختلف جراحی‌های پوستی و استفاده از
            لیزر برای درمان‌های متنوع مانند رفع زائده‌های پوستی، جوان‌سازی و
            بهبود مشکلات پوستی، یکی از بهترین‌ها در این زمینه است.
          </p>
        </div>

        <p className="hidden md:block leading-10 w-1/2 text-2xl font-regular rounded-lg border-solid border-red-300 text-violet-800 dark:text-violet-300 mr-5 ml-5">
          دکتر سعید کاویانی ، به عنوان رزیدنت رشته تخصصی پوست و مو و متخصص در
          جراحی‌های پوست و لیزر، توانسته است با ارائه خدمات پیشرفته و دقیق در
          حوزه زیبایی و درمان‌های پوستی، رضایت بسیاری از مراجعین خود را جلب کند.
          او با تسلط کامل بر روش‌های مختلف جراحی‌های پوستی و استفاده از لیزر
          برای درمان‌های متنوع مانند رفع زائده‌های پوستی، جوان‌سازی و بهبود
          مشکلات پوستی، یکی از بهترین‌ها در این زمینه است.
        </p>
      </div>
    </div>
  );
}

export default Me;
