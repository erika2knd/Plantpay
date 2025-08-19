import ContactForm from "../components/ContactForm";

export const metadata = { title: "Contact — Monstera" };

export default function ContactPage() {
  return (
    <main className="min-h-screen text-zinc-200" style={{ backgroundImage: "url('/image/monstera-form.jpg')" }}>
      <div className="mx-auto max-w-2xl px-6 py-32">
        <h1 className="text-3xl font-semibold text-white">Contact</h1>
        <p className="mt-3 text-zinc-400">This form sends a real email via Resend.</p>

        <div className="mt-8">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}

