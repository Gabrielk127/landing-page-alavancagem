"use client";

import TestimonialsYouTubeVideo from "../TestimonialsYoutubeVideo";

const Testimonials = () => {
  return (
    <section className="py-12 px-4">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex items-center justify-center md:justify-start">
          <h2 className="text-xl bg-[rgba(218,165,32,0.2)] text-[#DAA520] max-w-xs text-center py-2 px-2 rounded-lg">
            DEPOIMENTOS
          </h2>
        </div>
        <h3 className="text-xl md:text-4xl font-semibold my-8 text-center md:text-start mb-16">
          Veja o depoimento de quem já faz a diferença!
        </h3>

        <div className="flex flex-col sm:grid sm:grid-cols-3 gap-2 md:gap-8 md:justify-between w-full">
          <TestimonialsYouTubeVideo video="https://youtube.com/shorts/_mCww_E00tg?si=6Imb5zdpbSdBkpfz" />
          <TestimonialsYouTubeVideo video="https://youtube.com/shorts/vpPMIvpwPD8?si=rnYg5_ZgubFcjwIV" />
          <TestimonialsYouTubeVideo video="https://youtube.com/shorts/CsFHYj1NS4U?si=o9bDhq8lJ51elGj-" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
