import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="-mt-28 sm:-mt-40">
      <div className="relative w-full h-[640px] sm:h-[960px]">
        <Image
          fill
          src="/Images/hero-banner.png"
          alt="Nujum Cafe Hero Banner"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/15" />
        <div className="absolute inset-0 flex flex-col gap-2 p-4 sm:py-6 sm:px-24 items-start justify-center text-white">
          <h1 className="text-2xl sm:text-4xl">
            Melaka’s Industrial-Style Cafe
          </h1>
          <p className="text-xl sm:text-2xl">
            A modern hideout for comfort food and strong coffee
          </p>
        </div>
      </div>
    </section>
  );
}
