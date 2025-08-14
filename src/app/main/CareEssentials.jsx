import Link from "next/link";
export default function CareEssentials() {
  return (
    <section id="care" className="relative w-full bg-black">
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-16 md:py-24 items-start">
  <h4 className="text-sm tracking-[0.2em] uppercase text-zinc-400">
    Care Essentials
  </h4>
  <h2 className="mt-2 text-3xl font-semibold text-white">
    The essentials that help Monstera thrive.
  </h2>
  <p className="mt-4 text-zinc-300">
    To keep your Monstera healthy and beautiful, all you need is the right
    balance of light, occasional watering, and a comfortable pot. No complicated
    tools — just simple care that fits into your daily life.
  </p>

  <Link
  href="#buy"
  className="btn-effect px-6 py-2 text-sm font-semibold mt-6 inline-flex items-center justify-center shadow-lg"
>
  <span className="btn-effect__fill" aria-hidden />
  <span className="btn-effect__label">Add to cart</span>
</Link>
</div>


        <div className="relative h-[300px] md:h-auto">
          <img
            src="/image/care-essentials.jpg" 
            alt="Monstera Care Essentials"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
