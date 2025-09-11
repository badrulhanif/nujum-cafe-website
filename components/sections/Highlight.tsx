"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { merriweather } from "@/config/font";

export default function HighlightSection() {
  const images = [
    { src: "/Images/highlight-banner-1.png", alt: "Highlight Banner 1" },
    { src: "/Images/highlight-banner-2.png", alt: "Highlight Banner 2" },
    { src: "/Images/highlight-banner-3.png", alt: "Highlight Banner 3" },
  ];
  return (
    <section className="flex flex-col mt-8 sm:mt-16 px-4 py-12 sm:px-64 sm:py-24 gap-8 sm:gap-16 bg-gradient-to-b from-[#1D1000] to-[#472701]">
      <h2
        className={`text-4xl sm:text-6xl italic ${merriweather.className} text-white`}
      >
        Tiada Kopi Tanpa Kamu
      </h2>
      <div className="flex flex-col gap-4 text-md sm:text-lg text-white">
        <p>Bukan setakat kopi, stik, pasta pun kami ada.</p>
        <p>Yang penting, kamu pun ada.</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-8 w-full">
        <div className="flex flex-col gap-8 w-full sm:w-1/2">
          {images.slice(0, 2).map((item, index) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.5,
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="w-full rounded-2xl sm:rounded-4xl overflow-hidden"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={1600}
                height={1200}
                className="object-cover w-full h-auto"
              />
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 1,
          }}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full sm:w-1/2"
        >
          <div className="w-full h-full rounded-2xl sm:rounded-4xl overflow-hidden">
            <Image
              src={images[2].src}
              alt={images[2].alt}
              width={1600}
              height={1200}
              className="object-cover  w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
