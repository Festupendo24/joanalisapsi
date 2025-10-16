import React from "react";
import { Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 text-center text-sm text-stone-600 pb-10">
      {/* Ícones de redes sociais */}
      <div className="flex justify-center gap-6 mb-4 text-xl">
        {/* Instagram */}
        <a
          href="https://instagram.com/joanalisapsi"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#c4b5a1] transition"
          aria-label="Instagram"
        >
          <Instagram size={24} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/joana-lisa-vara-48582326b/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#0077b5] transition"
          aria-label="LinkedIn"
        >
          <Linkedin size={24} />
        </a>

        {/* Email */}
        <a
          href="mailto:joanalisapsi@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#c4b5a1] transition"
          aria-label="Email"
        >
          <Mail size={24} />
        </a>
      </div>

      <p className="text-xs text-stone-500">
        © {year} <span className="font-medium">Joana Lisa Vara</span> — Todos os direitos reservados
      </p>
    </footer>
  );
}
