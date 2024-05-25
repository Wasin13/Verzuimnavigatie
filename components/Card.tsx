// components/Card.tsx
import React from "react";
import Button from "@/components/Button";

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
          category === "Artikelen" ? (
            <Button
              href="/artikelen"
              buttonStyle="btn--primary"
              buttonSize="btn--medium"
            >
              {buttonText}
            </Button>
          ) : (
            <Button
              buttonStyle="btn--primary"
              buttonSize="btn--medium"
              width="auto"
              height="auto"
              backgroundColor="primary"
              textColor="black"
              borderColor="primary"
              margin="0"
            >
              {buttonText}
            </Button>
          )
        )}
      </div>
    </div>
  );
};

export default Card;
