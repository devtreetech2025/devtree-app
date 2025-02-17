// pages/index.js
import Head from 'next/head';
import Header from './components/Header';
import Hero from './components/HeroSection';
import About from './pages/About';
import Services from './components/Services';
import Contact from './pages/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Five Tech - Quality Tech Solutions</title>
        <meta name="description" content="Delivering the tech you love from the biggest brands in the industry." />
      </Head>
      <Header />
      <main className="pt-20"> {/* Adjust padding-top for fixed header */}
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
