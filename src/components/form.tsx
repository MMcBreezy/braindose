import React, { useState, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { updateCard } from "./actions"; // Import your action

interface FormProps {
    cardId: number;
  }

const Form: React.FC<FormProps> = ({ cardId }) => {
  const [title, setTitle] = useState("");
  const [information, setInformation] = useState("");
  const dispatch = useDispatch();

  const handleTitleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Dispatch title
    dispatch(updateCard({ cardId, title }));
    setTitle("");
  };

  const handleInformationSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Dispatch information
    dispatch(updateCard({ cardId, information }));
    setInformation("");
  };

  return (
    <>
      <form onSubmit={handleTitleSubmit}>
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add Title</button>
      </form>
      
      <form onSubmit={handleInformationSubmit}>
        <input
          type="text"
          placeholder="Enter Information"
          value={information}
          onChange={(e) => setInformation(e.target.value)}
        />
        <button type="submit">Add Information</button>
      </form>
    </>
  );
};

export default Form;
