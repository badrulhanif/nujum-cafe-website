"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Shop, Phone, Instagram, Tiktok } from "iconoir-react";

import { merriweather } from "@/config/font";

export default function CeritaKamiPage() {
  return (
    <section className="flex flex-col p-4 sm:px-64 sm:py-24 gap-8 sm:gap-16">
      <h2
        className={`text-4xl sm:text-6xl ${merriweather.className} text-brand`}
      >
        Cerita Kami
      </h2>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full overflow-hidden"
      >
        <Image
          src="/Images/cerita-kami-hero-banner.png"
          alt="Overview Banner"
          width={1600}
          height={1600}
          className="object-cover"
        />
      </motion.div>
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 sm:py-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-8 sm:gap-16 w-full sm:w-1/2 text-md sm:text-lg"
        >
          <p>
            Bermula dari sebuah impian sederhana, saya, Pak Nujum memulakan
            perjalanan ini dengan satu tujuan iaitu mencipta ruang di Melaka di
            mana kopi yang enak, hidangan yang memuaskan, dan suasana yang
            menyenangkan dapat dinikmati bersama orang tersayang.
          </p>
          <p>
            Sejak kecil, saya sering membantu ibu di dapur, belajar resepi
            tradisional keluarga yang telah diwarisi turun-temurun. Minat saya
            terhadap dunia masakan semakin mendalam, dan akhirnya, saya
            memutuskan untuk membuka sebuah kafe yang bukan hanya menyajikan
            makanan, tetapi juga pengalaman yang menyentuh hati.
          </p>
          <p>
            Kami percaya bahawa makanan bukan sekadar untuk mengisi perut,
            tetapi juga untuk menyatukan hati. Setiap suapan di Nujum Cafe
            adalah cerminan dari dedikasi kami untuk memberikan yang terbaik
            kepada anda.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full sm:w-1/2 max-h-128 aspect-square overflow-hidden"
        >
          <Image
            src="/Images/cerita-kami-banner-1.png"
            alt="Overview Banner"
            width={1600}
            height={1600}
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col gap-8 sm:gap-16 py-8"
      >
        <h2
          className={`relative text-4xl sm:text-6xl text-center ${merriweather.className} text-brand`}
        >
          Nilai Teras Nujum
        </h2>
        <div className="flex flex-col w-full p-16 gap-8 sm:gap-16 items-center justify-center rounded-2xl sm:rounded-4xl text-white bg-gradient-to-r from-[#1D1000] to-[#472701]">
          <h2
            className={`text-center ${merriweather.className} text-2xl sm:text-4xl`}
          >
            “Kualiti Dalam Setiap Hidangan”
          </h2>
          <p className="text-md sm:text-lg text-center text-[#FFF5E8]">
            Setiap hidangan dibuat dengan kasih sayang, dan setiap servis
            disediakan dengan penuh perhatian dan rasa. Kami sentiasa memberikan
            pengalaman unik bagi pelanggan kami dengan inovasi yang dibawa ke
            dalam setiap menu.
          </p>
        </div>
      </motion.div>
      <div className="flex flex-col gap-8 sm:gap-16 py-8">
        <div className="flex gap-8 items-center">
          <h2
            className={`relative w-fit whitespace-nowrap text-4xl sm:text-6xl text-center ${merriweather.className} text-brand`}
          >
            Lokasi Kami
          </h2>
          <div className="w-full border-t border-brand opacity-30" />
        </div>

        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 sm:py-8">
          <div className="w-full sm:w-1/2 max-h-128 aspect-square overflow-hidden">
            <Image
              src="/Images/cerita-kami-banner-2.png"
              alt="Overview Banner"
              width={1600}
              height={1600}
              className="object-cover w-full h-full"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, rotateY: 90 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-8 p-8 sm:p-12 w-full sm:w-1/2 text-md sm:text-lg rounded-2xl sm:rounded-4xl text-brand"
            style={{ backgroundColor: "rgb(253 186 116 / 0.3)" }}
          >
            <div className="flex flex-col gap-4">
              <h2 className="text-lg sm:text-xl font-semibold">Alamat</h2>
              <div className="flex gap-4 items-start">
                <Shop className="w-6 h-6" />
                <p className="text-md sm:text-lg">
                  Lot 450/451 <br /> Bandar Bukit Baru Seksyen 5 <br />
                  75460 Melaka
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-lg sm:text-xl font-semibold">Telefon</h2>
              <div className="flex gap-4 items-center">
                <Phone className="w-6 h-6" />
                <Link href="tel:+601116174226">
                  <span className="hover:underline">+60 11-16174226</span>
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-lg sm:text-xl font-semibold">Media Sosial</h2>
              <div className="flex gap-4 items-center">
                <Instagram className="w-6 h-6" />
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/nujum.cafe/"
                >
                  <span className="hover:underline">@nujum.cafe</span>
                </Link>
              </div>
              <div className="flex gap-4 items-center">
                <Tiktok className="w-6 h-6" />
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.tiktok.com/@nujum.cafe"
                >
                  <span className="hover:underline">@nujum.cafe</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
