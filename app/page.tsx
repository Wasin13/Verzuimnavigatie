"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Card from "@/components/Card";
import SearchBar from "@/components/Searchbar";
import Footer from "@/components/Footer";
import articles from "@/app/artikelen/articlesData"; // Import the common data source

const Home: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current + 1) % articles.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + articles.length) % articles.length);
  };

  const getGridPosition = () => {
    return `translateX(-${current * (100 / 3)}%)`;
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[800px] w-full flex justify-center items-center text-center text-white overflow-hidden">
        <Image
          src="/assets/img/pexel.jpg"
          alt="Background image"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        <div className="absolute inset-0 bg-[rgba(20,49,87,0.5)] z-10"></div>
        <div className="relative z-20 glassmorphism p-8 flex flex-col items-start justify-start max-w-[800px]">
          <h1 className="font-montserrat text-left text-primary text-5xl leading-[95%] tracking-[-0.02em] font-light mb-5">
            Navigeer naar gezond werk
          </h1>
          <p className="font-montserrat text-left text-white font-regular text-base leading-[165%] font-normal mb-10">
            De Verzuimnavigator heeft de grootste verzameling informatie over ziekteverzuim en preventie in de metaalbranche. Hier vindt u hulp om medewerkers te begeleiden bij ziekte of om samen te werken aan een gezonde werkplek. En als u een dienst aanschaft ter ondersteuning, dan ontvangt u extra vergoedingen!
          </p>
          <SearchBar articles={articles} width="100%" />
        </div>
      </div>

      {/* Card Section */}
      <div className="py-12 px-8 lg:px-20 bg-gray-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          title="Stappenplan zieke medewerker"
          description="In het stappenplan wordt u meegenomen in de acties die van u, als werkgever, worden verwacht bij een zieke medewerker."
          buttonText="Bekijk stappenplan"
          category="Ziekteverzuim"
        />
        <Card
          title="Neus even rond in onze artikelen"
          description="Verken ons uitgebreide assortiment aan bronnen, tools en tips om de gezondheid en het welzijn van uw team én uzelf te bevorderen."
          buttonText="Bekijk alle artikelen"
          category="Artikelen"
        />
        <Card
          title="Presenteren van ons prototype"
          description="Bescherming begint hier. Ontdek onze uitgebreide selectie preventiemiddelen en zorg voor een veilige werkomgeving voor uw team."
          buttonText="Bekijk preventiemiddelen"
          category="Preventie"
        />
      </div>

      {/* About Section */}
      <div
        className="relative w-full h-[886px] bg-cover bg-center flex justify-center items-center text-center text-white overflow-hidden"
        style={{
          backgroundImage: "url('/assets/img/pexels-pixabay-162534-10.png')",
        }}
      >
        <div className="absolute inset-0 bg-[rgba(20,49,87,0.5)] z-10"></div>
        <div className="relative z-20 w-full h-full flex flex-col items-center justify-center p-10">
          <h2 className="text-primary text-center font-montserrat text-4xl lg:text-5xl leading-tight mb-10">
            Wat is de Verzuimnavigator?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            <Card
              title="Samenwerken"
              description="De Verzuimnavigator is een samenwerking van de Koninklijke Metaalunie, Mevas, NV schade, KMUV en Zilveren Kruis. Het doel? Werkgevers in de metaalbranche ondersteunen bij preventie, verzuim en re-integratie."
              buttonText=""
              category="Samenwerking"
              customStyles="bg-white/20 backdrop-blur-xl rounded-xl p-10 shadow-xl"
            />
            <Card
              title="Vergoedingen op diensten"
              description="Werkgevers in de metaalbranche kunnen in de Verzuimnavigator diensten aanschaffen met een aantrekkelijke vergoedingen van maximaal 65%. U kunt denken aan trainingen, werkplekonderzoeken en re-integratietrajecten."
              buttonText=""
              category="Vergoedingen"
              customStyles="bg-white/20 backdrop-blur-xl rounded-xl p-10 shadow-xl"
            />
            <Card
              title="Relevante thema’s"
              description="In de Verzuimnavigator vinden werkgevers uitgebreide informatie over verschillende relevante thema’s in de bedrijfstak. Al deze informatie helpt werkgevers om hun bedrijf en medewerkers gezond te maken en te houden."
              buttonText=""
              category="Thema's"
              customStyles="bg-white/20 backdrop-blur-xl rounded-xl p-10 shadow-xl"
            />
            <Card
              title="Altijd in beweging"
              description="Met de Verzuimnavigator zorgen werkgevers ervoor dat hun bedrijf in beweging blijft, maar ook de Verzuimnavigator is altijd in beweging. Er worden continu nieuwe en handige functionaliteiten toegevoegd."
              buttonText=""
              category="Beweging"
              customStyles="bg-white/20 backdrop-blur-xl rounded-xl p-10 shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Article Carousel Section */}
      <div className="carousel-container bg-gray-100 text-center py-10">
        <h2 className="text-primary font-montserrat text-5xl font-light mb-10">
          Onze nieuwste artikelen
        </h2>
        <div className="carousel relative flex items-center justify-center">
          <button
            className="carousel-button text-2xl text-gray-800 p-2"
            onClick={prevSlide}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <div className="carousel-content overflow-hidden max-w-4xl w-full relative">
            <div
              className="carousel-grid flex transition-transform duration-500"
              style={{ transform: getGridPosition() }}
            >
              {articles.map((article, index) => (
                <div className="carousel-item flex-none w-1/3 p-4" key={index}>
                  <div className="relative w-full h-48 rounded-t-xl overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-xl"
                    />
                    <div className="carousel-readtime absolute top-2 right-2 bg-white/20 text-white text-xs py-1 px-2 rounded-full backdrop-blur-lg">
                      {article.readTime}
                    </div>
                  </div>
                  <div className="h-72 carousel-text bg-[#f4eeea] rounded-b-xl p-4 text-left relative flex flex-col">
                    <h3 className="font-montserrat text-xl mb-2">
                      {article.title}
                    </h3>
                    <p className="font-montserrat text-base mb-2 card-description">
                      {article.description}
                    </p>
                    <div className="mt-auto">
                      <p className="text-sm text-gray-700 mb-4">
                        {article.category}
                      </p>
                      <button className="bg-[#f5b741] text-black rounded-full py-2 px-4 mt-2 flex items-center justify-center transition-colors duration-300 hover:bg-black hover:text-white">
                        <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            className="carousel-button text-2xl text-gray-800 p-2"
            onClick={nextSlide}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>

      {/* Sponsors Section */}
      <div className="sponsors-section py-20 bg-[#f9f9f9] text-center">
        <h2 className="sponsors-title font-montserrat text-xl text-left text-[#333] mb-10 ml-10">
          Mogelijk gemaakt door
        </h2>
        <div className="sponsors-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center max-w-screen-lg mx-auto">
          <div className="sponsor-item flex justify-center items-center bg-white rounded-xl p-4 shadow-md w-[150px] h-[150px]">
            <Image
              src="/assets/img/image-10.png"
              alt="Sponsor 1"
              layout="intrinsic"
              width={150}
              height={80}
              className="object-contain"
            />
          </div>
          <div className="sponsor-item flex justify-center items-center bg-white rounded-xl p-4 shadow-md w-[150px] h-[150px]">
            <Image
              src="/assets/img/image-11.png"
              alt="Sponsor 2"
              layout="intrinsic"
              width={150}
              height={80}
              className="object-contain"
            />
          </div>
          <div className="sponsor-item flex justify-center items-center bg-white rounded-xl p-4 shadow-md w-[150px] h-[150px]">
            <Image
              src="/assets/img/image-12.png"
              alt="Sponsor 3"
              layout="intrinsic"
              width={150}
              height={80}
              className="object-contain"
            />
          </div>
          <div className="sponsor-item flex justify-center items-center bg-white rounded-xl p-4 shadow-md w-[150px] h-[150px]">
            <Image
              src="/assets/img/image-13.png"
              alt="Sponsor 4"
              layout="intrinsic"
              width={150}
              height={80}
              className="object-contain"
            />
          </div>
          <div className="sponsor-item flex justify-center items-center bg-white rounded-xl p-4 shadow-md w-[150px] h-[150px]">
            <Image
              src="/assets/img/image-14.png"
              alt="Sponsor 5"
              layout="intrinsic"
              width={150}
              height={80}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />  {/* Include the Footer component */}
    </div>
  );
};

export default Home;
