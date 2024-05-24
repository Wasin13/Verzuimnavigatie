import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <div className="footer bg-[#143157] text-white py-10 backdrop-blur-md shadow-md">
      <div className="footer-container flex justify-between items-start max-w-6xl mx-auto px-5 lg:px-10 bg-white/20 rounded-xl p-5 shadow-md backdrop-blur-lg">
        <div className="footer-column flex-1 mx-5">
          <h3 className="font-montserrat text-lg mb-5">Ons aanbod</h3>
          <ul className="list-disc pl-5">
            <li className="mb-2">
              <Link href="/artikelen" className="text-white hover:text-[#f5b741] transition duration-300">
                Artikelen
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/stappenplan" className="text-white hover:text-[#f5b741] transition duration-300">
                Stappenplan
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/diensten" className="text-white hover:text-[#f5b741] transition duration-300">
                Diensten
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/preventiefonds" className="text-white hover:text-[#f5b741] transition duration-300">
                Preventiefonds
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/vergoedingen" className="text-white hover:text-[#f5b741] transition duration-300">
                Vergoedingen
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-column flex-1 mx-5">
          <h3 className="font-montserrat text-lg mb-5">Gebruikersvoorwaarden</h3>
          <ul className="list-disc pl-5">
            <li className="mb-2">
              <Link href="/disclaimer" className="text-white hover:text-[#f5b741] transition duration-300">
                Disclaimer
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/privacy" className="text-white hover:text-[#f5b741] transition duration-300">
                Privacy
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/cookies" className="text-white hover:text-[#f5b741] transition duration-300">
                Cookies
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-column flex-1 mx-5">
          <h3 className="font-montserrat text-lg mb-5">Contact</h3>
          <ul className="list-disc pl-5">
            <li className="mb-2">Tel. nummer: 085 - 0045 341</li>
            <li className="mb-2">
              <Link href="mailto:service@verzuimnavigator.nl" className="text-white hover:text-[#f5b741] transition duration-300">
                E-mail: service@verzuimnavigator.nl
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/meer-hulp" className="text-white hover:text-[#f5b741] transition duration-300">
                Meer hulp nodig?
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
