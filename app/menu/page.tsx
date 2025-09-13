"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

import { merriweather } from "@/config/font";
import { menu } from "@/data/menu";

const categories = [...new Set(menu.map((item) => item.category))];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);
  const categoryRef = useRef<Record<string, HTMLElement | null>>({});

  const handleScrollToCategory = (category: string) => {
    categoryRef.current[category]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setActiveCategory(category);
  };

  return (
    <section className="flex flex-col p-4 sm:px-64 sm:py-24 gap-8 sm:gap-16">
      <h2
        className={`text-4xl sm:text-6xl ${merriweather.className} text-brand`}
      >
        Menu
      </h2>
      <div className="flex gap-4 -mx-4 sm:mx-0 sticky top-18 sm:top-30 z-50 overflow-x-auto overflow-y-hidden whitespace-nowrap scrollbar-none scrollbar-thumb-transparent scrollbar-track-transparent bg-custom">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleScrollToCategory(category)}
            className={`p-4 text-left flex-shrink-0 ${
              activeCategory === category
                ? "text-white bg-footer"
                : "text-brand"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {categories.map((category) => (
        <section
          key={category}
          data-category={category}
          ref={(el) => {
            categoryRef.current[category] = el;
          }}
          className="flex flex-col gap-8 scroll-mt-[140px] sm:scroll-mt-[240px]"
        >
          <h2
            className={`text-2xl sm:text-4xl w-fit font-semibold ${merriweather.className} text-brand`}
          >
            {category}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {menu
              .filter((item) => item.category === category)
              .map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: index * 0.2,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="flex flex-col gap-4 p-4 h-full rounded-4xl overflow-hidden bg-footer-30"
                >
                  <div className="flex w-full max-h-72 aspect-square rounded-2xl overflow-hidden items-center justify-center">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={1200}
                      height={1200}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col flex-1 gap-4 p-2 text-brand">
                    <h2 className="text-xl font-semibold">
                      {item.name}
                      {item.isBestSeller && (
                        <p className="px-1 py-0.5 w-fit text-base font-normal text-white bg-red-500">
                          Best Seller
                        </p>
                      )}
                    </h2>
                    <p className="flex-1 text-md sm:text-lg">
                      {item.description}
                    </p>
                    <div className="flex flex-col gap-2">
                      {item.price.options.map((option, index) => (
                        <p
                          key={index}
                          className="flex justify-between text-lg font-semibold text-amber-900"
                        >
                          {option.label && <span>{option.label}</span>}
                          {item.price.currency}
                          {option.current}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </section>
      ))}
    </section>
  );
}
