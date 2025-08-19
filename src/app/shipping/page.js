import Link from "next/link";
export const metadata = { title: "Shipping — Monstera" };

export default function ShippingPage() {
  return (
    <main className="min-h-screen bg-text-zinc-200 flex items-center justify-center" style={{ backgroundImage: "url('/image/monstera-hero.jpg')" }}>
      <div className="mx-auto max-w-3xl px-6 py-48">
        <h1 className="text-3xl font-semibold text-white">Shipping</h1>
        <p className="mt-4 font-semibold text-zinc-400">
          This is a training project. The shipping policy page is here to show how a real
          store would present logistics and delivery terms. In production this section would
          include carriers, lead times, pricing and coverage.
        </p>
        <ul className="mt-6 list-disc pl-6 text-zinc-300 space-y-2">
          <li>Demo content only (no real orders are shipped).</li>
          <li>Stripe is connected in test mode for portfolio purposes.</li>
        </ul>

        <a href="/" className="btn-effect mt-8 px-6 py-2 inline-flex">
          <span className="btn-effect__fill" aria-hidden />
          <span className="btn-effect__label">Back to home</span>
        </a>
      </div>
    </main>
  );
}


