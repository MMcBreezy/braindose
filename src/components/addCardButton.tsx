// AddCardButton.tsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { createCard } from '../helpers/cardSlice';

const AddCardButton = () => {
  const dispatch = useDispatch();

  const handleAddCard = () => {
    // Here we are using Date.now() as an ID just for simplicity. 
    // In a real application, you should probably use a more reliable way to generate unique IDs.
    const newCard = {
      id: Date.now(),
      title: 'enter title here',
      information: 'enter information here'
    };
    
    dispatch(createCard(newCard));
  };

  return <button className="button" onClick={handleAddCard}>+</button>;
};

export default AddCardButton;
