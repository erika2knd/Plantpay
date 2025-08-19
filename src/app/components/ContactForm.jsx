"use client";
import { useState } from "react";

export default function ContactForm() {
  const [state, setState] = useState({ loading: false, ok: false, error: "" });

  async function onSubmit(e) {
    e.preventDefault();

    const formEl = e.currentTarget;
    const data = Object.fromEntries(new FormData(formEl).entries());

    setState({ loading: true, ok: false, error: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const out = await res.json();
      if (!res.ok) throw new Error(out.message || "Request failed");

      setState({ loading: false, ok: true, error: "" });
      formEl.reset();                
    } catch (err) {
      setState({ loading: false, ok: false, error: err.message || "Something went wrong" });
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

      <div>
        <label className="block text-sm text-zinc-400 mb-1">Your name</label>
        <input
          name="name" required
          className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-white
                     placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white"
          placeholder="Jane Doe"
        />
      </div>

      <div>
        <label className="block text-sm text-zinc-400 mb-1">Email</label>
        <input
          name="email" type="email" required
          className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-white
                     placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white"
          placeholder="jane@example.com"
        />
      </div>

      <div>
        <label className="block text-sm text-zinc-400 mb-1">Message</label>
        <textarea
          name="message" required rows={5}
          className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-white
                     placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white"
          placeholder="Write your message…"
        />
      </div>

      <button
        type="submit"
        disabled={state.loading}
        className="btn-effect px-6 py-2 text-sm font-semibold inline-flex items-center justify-center shadow-lg"
      >
        <span className="btn-effect__fill" aria-hidden />
        <span className="btn-effect__label">{state.loading ? "Sending…" : "Send message"}</span>
      </button>

      {state.ok && <p className="text-emerald-400 text-sm">Message sent. Thanks!</p>}
      {state.error && <p className="text-red-400 text-sm">Error: {state.error}</p>}
    </form>
  );
}
