// types.ts
export interface Card {
    id: number;
    title: string;
    information: string;
  }
  
  interface CardState {
    cards: Card[];
    activeCardIndex: number;
  }
  
  export type RootState = {
    cardReducer: CardState;
  };
  