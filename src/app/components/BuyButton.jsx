"use client";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);


export default function BuyButton({ label = "Buy now", quantity = 1, className = "" }) {
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    try {
      setLoading(true);

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Checkout failed");

      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({ sessionId: data.id });
      if (error) throw error;
    } catch (e) {
      console.error(e);
      alert(e.message || "Failed to create checkout");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className={`btn-effect inline-flex items-center justify-center shadow-lg disabled:opacity-60 ${className}`}
    >
      <span className="btn-effect__fill" aria-hidden />
      <span className="btn-effect__label">{loading ? "Redirecting…" : label}</span>
    </button>
  );
}

