// AddCardButton.tsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { createCard } from '../helpers/cardSlice';

const AddCardButton = () => {
  const dispatch = useDispatch();

  const handleAddCard = () => {
    dispatch(createCard());
  };

  return <button className="button" onClick={handleAddCard}>+</button>;
};

export default AddCardButton;
