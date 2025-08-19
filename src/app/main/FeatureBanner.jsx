export default function FeatureBanner() {
  return (
    <section className="relative w-full bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/image/feature-banner.jpg')" }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-gradient-to-l from-black/50 via-black/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="ml-auto md:w-[45%] lg:w-[40%] text-right">
          <h3 className="text-white text-lg tracking-[0.2em] uppercase">
            Green Living, Naturally
          </h3>
          <p className="mt-3 text-zinc-300">
            Monstera improves air quality, boosts your mood, and <br /> adds 
            a touch of the tropics to your everyday life.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-zinc-400">
  <span className="flex flex-col md:flex-row items-center gap-1">
    <img src="/icons/sun.png" alt="sun" className="h-6 w-6" />
    <span>Medium light</span>
  </span>
  
  <span className="flex flex-col md:flex-row items-center gap-1">
    <img src="/icons/drop.png" alt="water" className="h-6 w-6" />
    <span>7–10 days</span>
  </span>
  
  <span className="flex flex-col md:flex-row items-center gap-1">
    <img src="/icons/plant.png" alt="plant" className="h-6 w-6" />
    <span>Easy care</span>
  </span>
</div>

        </div>
      </div>

      <div className="invisible select-none pt-[22%] md:pt-[18%]" aria-hidden="true" />
    </section>
  );
}
