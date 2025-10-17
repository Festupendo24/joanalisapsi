import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function handler(event, context) {
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Método não permitido" };
    }

    try {
        // 🔹 Recebe os dados do produto enviados pelo frontend
        const { produto } = JSON.parse(event.body);

        if (!produto || !produto.nome || !produto.preco) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: "Dados do produto inválidos." }),
            };
        }

        // 🔹 Cria sessão de checkout dinâmica
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            line_items: [
                {
                    price_data: {
                        currency: "eur",
                        product_data: { name: "Sessão de Psicologia Online" },
                        unit_amount: 5000, // 50 €
                        product_data: { name: produto.nome },
                        unit_amount: produto.preco, // 👈 preço dinâmico vindo do frontend (em cêntimos)
                    },
                    quantity: 1,
                },
            ],
            mode: "payment",
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