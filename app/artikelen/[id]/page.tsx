"use client";

import { usePathname } from "next/navigation";
import articles from "@/app/artikelen/articlesData"; // Adjust the path if necessary
import Image from "next/image";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons"; // Correct imports

const ArticleDetail = () => {
  const pathname = usePathname();
  const id = pathname.split("/").pop();
  const article = articles.find(article => article.id === parseInt(id as string, 10));

  if (!article) {
    return <p>Artikel niet gevonden</p>;
  }

  return (
    <div className="bg-white">
      <div className="relative h-[400px] w-full flex justify-center items-center text-center text-white overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        <div className="absolute inset-0 bg-[rgba(20,49,87,0.5)] z-10"></div>
        <div className="relative z-20 p-8 flex flex-col items-start justify-center max-w-[800px]">
          <h1 className="font-montserrat text-left text-primary text-5xl leading-[95%] tracking-[-0.02em] font-light mb-5">
            {article.title}
          </h1>
        </div>
      </div>

      <div className="px-8 py-16 max-w-screen-lg mx-auto flex">
        <div className="w-2/3 pr-8">
          <div className="text-gray-700 text-sm mb-4">
            <span>Geplaatst op: 25/04/2024</span> | <span>{article.readTime}</span>
          </div>
          <h2 className="text-4xl font-semibold mb-6">{article.title}</h2>
          <div className="prose prose-lg max-w-none mb-8">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies tincidunt est, quis gravida justo iaculis id. Praesent nunc odio, ornare a dignissim ac, ultrices sed nibh. Nunc quis urna dignissim felis elementum gravida. Aliquam erat volutpat. Donec scelerisque eu vehicula, molestie ipsum at, aliquam orci. Morbi vel quam quis purus viverra posuere. In maximus odio vel quam dignissim, sollicitudin consectetur metus vestibulum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies tincidunt est, quis gravida justo iaculis id. Praesent nunc odio, ornare a dignissim ac, ultrices sed nibh. Nunc quis urna dignissim felis elementum gravida. Aliquam erat volutpat. Donec scelerisque eu vehicula, molestie ipsum at, aliquam orci. Morbi vel quam quis purus viverra posuere. In maximus odio vel quam dignissim, sollicitudin consectetur metus vestibulum.
            </p>
            {/* Add more paragraphs as needed */}
          </div>
        </div>
        
        <div className="w-1/3 pl-8">
          <div className="bg-[#f4eeea] p-6 mb-6 rounded-lg">
            <h3 className="font-bold text-lg">Auteur:</h3>
            <p className="text-sm text-gray-600">T.M.N.T. Donnatello</p>
            <p className="text-sm text-gray-600">Geplaatst op: 25/04/2024</p>
            <p className="text-sm text-gray-600">{article.readTime}</p>
          </div>
          <div className="bg-[#f4eeea] p-6 mb-6 rounded-lg">
            <h3 className="font-bold text-lg mb-4">Deel dit artikel</h3>
            <div className="flex space-x-4">
              <FontAwesomeIcon icon={faFacebook} size="2x" color="#F5B741"/>
              <FontAwesomeIcon icon={faTwitter} size="2x" color="#F5B741" />
              <FontAwesomeIcon icon={faLinkedin} size="2x" color="#F5B741"/>
            </div>
          </div>
          <div className="bg-[#f4eeea] p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-4">Gerelateerde artikelen</h3>
            <div className="space-y-4">
              {articles.slice(0, 2).map((relatedArticle, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-16 h-16 relative">
                    <Image
                      src={relatedArticle.image}
                      alt={relatedArticle.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <h4 className="text-md font-semibold">{relatedArticle.title}</h4>
                    <p className="text-sm text-gray-600">{relatedArticle.readTime}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ArticleDetail;
