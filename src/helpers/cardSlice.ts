// cardSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Card } from './types'; // Your Card type

interface CardState {
  cards: Card[];
  activeCardIndex: number;
}

const initialState: CardState = {
  cards: [],
  activeCardIndex: 0,
};

export const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    incrementActiveCard: (state) => {
      state.activeCardIndex += 1;
    },
    decrementActiveCard: (state) => {
      state.activeCardIndex -= 1;
    },
    createCard: (state, action: PayloadAction<Card>) => {
      state.cards.push(action.payload);
    },
    // other reducers...
  },
});

export const { incrementActiveCard, decrementActiveCard, createCard } = cardSlice.actions;

export default cardSlice.reducer;
