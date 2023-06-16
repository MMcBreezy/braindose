import React from "react";
// import Form from "./form";
import "./styles.css";

interface CardProps {
  id: number;
  title: string;
  information: string;
}

const Card: React.FC<CardProps> = ({ id, title, information }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h2>{title}</h2>
        <p>{information}</p>
      </div>
    </div>
  );
};

export default Card;
