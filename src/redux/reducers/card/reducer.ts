import {CardDataArrayType} from '../../../';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';


interface ColumnInterface{
    cardArray: CardDataArrayType[];
}

const initialState:ColumnInterface = {
    cardArray: [],
}


interface IAddCardAction{
    id: string;
    columnId: string;
    title: string;
    description: string;
}

interface IEditCard{
    id: string;
    title?: string;
    description?: string;
}

export const cardReducer = createSlice({
    name: 'card',
    initialState,
    reducers: {
        editCard: (state, {payload}:PayloadAction<IEditCard>) =>{
            state.cardArray.map((card:CardDataArrayType)=>{
                if(card.id === payload.id){
                    card.title = payload.title || card.title;
                    card.description = payload.description || card.description;
                }
            })
        },
        addCard: (state, {payload}:PayloadAction<IAddCardAction>) =>{
            let newCard = {
                id: payload.id,
                columnId: payload.columnId,
                title: payload.title,
                description: payload.description,
            }
            state.cardArray.push(newCard);
        },

    }
})

export const {addCard, editCard} = cardReducer.actions;
export default cardReducer.reducer;