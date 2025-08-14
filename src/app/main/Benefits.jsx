import { benefitsData } from "@/app/main/benefitsData";

export default function Benefits() {
  return (
    <section id="benefits" className="bg-black py-10 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-white text-3xl md:text-4xl font-semibold">
            Why Monstera Is the Perfect Plant for Any Home
          </h2>
          <p className="mt-5 text-zinc-400">
           Four easy-to-love reasons that make it ideal, even for first-time plant parents.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefitsData.map((card) => (
            <article
              key={card.title}
              className="relative group overflow-hidden rounded-2xl border border-white/10"
              aria-label={card.title}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${card.img}')` }}
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

              <div className="relative z-10 p-5 md:p-6 flex flex-col justify-end min-h-[300px]">
                <h3 className="text-white text-lg md:text-xl font-semibold">
                  {card.title}
                </h3>
                <p className="mt-2 text-zinc-300 text-sm leading-relaxed">
                  {card.desc}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
  {card.tags.map((t) => (
    <span
      key={t}
      className="inline-flex items-center justify-center border border-white rounded-full 
                 px-3 py-1 text-xs font-medium text-white 
                 shadow-lg transition-transform hover:scale-105"
    >
      {t}
    </span>
  ))}
</div>

              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
