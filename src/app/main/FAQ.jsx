import { faqs } from "./faqs";

export default function FAQ() {
  return (
    <section id="faq" className="bg-black py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-white text-3xl md:text-4xl font-semibold">FAQ</h2>
          <p className="mt-4 text-zinc-400">Frequent questions about monstera and order</p>
        </div>

        <div className="mt-14 flex flex-wrap items-start gap-4 md:gap-6">
  {faqs.map(({ q, a }) => (
    <details
  key={q}
  className="group w-full md:w-[calc(50%-12px)] rounded-[30px] border border-white/10 bg-white/5 px-5 py-4
             open:bg-white/7 open:shadow-lg transition min-h-[80px] flex flex-col justify-between"
>
              <summary
                className="flex items-start justify-between gap-4 cursor-pointer select-none
                           text-white text-base font-medium list-none
                           [&::-webkit-details-marker]:hidden"
              >
                <span>{q}</span>

                <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                  <svg
                    className="h-3.5 w-3.5 text-zinc-200 group-open:hidden"
                    viewBox="0 0 10 10" fill="currentColor"
                  >
                    <path d="M4 0h2v10H4zM0 4h10v2H0z" />
                  </svg>
                  <svg
                    className="hidden h-3.5 w-3.5 text-zinc-200 group-open:block"
                    viewBox="0 0 10 2" fill="currentColor"
                  >
                    <rect width="10" height="2" />
                  </svg>
                </span>
              </summary>

              <p className="mt-3 text-zinc-300 leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
