// components/About.js
export default function About() {
    return (
      <section id="about" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-black text-center mb-8">About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="font-semibold text-black">Who We Are</h3>
              <p className="mt-2 text-black">A dedicated team of tech enthusiasts delivering quality.</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-black">Where We Are</h3>
              <p className="mt-2 text-black">Operating across the UK with offices in London and Birmingham.</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-black">How We Help</h3>
              <p className="mt-2 text-black">Powering businesses with tailored tech solutions.</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-black">What We Care About</h3>
              <p className="mt-2 text-black">Over 10 ISO certifications, including ISO 9001 and ISO 14001.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  