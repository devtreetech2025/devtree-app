// components/Hero.js
export default function Hero() {
    return (
      <section id="hero" className="bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: "url('/path-to-your-hero-image.jpg')" }}>
        <div className="bg-black bg-opacity-50 p-8 rounded text-center">
          <h1 className="text-white text-4xl font-bold mb-4">Together, We Build Smarter Solutions.</h1>
         
          <div className="space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">View Our Services</button>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">Visit Box</button>
          </div>
        </div>
      </section>
    );
  }
  