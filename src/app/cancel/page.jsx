export const metadata = { title: "Payment cancelled — Monstera" };

export default function CancelPage() {
  return (
    <main className="min-h-screen bg-black text-zinc-100">
      <div className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="text-3xl font-semibold">Payment cancelled</h1>
        <p className="mt-3 text-zinc-400">No worries — you can try again anytime.</p>
        <a href="/" className="btn-effect mt-8 px-6 py-2 inline-flex">
          <span className="btn-effect__fill" aria-hidden />
          <span className="btn-effect__label">Return home</span>
        </a>
      </div>
    </main>
  );
}
