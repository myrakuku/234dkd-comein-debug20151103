// components/WhatsAppButton.jsx
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';


export default function WhatsAppButton() {
  return (
    <>
      <Link
        href="https://wa.me/69291767"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white py-3 px-6 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 flex items-center space-x-2"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
        <span className="font-medium">即時報價</span>
      </Link>
    </>
  );
}
