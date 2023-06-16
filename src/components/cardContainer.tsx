// CardContainer.tsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./card";
import AddCardButton from "./addCardButton";
import { RootState, AppDispatch } from "../helpers/store";
import { incrementActiveCard, decrementActiveCard } from "../helpers/cardSlice";

const CardContainer = () => {
  const { cards, activeCardIndex } = useSelector(
    (state: RootState) => state.cards
  );
  const dispatch = useDispatch<AppDispatch>();

  const handleNextCard = () => {
    dispatch(incrementActiveCard());
  };

  const handlePrevCard = () => {
    dispatch(decrementActiveCard());
  };

  return (
    <div className="card-container">
      <AddCardButton />
      {cards.length > 0 ? (
        <>
          <Card
            id={cards[activeCardIndex].id}
            title={cards[activeCardIndex].title}
            information={cards[activeCardIndex].information}
          />
          <div className="card-navigation">
            <button
              className="button"
              onClick={handlePrevCard}
              disabled={activeCardIndex === 0}
            >
              Prev
            </button>
            <span>
              {activeCardIndex + 1} of {cards.length}
            </span>
            <button
              className="button"
              onClick={handleNextCard}
              disabled={activeCardIndex === cards.length - 1}
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <p>Add a card!</p>
      )}
    </div>
  );
};

export default CardContainer;
