export default function WhyItHelps() {
  return (
    <section className="relative w-full bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/image/why-it-helps.jpg')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-12 md:py-20">
        <div className="ml-auto md:w-[45%] lg:w-[40%] text-right">
          <h3 className="text-zinc-300 text-xs tracking-[0.2em] uppercase">
            For your wellbeing
          </h3>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-white">
            More Than Just a Plant
          </h2>
          <p className="mt-3 text-zinc-300">
            Monstera doesn’t just decorate your space — it helps purify the air,
            reduce stress, and create a calming tropical atmosphere that boosts
            your mood every day.
          </p>

          <div className="mt-6 flex items-center gap-6 text-sm text-zinc-300 whitespace-nowrap overflow-x-auto no-scrollbar">
  <span className="flex items-center gap-2">
    <img src="/icons/air.png" alt="Air purifier" className="h-6 w-6" />
    Air purifier
  </span>
  <span className="flex items-center gap-2">
    <img src="/icons/no-stress.png" alt="Stress relief" className="h-6 w-6" />
    Stress relief
  </span>
  <span className="flex items-center gap-2">
    <img src="/icons/good-mood.png" alt="Mood booster" className="h-6 w-6" />
    Mood booster
  </span>
  <span className="flex items-center gap-2">
    <img src="/icons/home.png" alt="Home friendly" className="h-6 w-6" />
    Home-friendly
  </span>
</div>

        </div>
      </div>

      <div className="invisible select-none pt-[22%] md:pt-[18%]" aria-hidden="true" />
    </section>
  );
}
