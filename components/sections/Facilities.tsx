import Image from "next/image";

import { facilities } from "@/data/facilities";
import { merriweather } from "@/config/font";

export default function FacilitiesSection() {
  return (
    <section className="flex flex-col mt-8 sm:mt-16 p-4 sm:px-64 sm:py-24 gap-8 sm:gap-16 items-center justify-center">
      <h2
        className={`relative z-10 text-4xl sm:text-6xl italic text-center ${merriweather.className} text-brand`}
      >
        Jom Lepak Sini!
      </h2>
      <p className="text-md sm:text-lg text-center text-brand">
        Port Santai + Wifi Free + Instagrammable
      </p>
      <div className="flex flex-col sm:flex-row gap-8">
        {facilities.map((item) => (
          <div key={item.id} className="flex flex-col gap-4">
            <div className="w-full max-h-96 aspect-square rounded-2xl sm:rounded-4xl overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                width={1200}
                height={1200}
                className="object-cover w-full h-full"
              />
            </div>
            <div
              className="flex flex-col gap-4 p-4 rounded-2xl text-brand"
              style={{ backgroundColor: "rgb(253 186 116 / 0.3)" }}
            >
              <h2 className="text-lg sm:text-xl font-semibold">{item.name}</h2>
              <p className="text-md sm:text-lg">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
