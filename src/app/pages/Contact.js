// components/Contact.js
export default function Contact() {
    return (
      <section id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-black">Get In Touch</h2>
          <p className="mb-8 text-black">We’d love to hear from you! Drop us a message or give us a call.</p>
          <form className="max-w-xl mx-auto">
            <input type="text" placeholder="Your Name" className="w-full p-3 border rounded mb-4" />
            <input type="email" placeholder="Your Email" className="w-full p-3 border rounded mb-4" />
            <textarea placeholder="Your Message" className="w-full p-3 border rounded mb-4" rows="4"></textarea>
            <button type="submit" className="bg-gray-500 hover:bg-gray-900 text-white px-4 py-2 rounded">Send Message</button>
          </form>
        </div>
      </section>
    );
  }
  