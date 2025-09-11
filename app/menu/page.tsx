import Image from "next/image";

import { merriweather } from "@/config/font";
import { menus } from "@/data/menu";

export default function MenuPage() {
  return (
    <section className="flex flex-col p-4 sm:px-64 sm:py-24 gap-8 sm:gap-16">
      <h2
        className={`text-4xl sm:text-6xl ${merriweather.className} text-brand`}
      >
        Menu
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {menus.map((item) => (
          <div key={item.id} className="flex flex-col">
            <div className="w-full max-h-72 aspect-square rounded-2xl sm:rounded-4xl overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                width={1200}
                height={1200}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col gap-4 p-4 rounded-2xl text-brand">
              <h2 className="text-lg sm:text-xl font-semibold">{item.name}</h2>
              <p className="text-md sm:text-lg">{item.description}</p>
              <p className="text-md sm:text-lg font-semibold">
                {item.price.currency}
                {item.price.current}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
