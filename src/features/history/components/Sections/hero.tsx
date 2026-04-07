import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-130 flex items-center ">
      <Image
        src="/assets/conheca-historia.png"
        alt="conheça a historia de mossoró"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-blue-main opacity-60"></div>

      <div className="relative z-10 flex flex-col px-8 text-white">
        <h1 className="text-xl md:text-6xl font-bold">História de Mossoró</h1>
        <p className="text-lg md:text-xl font-semibold">Uma cidade marcada pela resistência e pioneirismo na luta pela liberdade e justiça social</p>
      </div>
    </section>
  )
}