export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/image/monstera-hero.jpg')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-60 pb-24 text-center">
        <h1 className="text-4xl md:text-8xl font-semibold text-white mb-4 md:mb-8">
          MonsteraMood
        </h1>

        <p className="mt-4  text-base md:text-lg text-zinc-300">
         Living art for your interior. A monstera is more than just a plant — it’s a statement piece that breathes life into any space, bringing freshness and a touch of nature into your home.
        </p>

        <a
          href="#"
          id="buy"
          className="mt-8 inline-flex items-center justify-center border border-white rounded-full
                     px-24 py-3 text-sm md:text-base font-semibold text-white
                     shadow-lg  transition-transform hover:scale-105"
        >
          Buy
        </a>
      </div>
    </section>
  );
}
