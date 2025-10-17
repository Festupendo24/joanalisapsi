import React from "react";

export default function Sucesso() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-stone-50 text-stone-700 px-6 text-center">
      <h1 className="text-3xl font-semibold mb-4">Pagamento bem-sucedido 🎉</h1>
      <p className="text-lg mb-6">
        Obrigado pela tua compra! A tua sessão foi confirmada com sucesso.
      </p>

      <a
        href="/"
        className="bg-[#eed9c4] px-5 py-2 rounded-xl hover:bg-[#e6d0bb] transition"
      >
        Voltar à página inicial
      </a>
    </div>
  );
}
