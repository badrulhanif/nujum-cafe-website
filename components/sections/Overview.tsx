import Image from "next/image";

import { merriweather } from "@/config/font";

export default function OverviewSection() {
  return (
    <section className="flex flex-col mt-8 sm:mt-16 p-4 sm:px-64 sm:py-24 gap-8 sm:gap-16 items-center justify-center">
      <div className="relative inline-block">
        <h2
          className={`relative z-10 text-4xl sm:text-6xl italic text-center ${merriweather.className} text-brand`}
        >
          Teeerrrrpaling Legend
        </h2>
        <h2
          className={`absolute left-1/2 -translate-x-1/2 -bottom-2 sm:-left-16 sm:-bottom-4 sm:translate-x-0 z-0 text-4xl sm:text-6xl w-full italic ${merriweather.className} text-secondary opacity-30`}
        >
          Teeerrrrpaling Legend
        </h2>
      </div>
      <div className="flex flex-col gap-4 items-center justify-center text-brand">
        <p className="text-lg sm:text-2xl text-center font-semibold">
          “Nujum Signature Fried Rice”
        </p>
        <p className="text-md sm:text-lg text-center">
          Hidangan istimewa yang buat pelanggan datang lagi dan lagi.
        </p>
      </div>
      <div className="w-full rounded-2xl sm:rounded-4xl overflow-hidden">
        <Image
          src="/Images/overview-banner.png"
          alt="Overview Banner"
          width={1600}
          height={1200}
          className="object-cover"
        />
      </div>
    </section>
  );
}
