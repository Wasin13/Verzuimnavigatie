"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "./Button";

interface SearchBarProps {
  articles: { id: number; title: string }[];
  width?: string;
  height?: string;
  buttonWidth?: string;
  buttonHeight?: string;
  buttonFontType?: string; // Add buttonFontType prop
}

const SearchBar: React.FC<SearchBarProps> = ({
  articles,
  width = '100%', // Default width
  height = '60px',
  buttonWidth = '100px', // Adjust button width
  buttonHeight = '40px', // Ensure button height matches the input height
  buttonFontType = 'font-bold', // Default font type
}) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 0) {
      const filteredArticles = articles.filter((article) =>
        article.title.toLowerCase().includes(value.toLowerCase())
      ).map(article => article.title);
      setSuggestions(filteredArticles);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    const selectedArticle = articles.find(
      (article) => article.title === suggestion
    );
    if (selectedArticle) {
      router.push(`/artikelen/${selectedArticle.id}`);
    }
  };

  const handleSearch = () => {
    const selectedArticle = articles.find(
      (article) => article.title.toLowerCase() === query.toLowerCase()
    );
    if (selectedArticle) {
      router.push(`/artikelen/${selectedArticle.id}`);
    } else {
      alert('No matching article found');
    }
  };

  return (
    <div className="flex items-center gap-2 w-full relative" style={{ width }}>
      <div className="bg-black/20 rounded-[52px] flex items-center flex-1 relative shadow-[inset_0px_-0.73px_0.73px_0px_rgba(255,_255,_255,_0.35),_inset_1.46px_2.92px_2.92px_-0.73px_rgba(0,_0,_0,_0.25)] overflow-hidden backdrop-blur-[71.56px]" style={{ height }}>
        <input
          type="text"
          className="flex-1 px-5 py-3 bg-transparent border-none outline-none text-base text-white"
          placeholder="Ik zoek hulp voor mijn medewerker..."
          value={query}
          onChange={handleChange}
        />
      </div>
      {suggestions.length > 0 && (
        <ul className="bg-white text-black rounded-lg shadow-lg w-full mt-2 max-h-60 overflow-y-auto absolute z-10">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="cursor-pointer p-2 hover:bg-gray-200"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
      <Button 
        width={buttonWidth} 
        height={buttonHeight} 
        variant="search" // Use the search variant
        fontType={buttonFontType} // Apply fontType
        onClick={handleSearch}
      >
        Zoeken
      </Button>
    </div>
  );
};

export default SearchBar;
