import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-06-20",
});

export async function POST(req) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      console.error("[CHECKOUT] Missing STRIPE_SECRET_KEY");
      return NextResponse.json({ message: "Missing STRIPE_SECRET_KEY" }, { status: 500 });
    }

    const { quantity = 1 } = await req.json().catch(() => ({ quantity: 1 }));

    const origin =
      req.headers.get("origin") ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",        
            unit_amount: 3999,      
            product_data: {
              name: "Monstera Deliciosa",
              description: "Healthy cutting in 11cm pot.",
            },
          },
          quantity,
        },
      ],
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cancel`,
      billing_address_collection: "auto",
      phone_number_collection: { enabled: true },
    });

    return NextResponse.json({ id: session.id }, { status: 200 });
  } catch (e) {
    console.error("[CHECKOUT] error:", e);
    const message =
      e?.raw?.message || e?.message || "Failed to create checkout session";
    return NextResponse.json({ message }, { status: 500 });
  }
}

export function GET() {
  return NextResponse.json({ message: "Use POST" }, { status: 405 });
}
