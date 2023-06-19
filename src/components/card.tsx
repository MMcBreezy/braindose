import React, { useState } from "react";
// import Form from "./form";
import "./styles.css";

interface CardProps {
  id: number;
  title: string;
  information: string;
  onTitleChange: (newTitle: string) => void;
  onInformationChange: (newInformation: string) => void;
}

const Card: React.FC<CardProps> = ({ id, title, information, onTitleChange, onInformationChange }) => {
  return (
    <div className="card">
      <div className="card-content">
        <input
          type="text"
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
        />
        <textarea
          value={information}
          onChange={(e) => onInformationChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Card;
