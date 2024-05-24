"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from "@/components/Button";
import logo from "@/public/assets/img/Logo-Blauwkleur.png";

const Navbar: React.FC = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [scrolling, setScrolling] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);
    return () => window.removeEventListener("resize", showButton);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`w-full fixed left-0 z-50 transition-transform duration-300 ${
        scrolling ? "-translate-y-full" : "translate-y-0"
      } bg-white shadow-md font-montserrat rounded-b-[32px]`}
    >
      <div className="grid grid-cols-3 items-center p-2 md:p-4">
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="Verzuimnavigator Logo" className="h-14 w-auto" />
          <div className="text-xs ml-4 text-gray-800">
            Powered by
            <br />
            Metaalunie
          </div>
        </Link>
        <div className="hidden md:flex justify-center col-span-1 font-bold">
          <ul className="flex space-x-4">
            <li className="nav-item">
              <Link href="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/stappenplan" className="nav-links" onClick={closeMobileMenu}>
                Stappenplan
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/artikelen" className="nav-links" onClick={closeMobileMenu}>
                Artikelen
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/diensten" className="nav-links" onClick={closeMobileMenu}>
                Diensten
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/vergoedingen" className="nav-links" onClick={closeMobileMenu}>
                Vergoedingen
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-links" onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-end col-span-2 md:col-span-1">
          <button
            className="md:hidden text-2xl cursor-pointer focus:outline-none"
            onClick={handleClick}
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={click ? faTimes : faBars} />
          </button>
          <ul
            className={`md:flex md:items-center list-none ${
              click ? "flex" : "hidden"
            } flex-col md:flex-row absolute md:static top-20 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent transition-all duration-300 space-y-1 md:space-y-0 md:space-x-4`}
          >
            <li className="nav-item md:hidden">
              <Link href="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item md:hidden">
              <Link href="/stappenplan" className="nav-links" onClick={closeMobileMenu}>
                Stappenplan
              </Link>
            </li>
            <li className="nav-item md:hidden">
              <Link href="/artikelen" className="nav-links" onClick={closeMobileMenu}>
                Artikelen
              </Link>
            </li>
            <li className="nav-item md:hidden">
              <Link href="/diensten" className="nav-links" onClick={closeMobileMenu}>
                Diensten
              </Link>
            </li>
            <li className="nav-item md:hidden">
              <Link href="/vergoedingen" className="nav-links" onClick={closeMobileMenu}>
                Vergoedingen
              </Link>
            </li>
            <li className="nav-item md:hidden">
              <Link href="/contact" className="nav-links" onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              {button ? (
                <Button
                  buttonStyle="btn--outline"
                  buttonSize="btn--large"
                  width="120px"
                  height="45px"
                  backgroundColor="primary"
                  textColor="black"
                  borderColor="primary"
                  fontType= "font-bold"
                >
                  Zoeken
                </Button>
              ) : (
                <Link href="/zoeken" className="nav-links-mobile" onClick={closeMobileMenu}>
                  Zoeken
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
