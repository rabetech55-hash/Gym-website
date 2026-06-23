function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-blue-950 text-white relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="section-title gradient-text">
          Contact Us
        </h2>

        <form className="glass p-10 rounded-3xl">

          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Full Name"
              className="bg-gray-900 p-4 rounded-xl outline-none"
            />

            <input
              type="email"
              placeholder="Email"
              className="bg-gray-900 p-4 rounded-xl outline-none"
            />

          </div>

          <input
            type="tel"
            placeholder="Phone Number"
            className="bg-gray-900 p-4 rounded-xl outline-none w-full mt-6"
          />

          <textarea
            rows="6"
            placeholder="Message"
            className="bg-gray-900 p-4 rounded-xl outline-none w-full mt-6"
          />

          <button
            type="submit"
            className="bg-primary px-8 py-4 rounded-full mt-6 font-bold blue-glow"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;