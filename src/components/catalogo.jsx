import React from "react";

const produtos = [
  {
    id: 1,
    nome: "Terapia Individual",
    descricao: "Explora o teu equilíbrio emocional com sessões personalizadas e confidenciais.",
    preco: "50 €",
    link: "https://buy.stripe.com/test_12345", // <-- o teu Stripe Payment Link
    emoji: "🧠",
  },
  {
    id: 2,
    nome: "Sessão Online",
    descricao: "Encontro digital via Teams ou Zoom, com horário flexível.",
    preco: "50 €",
    link: "https://buy.stripe.com/test_67890", // <-- o teu Stripe Payment Link
    emoji: "💬",
  },
  {
    id: 3,
    nome: "Terapia Familiar",
    descricao: "Sessões em grupo para melhorar a comunicação e reforçar laços familiares.",
    preco: "75 €",
    link: "https://buy.stripe.com/test_abcd", // <-- o teu Stripe Payment Link
    emoji: "👨‍👩‍👧",
  },
];

export default function Catalogo() {
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
            <p className="text-stone-700 text-lg font-semibold mt-3">{p.preco}</p>

            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-block bg-[#eed9c4] text-stone-700 px-5 py-2 rounded-xl hover:bg-[#e6d0bb] transition"
            >
              Comprar Sessão
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
