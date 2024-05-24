import React from "react";

interface CardProps {
  title: string;
  description: string;
  buttonText: string;
  customStyles?: string;
  category: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  buttonText,
  customStyles,
  category,
}) => {
  return (
    <div className={`bg-[#f4eeea] shadow-lg rounded-xl p-6 flex flex-col flex-grow ${customStyles}`}>
      <h3 className="font-montserrat text-xl mb-4">{title}</h3>
      <p className="font-montserrat text-base mb-4 card-description">{description}</p>
      <div className="mt-auto">
        <p className="text-sm text-gray-700 mb-4">{category}</p>
        {buttonText && (
          <button className="bg-primary text-black rounded-full py-2 px-4 mt-2 hover:bg-black hover:text-white transition duration-300">
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
