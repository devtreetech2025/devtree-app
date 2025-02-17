// components/Header.js
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-black shadow fixed w-full z-10">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <div className="font-bold text-xl">DevTree Tech</div>
        <ul className="flex space-x-4">
          <li><a href="#hero" className="hover:text-blue-500">Home</a></li>
          <li><a href="#about" className="hover:text-blue-500">About Us</a></li>
          <li><a href="#services" className="hover:text-blue-500">Services</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
