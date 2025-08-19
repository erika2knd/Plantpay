export const metadata = { title: "Thank you — Monstera" };

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-black text-zinc-100 flex items-center justify-center" style={{ backgroundImage: "url('/image/monstera-success.jpg')" }}>
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h1 className="text-3xl font-semibold">Thank you!</h1>
        <p className="mt-3 text-zinc-400">
          Your order is confirmed. A receipt was sent to your email.
        </p>
        <a href="/" className="btn-effect mt-8 px-6 py-2 inline-flex">
          <span className="btn-effect__fill" aria-hidden />
          <span className="btn-effect__label">Back to home</span>
        </a>
      </div>
    </main>
  );
}

