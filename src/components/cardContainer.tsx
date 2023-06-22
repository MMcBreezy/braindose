// CardContainer.tsx
import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./card";
import AddCardButton from "./addCardButton";
import { RootState, AppDispatch } from "../helpers/store";
import "./styles.css";
import {
  incrementActiveCard,
  decrementActiveCard,
  updateCardInformation,
  updateCardTitle,
} from "../helpers/cardSlice";

const CardContainer = () => {
  const { cards, activeCardIndex } = useSelector(
    (state: RootState) => state.cards
  );
  const dispatch = useDispatch<AppDispatch>();

  // Use a ref to store the previous active card index
  const prevActiveCardIndexRef = useRef(activeCardIndex);
  useEffect(() => {
    prevActiveCardIndexRef.current = activeCardIndex;
  });

  // Get the previous active card index from the ref
  const prevActiveCardIndex = prevActiveCardIndexRef.current;

  // Add the "animate" class if the active card index has changed
  const animationClass =
    prevActiveCardIndex !== activeCardIndex ? "animate" : "";

  const handleNextCard = () => {
    dispatch(incrementActiveCard());
  };

  const handlePrevCard = () => {
    dispatch(decrementActiveCard());
  };

  const handleTitleChange = (newTitle: string) => {
    dispatch(
      updateCardTitle({ id: cards[activeCardIndex].id, title: newTitle })
    );
  };

  const handleInformationChange = (newInformation: string) => {
    dispatch(
      updateCardInformation({
        id: cards[activeCardIndex].id,
        information: newInformation,
      })
    );
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
            onTitleChange={handleTitleChange}
            onInformationChange={handleInformationChange}
            className={animationClass}
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
