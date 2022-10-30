import { createSlice } from '@reduxjs/toolkit';

const initialState = {'789': {id:'789', front: 'front of card', back: 'back of card',}};

export const cardsSlice = createSlice({
    name:'cards',
    initialState,
    reducers: {
        addCard(cards, action) {
            cards[action.payload.id] = action.payload;
        }
    }
});


export const selectCards = (state) => {
    return state.cards;
}

export const { addCard } = cardsSlice.actions;