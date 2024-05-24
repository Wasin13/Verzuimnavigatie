import React from "react";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Button from "@/components/Button";

interface ButtonStyleProps {
  text: string;
  margin?: string;
  iconSize?: FontAwesomeIconProps['size'];
  buttonWidth?: string;
  buttonHeight?: string;
  backgroundColor?: string; // Add backgroundColor prop
}

const ButtonStyle: React.FC<ButtonStyleProps> = ({
  text,
  margin,
  iconSize = '1x',
  buttonWidth = '50px',
  buttonHeight = '25px',
  backgroundColor = 'darkblue', // Set default backgroundColor
}) => {
  return (
    <li className="flex items-center">
      <Button
        width={buttonWidth}
        height={buttonHeight}
        backgroundColor={backgroundColor}
        textColor="white"
        borderColor={backgroundColor}
        margin={margin || "0 12px 0 0"}
      >
        <FontAwesomeIcon icon={faArrowRight} size={iconSize} />
      </Button>
      {text}
    </li>
  );
};

export default ButtonStyle;
