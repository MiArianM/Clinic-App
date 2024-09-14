import React, { useContext } from "react";
import { FootList } from "../../data/FooterList.js";
import Image from "next/image";
import Posts from "../First-Page/Posts.js";
import Link from "next/link.js";
import { context } from "../context.js";
import { useRouter } from "next/router.js";
function Footer() {
  const { country } = useContext(context);
  const router = useRouter();
  console.log(router.asPath);

  return (
    <footer className="bg-slate-50 dark:bg-gray-900 pt-10">
      {country !== "Unknown" && country !== "IR" && <Posts />}
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div
          className={`font-menu lg:flex ${
            router.asPath !== "/Contact"
              ? "lg:justify-between "
              : "lg:justify-center"
          } items-center`}
        >
          {router.asPath !== "/Contact" && (
            <div className="mb-6 md:mb-0 flex items-center lg:items-start">
              <Link className="text-3xl font-bold leading-none" href={"/"}>
                <Image
                  className="hover:border-l-4 hover:shadow-xl ml-7 mb-10 lg:mb-0 transition-all shadow-lg dark:shadow-slate-800 border-opacity-25 border-gray-500 border-l-2 border-solid"
                  width={300}
                  height={300}
                  alt="Logo"
                  src={"/logo.png"}
                />
              </Link>
              <div className="flex flex-col text-center md:text-right items-center md:items-start font-service text-2xl gap-10">
                <div>
                  <Link href="tel:09931827935">
                    <h6 className="text-pink-600">
                      مشاوره رایگان و واتساپ:
                      <span className="text-fuchsia-600 dark:text-fuchsia-50 m-1 underline-offset-4 underline">
                        09931827935
                      </span>
                    </h6>
                  </Link>
                </div>
                <div>
                  <Link href="https://maps.app.goo.gl/NFMadoCqA62vP1Rr9">
                    <h6 className="text-pink-600">
                      آدرس:
                      <span className="text-fuchsia-600 dark:text-fuchsia-50 m-1 underline-offset-8 underline">
                        کلینیک اصفهان٬شیخ صدوق شمالی٬نرسیده به پل میر
                      </span>
                    </h6>
                  </Link>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {FootList.map((item, index) => (
              <div key={index}>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  {item.title}
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link
                      href={item.route1}
                      className="hover:underline underline-offset-4"
                    >
                      {item.sub1}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={item.route2}
                      className="hover:underline underline-offset-4"
                    >
                      {item.sub2}
                    </Link>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
        {country !== "Unknown" && (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d340.0203784810653!2d51.67193197530492!3d32.630869555153254!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1726045775763!5m2!1sen!2suk"
            width="100%"
            height="550"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="mt-10 border-0 rounded-xl dark:invert"
          ></iframe>
        )}

        <div className="w-full flex flex-col items-center">
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8 w-1/2" />
          <div className="font-title sm:flex sm:justify-center">
            <span className=" font-bold text-sm text-gray-500 sm:text-center dark:text-gray-400">
              <Link
                href="#"
                className="font-mono hidden lg:block font-bold hover:underline ml-2"
              >
                © 2024 - Clinic™
              </Link>
              <p className="text-center">
                تمام حقوق این صفحه به کلینیک و اشخاص آن دکتر آنیتا پورحسین و
                دکتر سعید کاویانی تعلق دارد٬هر گونه کپی برداری از آن پیگرد
                قانونی خواهد داشت.
              </p>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
