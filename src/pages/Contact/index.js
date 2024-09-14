import React from "react";

function ContactSection() {
  return (
    <section className="bg-slate-100 dark:bg-slate-900" id="contact">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-4">
          <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
            <p className="font-regular text-2xl tracking-wide text-blue-600 dark:text-blue-200">
              ارتباط
            </p>
            <h2 className="font-title mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
              با ما در تماس باشید
            </h2>
            <p className="font-title mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
              کارشناسان ما در اولین فرصت پاسخگوی شما خواهند بود
            </p>
          </div>
        </div>
        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2">
            <div className="h-full pr-6">
              <p className="font-service mt-3 mb-12 text-3xl text-gray-600 dark:text-slate-400">
                کلینیک پوست مو زیبایی با مدیریت دکتر‌آنیتا پورحسین و دکتر سعید
                کاویانی و تیم پشتیبانی مجرب و آموزش دیده ای که در راهنمایی شما
                عزیزان در رزرو وقت کلینیک و مراجعه به آن قصد اقدام دارید شما را
                راهنمایی می کنند.
              </p>
              <ul className="mb-6 md:mb-0">
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-service font-bold mr-2 leading-6 text-gray-900 dark:text-white">
                      آدرس ما
                    </h3>
                    <p className="text-gray-600 font-regular mr-2 dark:text-slate-400">
                      ایران٬اصفهان٬نرسیده به پل میر٬جنب خیابون شیخ مفید
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                      <path d="M15 7a2 2 0 0 1 2 2"></path>
                      <path d="M15 3a6 6 0 0 1 6 6"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 font-service font-bold text-lg mr-2 leading-6 text-gray-900 dark:text-white">
                      شماره تلفن
                    </h3>
                    <p className="text-gray-600 font-regular dark:text-slate-400">
                      موبایل: 09931827935
                    </p>
                    <p className="text-gray-600 font-regular dark:text-slate-400">
                      تلفن کلینیک: 09931827935
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M12 7v5l3 3"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-service mr-2 font-bold leading-6 text-gray-900 dark:text-white">
                      ساعت فعالیت کلینیک
                    </h3>
                    <p className="text-gray-600 font-regular dark:text-slate-400">
                      شنبه - چهارشنبه : 18:00 - 8:00
                    </p>
                    <p className="text-gray-600 font-regular dark:text-slate-400">
                      پنجشنبه & جمعه : 14:00 - 8:00
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
              <h2 className="mb-4 text-2xl font-service text-gray-800 font-bold dark:text-white">
                از طریق تیکت با ما در ارتباط باشید.
              </h2>
              <form id="contactForm">
                <div className="mb-6">
                  <div className="mx-0 mb-1 sm:mb-4">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="name"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <input
                        type="text"
                        id="name"
                        autoComplete="given-name"
                        placeholder="اسم خود را وارد کنید"
                        className="mb-2 w-full font-regular rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                        name="name"
                      />
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="email"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <input
                        type="email"
                        id="email"
                        autoComplete="email"
                        placeholder="ایمیل خود را وارد کنید"
                        className="mb-2 w-full font-regular rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label
                      htmlFor="textarea"
                      className="pb-1 text-xs uppercase tracking-wider"
                    ></label>
                    <textarea
                      id="textarea"
                      name="textarea"
                      cols="30"
                      rows="5"
                      placeholder="پیام خود را بنویسید"
                      className="mb-2 w-full rounded-md font-regular border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                    ></textarea>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full bg-blue-800 font-title text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                  >
                    ارسال پیام
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ContactSection;
