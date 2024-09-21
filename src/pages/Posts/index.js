import React, { useState, useEffect } from "react";

const NormalArticleCard = ({ NormalPosts }) => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto p-16">
        <div className="sm:grid lg:grid-cols-3 sm:grid-cols-2 gap-10">
          {NormalPosts.map((item) => (
            <div className="dark:bg-gray-800 hover:text-white transition duration-300 max-w-sm rounded overflow-hidden shadow-lg">
              <div className="py-4 px-8">
                <a href="#">
                  <h4 className="text-pink-400 dark:text-slate-200 mb-3  text-center font-title text-3xl shadow-sm dark:shadow-slate-300">
                    {item.title}
                  </h4>
                </a>
                <p className="mb-2 dark:text-gray-300 text-right text-gray-600 font-regular text-xl">
                  {item.intro}
                </p>
                <img src={item.thumbnail} className="w-100" />
                <hr className="mt-4" />
                <span className="text-xs text-gray-400 dark:text-slate-500">
                  اضافه شده در
                </span>
                &nbsp;
                <span className="text-xs text-gray-700 dark:text-gray-300">
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const PDFArticlePostCard = ({ PDFPosts }) => {
  return (
    <>
      <div className="relative flex  w-full mb-5 flex-col  overflow-hidden bg-gray-50 dark:bg-slate-700 py-6 sm:py-12">
        <h3 className="font-button text-8xl shadow-md text-center text-slate-300 mb-5">
          منابع پی دی اف
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {PDFPosts.map((item) => (
            <div className="p-4">
              <div className="h-full rounded-xl shadow-cla-violate bg-gradient-to-r from-purple-200 to-pink-200 dark:from-pink-100 dark:to-slate-600 dark:bg-gradient-to-br overflow-hidden">
                <div className="p-6">
                  <h2 className="title-font font-title text-center shadow-sm text-3xl font-medium text-gray-600 mb-3">
                    {item.title}
                  </h2>
                  <h1 className="title-font font-title text-3xl font-medium text-gray-600 mb-3"></h1>
                  <p className="font-regular leading-relaxed mb-3 truncate">
                    {item.intro}
                  </p>
                  <div className="flex items-end justify-between flex-row-reverse flex-wrap mt-5">
                    <span className="font-menu text-sm text-zinc-500 dark:text-zinc-800 opacity-80">
                      اضافه شده در تاریخ {item.date}
                    </span>
                    <button className="text-slate-700 dark:text-blue-800 font-service text-2xl bg-gradient-to-r from-slate-100 to-transparent dark:hover:to-blue-400 hover:to-red-200 dark:bg-gradient-to-tl hover:scale-105 drop-shadow-md shadow-cla-violate px-4 py-1 rounded-lg">
                      بیشتر
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
const ArticlepostCard = ({ ArticlePosts }) => {
  return (
    <div className="relative flex min-h-screen w-full mb-5 flex-col  overflow-hidden bg-gray-50 dark:bg-slate-700 py-6 sm:py-12">
      <h3 className="font-button text-8xl shadow-md text-center text-slate-300 mb-5">
        مقالات
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 relative overflow-hidden bg-white dark:bg-slate-500 px-6 pt-10 pb-8 ring-1 ring-gray-900/5 sm:rounded-lg sm:px-10">
        {ArticlePosts.map((post) => (
          <>
            <div className="group cursor-pointer hover:-translate-y-1 dark:bg-slate-800 shadow-md border-b-4 border-solid rounded-sm hover:rounded-b-3xl border-blue-600 dark:border-blue-300 hover:shadow-2xl p-5 w-full relative z-10 transition-all duration-300 mx-auto max-w-md">
              <span className="absolute top-5 -z-20 h-20 w-20 rounded-full bg-sky-500 dark:bg-slate-700 transition-all duration-300 group-hover:scale-[1.45]"></span>
              <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 dark:bg-slate-600 transition-all duration-300 group-hover:bg-sky-400 dark:group-hover:bg-slate-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-10 w-10 text-white transition-all"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                  />
                </svg>
              </span>
              <div className=" mt-3 space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300">
                <h3 className="text-slate-500 dark:text-slate-100 dark:group-hover:text-pink-400 group-hover:text-pink-500 group-hover:text-3xl transition-all duration-300 font-title text-2xl">
                  {post.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-200 dark:group-hover:text-blue-400 group-hover:text-slate-500 group-hover:text-xl transition-all duration-300 font-regular truncate">
                  {post.intro}
                </p>
              </div>
              <div className="pt-5 text-base  leading-7">
                <p className="flex justify-between max-[380px]:flex-col max-[380px]:gap-10">
                  <span className="text-sky-500 hover:scale-110 font-semibold transition-all duration-300 dark:group-hover:text-sky-300  group-hover:text-sky-700">
                    بیشتر &rarr;
                  </span>
                  <span className="dark:text-amber-400 font-sans text-amber-500">
                    {post.date}
                  </span>
                </p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

function Index({ data }) {
  const [data1, setdata1] = useState([]);
  const [data2, setdata2] = useState([]);
  const [data3, setdata3] = useState([]);
  console.log(data);
  useEffect(() => {
    const NormalPosts = data.filter((item) => item.category === "normalpost");
    const PDFPosts = data.filter((item) => item.category === "pdfpost");
    const ArticlePosts = data.filter((item) => item.category === "articlepost");
    setdata1(NormalPosts);
    setdata2(PDFPosts);
    setdata3(ArticlePosts);
  }, [data]);

  return (
    <section className="bg-slate-100 dark:bg-slate-900 container">
      <div className="grid  md:grid-cols-1">
        <NormalArticleCard NormalPosts={data1} />
        <ArticlepostCard ArticlePosts={data3} />
        <PDFArticlePostCard PDFPosts={data2} />
      </div>
    </section>
  );
}

export default Index;

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3001/posts");
  const data = await response.json();
  return { props: { data } };
}
