import Link from "next/link";
export default function ProductHighlight() {
  return (
    <section className="relative w-full bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/image/monstera-leaf.jpg')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:py-24 flex flex-col md:flex-row items-center md:items-center justify-between gap-8">
        
        <div className="text-center md:text-left md:max-w-lg">
          <h3 className="text-sm uppercase tracking-[0.2em] text-zinc-300">Featured product</h3>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-white">Monstera Deliciosa</h2>
          <p className="mt-3 text-zinc-300">
            A tropical beauty that purifies the air and brings a calming vibe to any space.
            Perfect for beginners and plant lovers alike.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
            <span className="text-2xl font-bold text-white">$39.99</span>
            <Link
              href="#buy"
              className="inline-flex w-auto items-center justify-center rounded-full
                         border border-white px-6 py-2 text-sm font-semibold text-white
                         shadow-lg transition-transform hover:scale-105"
            >
              Buy now
            </Link>
          </div>
        </div>

        <div className="hidden md:block md:w-1/2">
          <img
            src="/image/product.jpg"
            alt="Monstera Deliciosa"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
