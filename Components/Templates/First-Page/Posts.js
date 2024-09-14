function Posts() {
  return (
    <>
      <div className="mb-10 text-center pt-10 flex flex-col xl:flex-row gap-8 xl:gap-0 items-center xl:justify-evenly">
        <iframe
          className="w-[300px] h-[169px] sm:w-full sm:h-96 md:w-[560px] md:h-[315px]"
          src="https://www.youtube.com/embed/KssczjpKr0s?si=Q0Wd8rIMJa8Cd2LO"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <iframe
          className="w-[300px] h-[169px] sm:w-full sm:h-96 md:w-[560px] md:h-[315px]"
          src="https://www.youtube.com/embed/yPm13fGyaqY?si=pgAfdSVu90Od7cXH"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}

export default Posts;
