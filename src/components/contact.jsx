import React from "react";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for reaching out! I'll get back to you soon.");
    e.target.reset();
  };

  return (
    <section id="contact" className="max-w-xl mx-auto px-4 py-16 text-white">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <form
        className="flex flex-col gap-4 bg-neutral-900 p-6 rounded-2xl shadow-lg"
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
    </section>
  );
}

export default Contact;
