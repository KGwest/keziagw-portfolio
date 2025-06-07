import React from 'react';

const Contact = () => (
  <section className="min-h-screen flex flex-col items-center justify-center text-center">
    <h2 className="text-4xl font-semibold mb-4">Contact</h2>
    <form className="flex flex-col gap-2 w-64">
      <input type="text" placeholder="Name" className="p-2 rounded" />
      <input type="email" placeholder="Email" className="p-2 rounded" />
      <textarea placeholder="Message" className="p-2 rounded"></textarea>
      <button className="bg-blue-500 text-white py-2 rounded">Send</button>
    </form>
    <div className="mt-4">[LinkedIn] [GitHub]</div>
  </section>
);

export default Contact;