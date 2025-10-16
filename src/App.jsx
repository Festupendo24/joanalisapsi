import { useState, useMemo } from "react";
import "./index.css";
import logo from "./assets/psilisa.png"; // <-- substitui pelo teu ficheiro
import ContactForm from "./components/ContactForm";
import Catalogo from "./components/Catalogo";
import Footer from "./components/Footer";


const therapies = [
  "Terapia Cognitivo-Comportamental",
  "Terapia de Casal e Familiar",
  "Mindfulness e Gestão Emocional",
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="font-sans scroll-smooth">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2">
          {/* Logo + Nome */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logotipo" className="h-10 w-auto" /> {/* ↓ antes era h-20 */}
            <span className="font-medium text-stone-500 text-sm hidden sm:block">
              Joana Lisa Vara
            </span>
          </div>

          {/* Botão mobile */}
          <button
            className="sm:hidden text-stone-600 text-lg"
            onClick={() => setMenuOpen(!menuOpen)}
          >

          </button>

          {/* Links */}
          <ul
            className={`sm:flex gap-4 text-stone-600 text-sm font-medium ${menuOpen ? "block mt-3 sm:mt-0" : "hidden sm:flex"
              }`}
          >
            <li><a href="#inicio" className="hover:text-stone-400">Início</a></li>
            <li><a href="#sobre" className="hover:text-stone-400">Sobre</a></li>
            <li><a href="#terapias" className="hover:text-stone-400">Terapias</a></li>
            <li><a href="#atuacao" className="hover:text-stone-400">Áreas de Atuação</a></li>
            <li><a href="#online" className="hover:text-stone-400">Sessões Online</a></li>
            <li><a href="#contacto" className="hover:text-stone-400">Contacto</a></li>
          </ul>
        </div>
      </nav>

      {/* CONTEÚDO */}
      <div className="pt-24 max-w-3xl mx-auto px-5">
        {/* Início */}
        <section id="inicio" className="text-center py-20">
          <img
            src={logo}
            alt="Logotipo Joana Lisa Vara"
            className="mx-auto w-40 h-auto mb-4"
          />
          <h1 className="text-3xl font-semibold tracking-wide">
            Joana Lisa Vara
          </h1>
          <p className="text-stone mt-1">Psicóloga • Porto</p>
        </section>

        <section id="sobre" className="py-16">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 px-5">
            {/* FOTO */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/src/assets/lisa.jpeg" // 📸 substitui pelo nome da tua imagem
                alt="Joana Lisa Vara"
                className="w-64 h-64 object-cover rounded-3xl shadow-md border border-[#eed9c4]/50"
              />
            </div>

            {/* TEXTO */}
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-2xl font-medium mb-4 text-[var(--cor-primaria)]">
                Sobre Mim
              </h2>
              <p className="text-stone-700 leading-relaxed">
                Priorizo o equilíbrio entre corpo e mente como base para uma vida significativa.
                Com a empatia e o cuidado como princípios orientadores, reconheço que a educação é a chave
                para a transformação positiva e procuro contribuir para a construção de ambientes de
                aprendizagem onde a diversidade é celebrada.
              </p>
            </div>
          </div>
        </section>




        {/* outras secções */}
        <Catalogo />
        {/* outras secções */}




        {/* Áreas de Atuação */}
        <section id="atuacao" className="py-16 text-center">
          <h2 className="text-xl font-medium mb-6">Áreas de Atuação</h2>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-4xl mx-auto">
            {[
              { titulo: "Comportamento", descricao: "Abordagem terapêutica de padrões de  no bem-estar emocional e social." },
              { titulo: "Terapia do Sono", descricao: "Intervenções para melhorar a qualidade do sono e tratar insónias e distúrbios relacionados." },
              { titulo: "Autismo (TEA)", descricao: "Acompanhamento terapêutico para o desenvolvimento emocional, cognitivo e social." },
              { titulo: "Terapia ABA", descricao: "Aplicação dos princípios da Análise do Comportamento Aplicada em contextos clínicos e educacionais." },
              { titulo: "Gestão Emocional", descricao: "Promoção do equilíbrio emocional e autocontrolo perante situações de stress e ansiedade." },
              { titulo: "Depressão e Ansiedade", descricao: "Intervenções centradas no apoio e reestruturação cognitiva para o bem-estar psicológico." },
            ].map((area) => (
              <div
                key={area.titulo}
                className="bg-white shadow-sm border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:-translate-y-1 transition transform"
              >
                <h3 className="font-semibold text-[var(--cor-primaria)] mb-2">
                  {area.titulo}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">{area.descricao}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sessões Online */}
        <section id="online" className="py-16 text-center">
          <h2 className="text-xl font-medium mb-3">Sessões Online</h2>
          <p className="text-stone mb-4">
            Realizo sessões por videoconferência via Microsoft Teams.
          </p>
          <a
            href="https://teams.microsoft.com/l/meetup-join/INSERE-O-TEU-LINK"
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-2xl border border-gray-300 px-5 py-2 hover:bg-gray-50 transition"
          >
            Entrar no Teams
          </a>
        </section>
        {/* Contacto */}
        <section id="contacto" className="py-16 text-center">
          <h2 className="text-xl font-medium mb-3">Contacto</h2>
          <p className="text-stone mb-4">
            📍 Madalena 25 — Porto
          </p>
          <a
            href="https://wa.me/seunumerodetelefone"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            📞 +351 912345678
          </a>
          <ContactForm />
        </section>
       <Footer />
      </div>
    </div>
  );
}
