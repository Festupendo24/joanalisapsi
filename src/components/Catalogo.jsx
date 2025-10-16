import React from "react";

const produtos = [
  {
    id: 1,
    nome: "Terapia Individual",
    descricao: "Sessão personalizada e confidencial.",
    preco: 5000, // em cêntimos (€50)
    emoji: "🧠",
  },
  {
    id: 2,
    nome: "Sessão Online",
    descricao: "Via Teams ou Zoom.",
    preco: 5000,
    emoji: "💬",
  },
  {
    id: 3,
    nome: "Terapia Familiar",
    descricao: "Sessões em grupo para reforçar laços.",
    preco: 7500,
    emoji: "👨‍👩‍👧",
  },
];

export default function Catalogo() {
  const handleCheckout = async (produto) => {
    try {
      const res = await fetch("/.netlify/functions/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ produto }),
      });
      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Erro ao criar sessão de pagamento.");
      }
    } catch (err) {
      console.error(err);
      alert("Erro ao ligar ao servidor.");
    }
  };

  return (
    <section id="catalogo" className="py-16 bg-stone-50">
      <h2 className="text-center text-2xl font-semibold mb-10 text-stone-700">
        Catálogo de Sessões
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {produtos.map((p) => (
          <div
            key={p.id}
            className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition"
          >
            <div className="text-4xl mb-3">{p.emoji}</div>
            <h3 className="text-lg font-medium text-stone-700">{p.nome}</h3>
            <p className="text-stone-500 text-sm mt-2">{p.descricao}</p>
            <p className="text-stone-700 text-lg font-semibold mt-3">
              {(p.preco / 100).toFixed(2)} €
            </p>
            <button
              onClick={() => handleCheckout(p)}
              className="mt-5 inline-block bg-[#eed9c4] text-stone-700 px-5 py-2 rounded-xl hover:bg-[#e6d0bb] transition"
            >
              Comprar Sessão
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
