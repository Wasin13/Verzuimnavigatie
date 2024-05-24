import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "@/components/Searchbar";
import ButtonStyle from "@/components/ButtonStyle";
import Footer from "@/components/Footer"; // Import the Footer component
import articles from "@/app/artikelen/articlesData"; // Import the common data source

const ArticlesPage: React.FC = () => {
  return (
    <div className="bg-darkblue">
      <div className="px-8 py-16">
        {/* Header Section */}
        <header className="text-left mb-15">
          <h1 className="text-5xl font-bold text-primary mt-8">Artikelen</h1>
          <p className="text-sm text-white max-w-3xl mt-4">
            Hier kunt u al onze artikelen vinden. Of het nou gaat over hoe u uw medewerker kan helpen afvallen of hoe u een voortgangsgesprek het beste kan opzetten. Om specifieker te zoeken zijn er ook thema’s die correleren met de verschillende problemen die u op de vloer kan tegenkomen.
          </p>
          <div className="mt-4 mb-4">
            <SearchBar
              articles={articles}
              width="40%"
              height="40px"
              buttonWidth="100px"
              buttonHeight="40px"
            />
          </div>
        </header>

        {/* Category Filters */}
        <section className="bg-gray-200 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Onze thema’s</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="font-semibold text-xl mb-2">Ziekmelden</h3>
              <ul className="text-gray-700 space-y-2">
                <ButtonStyle text="Frequent verzuim" />
                <ButtonStyle text="Langdurige ziekte" />
                <ButtonStyle text="Legaliteiten" />
                <ButtonStyle text="Wat moet ik invullen?" />
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">Veilig werken</h3>
              <ul className="text-gray-700 space-y-2">
                <ButtonStyle text="Veilige werkvloer" />
                <ButtonStyle text="Belang van veiligheid" />
                <ButtonStyle text="Regels op de werkvloer" />
                <ButtonStyle text="Conflict" />
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">Hulpbronnen</h3>
              <ul className="text-gray-700 space-y-2">
                <ButtonStyle text="Fysieke gezondheid" />
                <ButtonStyle text="Mentale gezondheid" />
                <ButtonStyle text="Financiële hulp" />
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">Preventie middelen</h3>
              <ul className="text-gray-700 space-y-2">
                <ButtonStyle text="Veiligheidsbrillen op sterkte" />
                <ButtonStyle text="Valharnassen" />
                <ButtonStyle text="Gehoorbescherming" />
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* Articles Grid */}
      <section className="px-8 py-16 bg-[#f4eeea]">
        <h2 className="text-4xl text-darkblue mb-10">Alle artikelen</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(0, 9).map((article, index) => (
            <Link key={index} href={`/artikelen/${article.id}`} legacyBehavior>
              <a className="bg-[#f4eeea] rounded-lg shadow-lg overflow-hidden flex flex-col">
                <div className="relative w-full h-48">
                  <Image
                    src={article.image}
                    alt={article.title}
                    layout="fill"
                    objectFit="fill"
                    className="rounded-t-lg"
                  />
                </div>
                <div className="relative -mt-4 z-10 px-6 pt-4 pb-6 bg-[#f4eeea] rounded-lg flex flex-col flex-grow">
                  <h3 className="font-bold text-xl mb-2 text-darkblue">{article.title}</h3>
                  <p className="text-lg text-neutral-500 font-bold mb-2">{article.category}</p>
                  <p className="text-black mb-4 flex-grow">{article.description}</p>
                  <hr className="my-6 border-black border-1" />
                  <div className="flex justify-between items-center mt-auto">
                    <p className="text-lg text-gray-600">{article.readTime}</p>
                    <button className="bg-black text-white rounded-full py-2 px-4 flex items-center justify-center transition-colors duration-300 hover:bg-primary hover:text-white">
                      Artikel lezen
                      <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                    </button>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <Footer />  {/* Include the Footer component */}
    </div>
  );
};

export default ArticlesPage;
