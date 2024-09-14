import React, { useState, useEffect } from "react";

const NormalArticleCard = ({ NormalPosts }) => {
  return (
    <>
      {NormalPosts.map((item) => (
        <div class="p-4 ">
          <div class="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-100 to-blue-100 overflow-hidden">
            <img
              class=" md:h-36 w-full lg:h-72 object-contain object-center scale-110 transition-all duration-400 hover:scale-100"
              src={item.imageUrl}
              alt={item.title}
            />
            <div class="p-6">
              <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                {item.category}
              </h2>
              <h1 class="title-font text-lg font-medium text-gray-600 mb-3">
                {item.title}
              </h1>
              <p class="leading-relaxed mb-3 truncate">{item.description}</p>
              <div class="flex items-center justify-between flex-row-reverse flex-wrap ">
                <span>{item.date}</span>
                <button class="bg-gradient-to-r font-button text-2xl from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">
                  بیشتر
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

const PDFArticlePost = ({ PDFPosts }) => {
  return (
    <>
      {PDFPosts.map((item) => (
        <div class="p-4 ">
          <div class="h-full rounded-xl shadow-cla-violate bg-gradient-to-r from-pink-50 to-red-50 overflow-hidden">
            <img
              class=" md:h-36 w-full lg:h-72 object-contain object-center scale-110 transition-all duration-400 hover:scale-100"
              src={item.imageUrl}
              alt={item.title}
            />
            <div class="p-6">
              <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                {item.category}
              </h2>
              <h1 class="title-font text-lg font-medium text-gray-600 mb-3">
                {item.title}
              </h1>
              <p class="leading-relaxed mb-3 truncate">{item.description}</p>
              <div class="flex items-center justify-between flex-row-reverse flex-wrap ">
                <span>{item.date}</span>
                <button class="bg-gradient-to-r from-orange-300 to-amber-400 hover:scale-105 drop-shadow-md shadow-cla-violate px-4 py-1 rounded-lg">
                  بیشتر
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

function Index({ data }) {
  const [data1, setdata1] = useState([]);
  const [data2, setdata2] = useState([]);
  console.log(data);
  useEffect(() => {
    const NormalPosts = data.filter((item) => item.category === "normalpost");
    const PDFPosts = data.filter((item) => item.category === "pdfpost");

    setdata1(NormalPosts);
    setdata2(PDFPosts);
  }, [data]);

  return (
    <section className="bg-slate-100 dark:bg-slate-900 container">
      <div className="grid  md:grid-cols-1">
        {/* News Section */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          <NormalArticleCard NormalPosts={data1} />
        </div>
        {/* Articles Section */}
        <h1 className="text-black">hello</h1>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <PDFArticlePost PDFPosts={data2} />
        </div>
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
