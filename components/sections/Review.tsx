import { StarSolid } from "iconoir-react";

import { merriweather } from "@/config/font";

export default function ReviewSection() {
  return (
    <section className="flex flex-col mt-8 sm:mt-16 px-4 py-12 sm:px-64 sm:py-24 items-center justify-center">
      <div className="flex flex-col w-full p-16 gap-8 sm:gap-16 items-center justify-center rounded-2xl sm:rounded-4xl text-white bg-gradient-to-r from-[#1D1000] to-[#472701]">
        <h2
          className={`text-center ${merriweather.className} text-2xl sm:text-4xl`}
        >
          Bukan kami yang cakap
        </h2>
        <div className="flex flex-row w-full items-center justify-center gap-4 sm:gap-8">
          <StarSolid className="w-10 sm:w-12 h-10 sm:h-12 text-amber-500" />
          <StarSolid className="w-10 sm:w-12 h-10 sm:h-12 text-amber-500" />
          <StarSolid className="w-10 sm:w-12 h-10 sm:h-12 text-amber-500" />
          <StarSolid className="w-10 sm:w-12 h-10 sm:h-12 text-amber-500" />
        </div>
        <p className="text-md sm:text-lg text-center text-[#FFF5E8]">
          4 bintang di Google. Terbukti kami memang legend.
        </p>
      </div>
    </section>
  );
}
