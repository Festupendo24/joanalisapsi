import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function handler(event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Método não permitido" };
  }

  try {
    const { produto } = JSON.parse(event.body);

    const session = await stripe.checkout.sessions.create({
      // 👇 Esta linha traduz o checkout para português
      locale: 'pt',

      payment_method_types: ["card", "mbway"], // Aceita cartão e MB WAY
      mode: "payment",

      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: { name: produto.nome },
            unit_amount: produto.preco, // em cêntimos
          },
          quantity: 1,
        },
      ],

      success_url: "https://joanalisa.netlify.app/sucesso",
      cancel_url: "https://joanalisa.netlify.app/erro",
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ url: session.url }),
    };
  } catch (error) {
    console.error("Stripe error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
