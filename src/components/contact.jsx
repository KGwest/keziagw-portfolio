import React from "react";

const KOI_GIF = "/koi-fish.gif";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for reaching out! I'll get back to you soon.");
    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="relative min-h-[400px] flex flex-col items-center justify-center px-4 py-12 overflow-hidden"
      style={{
        background: `url('${KOI_GIF}') center center / cover no-repeat`,
        backgroundColor: "#141718",
      }}
    >
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />
      <div className="relative z-10 max-w-xl w-full mx-auto text-white">
        <h2 className="text-3xl font-bold mb-6 text-center drop-shadow-lg">
          Contact
        </h2>
        <form
          className="flex flex-col gap-4 bg-neutral-900 p-8 rounded-2xl shadow-xl"
          onSubmit={handleSubmit}
        >
          <input
            className="p-3 rounded bg-neutral-800 border border-neutral-700 focus:outline-none"
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <input
            className="p-3 rounded bg-neutral-800 border border-neutral-700 focus:outline-none"
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            className="p-3 rounded bg-neutral-800 border border-neutral-700 focus:outline-none"
            name="message"
            placeholder="Your Message"
            rows={4}
            required
          />
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 rounded py-3 text-white font-bold transition-all"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
