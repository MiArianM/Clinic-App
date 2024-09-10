import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { comments } from "../../data/WhyUs";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { useTheme } from "next-themes";
export default function App() {
  const { theme } = useTheme();
  return (
    <div className="container mt-28 text-center">
      <h3 className="text-4xl font-title">نظرات مشتریان کلینیک در مورد ما</h3>
      <Swiper
        dir="rtl"
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 6500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        slidesPerView={1}
        modules={[Autoplay, Pagination]}
        className="mySwiper mt-40 h-[30rem] sm:h-[25rem]"
        id={theme === "dark" ? "darkSwiper" : "lightSwiper"}
      >
        {comments.map((comment) => (
          <SwiperSlide>
            <div className="bg-amber-100 dark:bg-teal-700 dark:text-slate-100 text-slate-700 mr-10 p-10 ml-10 rounded-lg flex flex-col justify-center h-96 sm:h-72">
              <h5 className="justify-self-start font-service text-3xl">
                {comment.author}
              </h5>
              <p className="font-regular text-2xl mt-5">
                "{comment.description}"
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
