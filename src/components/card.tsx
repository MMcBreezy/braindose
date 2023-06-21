import React from "react";
import "./styles.css";

interface CardProps {
  id: number;
  title: string;
  information: string;
  onTitleChange: (newTitle: string) => void;
  onInformationChange: (newInformation: string) => void;
}

const Card: React.FC<CardProps> = ({
  id,
  title,
  information,
  onTitleChange,
  onInformationChange,
}) => {
  const handleTitleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    if (e.currentTarget.value === "Enter title here") {
      onTitleChange("");
    }
  };

  const handleTitleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.currentTarget.value === "") {
      onTitleChange("Enter title here");
    }
  };

  const handleInformationClick = (e: React.MouseEvent<HTMLTextAreaElement>) => {
    if (e.currentTarget.value === "Enter information here") {
      onInformationChange("");
    }
  };

  const handleInformationBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    if (e.currentTarget.value === "") {
      onInformationChange("Enter information here");
    }
  };

  const calculateFontSize = (text: string) => {
    let baseSize = 20; // This is your base font size
    let maxLength = 50; // This is the maximum length of text at which font size will start reducing
    let minSize = 15;

    if (text.length > maxLength) {
      return `${Math.max(minSize, baseSize - (text.length - maxLength) * 0.1)}px`;    }
    return `${baseSize}px`;
  };


  return (
    <div className="card">
      <div className="card-content">
        <input
          className="title"
          type="text"
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
          onClick={handleTitleClick}
          onBlur={handleTitleBlur}
          style={{ fontSize: calculateFontSize(title) }}
        />
        <textarea
          value={information}
          onChange={(e) => onInformationChange(e.target.value)}
          onClick={handleInformationClick}
          onBlur={handleInformationBlur}
          style={{ fontSize: calculateFontSize(information) }}
        />
      </div>
    </div>
  );
};

export default Card;
