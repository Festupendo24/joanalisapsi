import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_h3gxwtk",     // ✅ o teu Service ID
        "template_fx9e80d",    // ✅ o teu Template ID
        form.current,
        "7zP3Q8XzTv0RRRIXW"    // ✅ a tua Public Key (User ID)
      )
      .then(
        () => {
          setStatus("success");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          setStatus("error");
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
    >
      <h2 className="text-lg font-medium mb-4 text-center">
        Envia-me uma mensagem
      </h2>

      <div className="mb-3">
        <input
          type="text"
          name="from_name"
          placeholder="O teu nome"
          required
          className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-1 focus:ring-[#eed9c4]"
        />
      </div>

      <div className="mb-3">
        <input
          type="email"
          name="from_email"
          placeholder="O teu email"
          required
          className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-1 focus:ring-[#eed9c4]"
        />
      </div>

      <div className="mb-4">
        <textarea
          name="message"
          rows="4"
          placeholder="A tua mensagem"
          required
          className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-1 focus:ring-[#eed9c4]"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-[#eed9c4] text-[#3e4842] font-medium py-2 rounded-xl hover:bg-[#e6d0bb] transition"
      >
        {status === "sending" ? "A enviar..." : "Enviar"}
      </button>

      {status === "success" && (
        <p className="text-green-600 text-sm mt-3 text-center">
          ✅ Mensagem enviada com sucesso!
        </p>
      )}
      {status === "error" && (
        <p className="text-red-500 text-sm mt-3 text-center">
          ⚠️ Ocorreu um erro ao enviar. Tenta novamente.
        </p>
      )}
    </form>
  );
}
