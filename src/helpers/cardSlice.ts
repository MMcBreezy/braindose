// cardSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Card } from "./types"; // Your Card type

interface CardState {
  cards: Card[];
  activeCardIndex: number;
}

const initialState: CardState = {
  cards: [],
  activeCardIndex: 0,
};

export const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    incrementActiveCard: (state) => {
      state.activeCardIndex += 1;
    },
    decrementActiveCard: (state) => {
      state.activeCardIndex -= 1;
    },
    createCard: (state) => {
      const newCard = {
        id: state.cards.length, // or you could use a different logic to generate unique ids
        title: "Enter title here",
        information: "Enter information here",
      };
      state.cards.push(newCard);
    },
    updateCardTitle: (
      state,
      action: PayloadAction<{ id: number; title: string }>
    ) => {
      const cardIndex = state.cards.findIndex(
        (card) => card.id === action.payload.id
      );
      if (cardIndex >= 0) {
        state.cards[cardIndex].title = action.payload.title;
      }
    },
    updateCardInformation: (
      state,
      action: PayloadAction<{ id: number; information: string }>
    ) => {
      const cardIndex = state.cards.findIndex(
        (card) => card.id === action.payload.id
      );
      if (cardIndex >= 0) {
        state.cards[cardIndex].information = action.payload.information;
      }
    },
    // other reducers...
  },
});

export const {
  incrementActiveCard,
  decrementActiveCard,
  createCard,
  updateCardTitle,
  updateCardInformation,
} = cardSlice.actions;

export default cardSlice.reducer;
