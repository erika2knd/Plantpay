export const metadata = { title: "Shipping — Monstera" };

export default function ShippingPage() {
  return (
    <main className="min-h-screen bg- text-zinc-200" style={{ backgroundImage: "url('/image/monstera-hero.jpg')" }}>
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

        <a href="/" className="mt-8 inline-block text-white hover:underline">
          ← Back to home
        </a>
      </div>
    </main>
  );
}
