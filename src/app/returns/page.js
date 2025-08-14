export const metadata = { title: "Returns — Monstera" };

export default function ReturnsPage() {
  return (
    <>
      <main className="min-h-screen bg-black text-zinc-200" style={{ backgroundImage: "url('/image/monstera-leaf.jpg')" }}>
        <div className="mx-auto max-w-3xl px-6 py-48">
          <h1 className="text-3xl font-semibold text-white">Returns</h1>
          <p className="mt-4 font-semibold text-zinc-400">
            This is a training project. The returns policy page is here to demonstrate
            how a real store would explain its return process.
          </p>
          <ul className="mt-6 list-disc pl-6 text-zinc-300 space-y-2">
            <li>Demo content only (no real returns are processed).</li>
            <li>Stripe is connected in test mode for portfolio purposes.</li>
          </ul>
          <a href="/" className="mt-8 inline-block text-white hover:underline">
            ← Back to home
          </a>
        </div>
      </main>
    </>
  );
}