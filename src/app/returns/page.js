import Link from "next/link";
export const metadata = { title: "Returns — Monstera" };


export default function ReturnsPage() {
  return (
    <>
      <main className="min-h-screen bg-black text-zinc-200 flex items-center justify-center" style={{ backgroundImage: "url('/image/monstera-form.jpg')" }}>
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
           <a href="/" className="btn-effect mt-8 px-6 py-2 inline-flex">
          <span className="btn-effect__fill" aria-hidden />
          <span className="btn-effect__label">Back to home</span>
        </a>
        </div>
      </main>
    </>
  );
}
