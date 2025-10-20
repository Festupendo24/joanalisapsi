import { useState, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import logo from "./assets/psilisa.png"; // <-- substitui pelo teu ficheiro
import ContactForm from "./components/ContactForm";
import Catalogo from "./components/Catalogo";
import Footer from "./components/Footer";
import Sucesso from "./components/Sucesso";
import { Menu } from "lucide-react";

const therapies = [
  "Terapia Cognitivo-Comportamental",
  "Terapia de Casal e Familiar",
  "Mindfulness e Gestão Emocional",
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <Router>
      <Routes>
        {/* 👉 Rota principal */}
        <Route
          path="/"
          element={
            <div className="font-sans scroll-smooth">
              {/* NAVBAR */}
              <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
                <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2">
                  {/* Logo + Nome */}
                  <div className="flex items-center gap-2">
                    <img src={logo} alt="Logotipo" className="h-10 w-auto" />
                    <span className="font-medium text-stone-500 text-sm hidden sm:block">
                      Joana Lisa Vara
                    </span>
                  </div>

                  {/* Botão mobile */}
                  <button
                    className="sm:hidden flex items-center justify-center text-stone-700 w-10 h-10 hover:bg-stone-100 rounded-md transition"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Abrir menu"
                  >
                    <Menu size={24} />
                  </button>

                  {/* Links */}
                  <ul
                    className={`sm:flex gap-4 text-stone-600 text-sm font-medium ${menuOpen ? "block mt-3 sm:mt-0" : "hidden sm:flex"
                      }`}
                  >
                    <li><a href="#inicio" className="hover:text-stone-400">Início</a></li>
                    <li><a href="#sobre" className="hover:text-stone-400">Sobre</a></li>
                    <li><a href="#catalogo" className="hover:text-stone-400">Catalogo</a></li>
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
                  <p className="text-stone mt-1">Psicóloga e Terapeuta Comportamental • Porto</p>
                </section>

                <section id="sobre" className="py-20 bg-stone-50">
                  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">

                    {/* FOTO */}
                    <div className="md:w-1/2 flex justify-center">
                      <img
                        src="/lisa.png" // 📸 substitui pelo nome da tua imagem
                        alt="Joana Lisa Vara"
                        className="w-72 h-72 object-cover rounded-3xl shadow-md border border-[#eed9c4]/50"
                      />
                    </div>

                    {/* TEXTO */}
                    <div className="md:w-1/2 text-center md:text-left leading-relaxed max-w-prose mx-auto">
                      <h2 className="text-3xl font-semibold mb-4 text-stone-700">Sobre Mim</h2>
                      <p className="text-stone-600 leading-relaxed mb-4">
                        Sou Mestre em Psicologia da Educação pela Universidade Lusíada do Porto e Formadora Certificada pela DGERT.
                        Desde cedo descobri na Psicologia um caminho que me permite unir ciência, empatia e propósito — ajudando pessoas a compreenderem-se e a viverem com mais equilíbrio emocional.
                      </p>

                      <p className="text-stone-600 leading-relaxed mb-4">
                        O meu percurso tem sido marcado pela avaliação e intervenção psicológica em crianças e adolescentes, com foco na promoção do desenvolvimento emocional, social e comportamental.
                        Tenho especial interesse em perturbações do neurodesenvolvimento, dificuldades de aprendizagem, gestão emocional e comportamentos desafiantes.
                      </p>

                      <p className="text-stone-600 leading-relaxed mb-6">
                        Acredito que cada pessoa merece uma intervenção ajustada à sua história e às suas necessidades — com respeito, acolhimento e esperança.Realizo sessões presenciais e consultas online, para que cada família possa escolher o formato mais confortável e conveniente.
                      </p>

                      {/* ✅ Botão WhatsApp dentro do texto */}
                      <a
                        href="https://wa.me/351912345678?text=Olá%20Joana%2C%20gostava%20de%20marcar%20uma%20sessão!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center gap-2 bg-[#eed9c4] text-stone-700 px-6 py-3 rounded-full font-medium shadow-md hover:bg-[#e6d0bb] transition"
                      >
                        💬 Contacta-me no WhatsApp
                      </a>

                    </div>
                  </div>
                </section>


             

                {/* Áreas de Atuação */}
                <section id="atuacao" className="py-20 bg-stone-50 text-center">
                  <div className="max-w-5xl mx-auto px-1">
                    <h3 className="text-3xl font-semi bold mb-4 text-stone-700 break-words whitespace-normal leading-snug">
                      Áreas de Atuação
                    </h3>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                      {[
                        {
                          titulo: "👧 Avaliação e Intervenção Psicológica",
                          descricao:
                            "Apoio emocional e comportamental a crianças e adolescentes. Inclui avaliação psicológica e psicopedagógica, com planos de intervenção personalizados — presencial ou online.",
                        },
                        {
                          titulo: "🧩 Perturbações do Neurodesenvolvimento",
                          descricao:
                            "Acompanhamento de crianças e jovens com Autismo (PEA), dificuldades de atenção, linguagem ou aprendizagem. Foco na comunicação, autonomia e regulação emocional.",
                        },
                        {
                          titulo: "👨‍👩‍👧 Apoio Parental",
                          descricao:
                            "Sessões para pais e cuidadores focadas em comunicação positiva, gestão emocional e fortalecimento da relação familiar.",
                        },
                        {
                          titulo: "💤 Terapia do Sono",
                          descricao:
                            "Intervenções personalizadas para melhorar o descanso e tratar dificuldades de sono.",
                        },
                        {
                          titulo: "💬 Gestão Emocional",
                          descricao:
                            "Promoção do equilíbrio emocional e desenvolvimento de estratégias para lidar com o stress e a ansiedade.",
                        },
                        {
                          titulo: "🌿 Depressão e Ansiedade",
                          descricao:
                            "Apoio psicológico para superar momentos de tristeza, medo ou desmotivação, através de estratégias de reestruturação cognitiva e emocional.",
                        },
                      ].map((area) => (
                        <div
                          key={area.titulo}
                          className="bg-white shadow-sm border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:-translate-y-1 transition transform text-left"
                        >
                          <h3 className="font-semibold text-lg text-stone-700 mb-3">
                            {area.titulo}
                          </h3>
                          <p className="text-stone-600 text-sm leading-relaxed whitespace-pre-line">
                            {area.descricao}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* outras secções */}
                <Catalogo />
                {/* outras secções */}
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
                {/* 📬 Contacto */}
                <section id="contacto" className="py-20 bg-stone-50 text-center">
                  <h2 className="text-2xl font-semibold mb-6 text-stone-700">Contacto</h2>

                  <p className="text-stone-600 mb-4">
                    📍 <strong>Porto - Vila Nova de Gaia</strong>
                  </p>

                  <p className="text-stone-600 mb-6">
                    Horário: <span className="text-stone-500">Seg. a Sex. • 9h às 19h</span>
                  </p>



                  {/* Botão WhatsApp */}
                  <div className="mt-6">
                    <a
                      href="https://wa.me/351912345678?text=Olá%20Joana%2C%20gostava%20de%20marcar%20uma%20sessão!"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#eed9c4] text-stone-700 px-5 py-3 rounded-full font-medium shadow-sm hover:bg-[#e6d0bb] transition"
                    >
                      💬 Contacta-me no WhatsApp
                    </a>
                  </div>

                  {/* Formulário de contacto */}
                  <div className="mt-10">
                    <ContactForm />
                  </div>
                </section>

                {/* 🌿 Rodapé */}
                <Footer />

              </div>
            </div>
          }
        />

        {/* 👉 Rota de sucesso */}
        <Route path="/sucesso" element={<Sucesso />} />
      </Routes>
    </Router>
  );
}