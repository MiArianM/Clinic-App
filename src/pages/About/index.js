import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-slate-100 dark:bg-slate-900 py-24 relative xl:mr-0 lg:mr-5 mr-0">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                <h6 className="text-gray-400 dark:text-gray-100 text-4xl font-title leading-relaxed">
                  ما کی هستیم؟
                </h6>
                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <h2 className="text-indigo-700 dark:text-indigo-400 text-4xl font-bold font-button leading-normal lg:text-start text-center">
                    داستان موفقیت ما
                  </h2>
                  <p className="text-gray-500 dark:text-gray-300 text-2xl font-regular font-normal leading-relaxed lg:text-start text-center">
                    داستان موفقیت ما گواهی بر قدرت تیم‌ ورک و تخصص است. دکتر
                    آنیتا پورحسین و دکتر سعید کاویانی با همکاری یکدیگر کلینیکی
                    را بنا کرده‌اند که ترکیبی از دانش علمی و مراقبت‌های شخصی است
                    و در طول این سال‌ها به تغییر زندگی بیماران و افزایش اعتماد
                    به نفس آن‌ها پرداخته‌اند.
                  </p>
                </div>
              </div>

              <div className="w-full flex-col justify-center items-start gap-6 flex">
                <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                  <Achievement
                    title="بیش از ۴ سال"
                    description="همراه با هم در ارتقای زیبایی و سلامت پوست در اصفهان با بیش
                      از سه دهه تجربه‌ ی مشترک، دکتر پورحسین و دکتر کاویانی در
                      خط مقدم درمان‌های پوست و زیبایی قرار داشته‌اند."
                  />
                  <Achievement
                    title="بیش از ۱۰۰ مشتری در روز"
                    description="موفقیت‌های بزرگ از طریق تخصص و تعهد کلینیک پوست و زیبایی
                      ما با اجرای بیش از ۱۲۵ پروژه درمانی و زیبایی توانسته است
                      به موفقیت‌های چشمگیری دست یابد و اعتماد بیماران را جلب
                      کند."
                  />
                </div>
                <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                  <Achievement
                    title="بیش از ۲۶ جایزه"
                    description="تلاش‌های ما در نوآوری با دریافت جوایز متعدد شناخته شده است.
                      تخصص و نوآوری در درمان‌های پوست و مو، کلینیک ما را به یکی
                      از مراکز پیشرو در زمینه زیبایی تبدیل کرده و جوایز بسیاری
                      را به ارمغان آورده است."
                  />
                  <Achievement
                    title="مشتریان راضی"
                    description="تمرکز ما بر رضایت مشتریان است و بیش از ۹۹٪ مراجعین ما از خدماتی که دریافت
                      کرده‌اند، رضایت کامل داشته‌اند."
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:justify-start justify-center items-start flex">
            <div className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
              <img
                className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                src="https://i.postimg.cc/xdM0gB4y/387739617-346110154605624-2004649977958334990-n.jpg"
                alt="about Us image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Achievement = ({ title, description }) => {
  return (
    <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
      <h4 className="text-gray-900 dark:text-gray-100 text-2xl font-bold font-service leading-9">
        {title}
      </h4>
      <p className="text-gray-500 dark:text-gray-400 text-xl font-normal font-regular leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default AboutSection;
