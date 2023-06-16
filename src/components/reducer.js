// reducers.js
import { INCREMENT_ACTIVE_CARD, DECREMENT_ACTIVE_CARD, UPDATE_CARD } from './actions';

const initialState = {
  cards: [
    { id: 1, title: 'Card 1', information: 'Information 1' },
    { id: 2, title: 'Card 2', information: 'Information 2' }
    // more cards...
  ],
  activeCardIndex: 0
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_CARD:
      // Update your card
      return state;
    case INCREMENT_ACTIVE_CARD:
      return {
        ...state,
        activeCardIndex: state.activeCardIndex + 1
      };
    case DECREMENT_ACTIVE_CARD:
      return {
        ...state,
        activeCardIndex: state.activeCardIndex - 1
      };
    default:
      return state;
  }
}

export default reducer;
