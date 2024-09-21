import Link from "next/link";
import React from "react";

function index() {
  return (
    <div>
      <div className="bg-white dark:bg-gray-900">
        <div className="flex justify-center h-screen">
          <div
            className="hidden bg-cover lg:block lg:w-2/3 h-[70vh]"
            style={{
              background:
                "url(https://i.postimg.cc/Ss4vn0SJ/cosmetologist-cleaning-face-woman-beauty-salon.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <div className="flex items-center h-full px-20 bg-gray-500 dark:bg-gray-900 dark:bg-opacity-65 bg-opacity-40">
              <div>
                <h2 className="text-4xl font-title font-bold text-white dark:text-slate-400">
                  کلینیک سلامت پوست مو اصفهان
                </h2>

                <p className="max-w-xl text-2xl font-regular mt-3 text-gray-900 dark:text-slate-200 bg-slate-400 bg-opacity-40 p-5 rounded-3xl">
                  کلینیک سلامت پوست، مو و زیبایی اصفهان، تحت مدیریت دو دکتر
                  متخصص در زمینه پوست، مو و زیبایی، با بهره‌گیری از به‌روزترین
                  روش‌های درمانی و تجهیزات پیشرفته، فضایی حرفه‌ای و مطمئن برای
                  ارائه خدمات جامع و باکیفیت به شما عزیزان فراهم کرده است.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div className="flex-1">
              <div className="text-center">
                <h2 className="text-4xl font-title font-bold text-center text-gray-700 dark:text-white">
                  کلینیک سلامت پوست مو اصفهان
                </h2>

                <p className="mt-3 font-service text-2xl text-gray-500 dark:text-gray-300">
                  برای دسترسی به اکانت خود وارد شوید!
                </p>
              </div>

              <div className="mt-8">
                <form>
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-button mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                      ایمیل
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="example@example.com"
                      className="font-mono block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="mt-6">
                    <div className="flex justify-between mb-2">
                      <label
                        htmlFor="password"
                        className="text-sm font-button text-gray-600 dark:text-gray-200"
                      >
                        کلمه عبور
                      </label>
                      <a
                        href="#"
                        className="text-sm font-service font-bold text-gray-400 focus:text-blue-500 hover:underline-offset-8 hover:text-blue-500 hover:underline"
                      >
                        رمز عبور را فراموش کرده اید؟
                      </a>
                    </div>

                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="رمزعبور"
                      className="font-regular block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="mt-6">
                    <button className="font-button text-3xl w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                      ورود
                    </button>
                  </div>
                </form>

                <p className="mt-6 text-2xl font-button text-center text-gray-400">
                  هنوز اکانت ندارید؟
                  <Link
                    href="/Signup"
                    className="text-blue-500 mr-3 text-xl font-button focus:outline-none hover:underline-offset-8 focus:underline hover:underline"
                  >
                    ثبت نام
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
