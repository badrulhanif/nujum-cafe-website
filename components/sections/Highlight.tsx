import Image from "next/image";

import { merriweather } from "@/config/font";

export default function HighlightSection() {
  return (
    <section className="flex flex-col mt-8 sm:mt-16 px-4 py-12 sm:px-64 sm:py-24 gap-8 sm:gap-16 bg-gradient-to-b from-[#1D1000] to-[#472701]">
      <h2
        className={`text-2xl sm:text-4xl italic ${merriweather.className} text-white`}
      >
        Tiada Kopi Tanpa Kamu
      </h2>
      <div className="flex flex-col gap-4 text-md sm:text-lg text-white">
        <p>Bukan setakat kopi, stik, pasta pun kami ada.</p>
        <p>Yang penting, kamu pun ada.</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-8 w-full">
        <div className="flex flex-col gap-8 w-full sm:w-1/2">
          <div className="w-full rounded-2xl sm:rounded-4xl overflow-hidden">
            <Image
              src="/Images/overview-banner.png"
              alt="Overview Banner"
              width={1600}
              height={1200}
              className="object-cover w-full h-auto"
            />
          </div>
          <div className="w-full rounded-2xl sm:rounded-4xl overflow-hidden">
            <Image
              src="/Images/overview-banner.png"
              alt="Overview Banner"
              width={1600}
              height={1200}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
        <div className=" w-full sm:w-1/2">
          <div className="w-full h-full rounded-2xl sm:rounded-4xl overflow-hidden">
            <Image
              src="/Images/overview-banner.png"
              alt="Overview Banner"
              width={1600}
              height={1200}
              className="object-cover  w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
