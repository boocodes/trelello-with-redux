import {CommentDataArrayType} from '../../../';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';


interface CommentInterface{
    commentArray: CommentDataArrayType[];
}

const initialState:CommentInterface = {
    commentArray: [],
}

interface IAddComment{
    id: string;
    cardId: string;
    title: string;
    author: string;
}

export const commentReducer = createSlice({
    name: 'comment',
    initialState,
    reducers: {
        addComment: (state, {payload}:PayloadAction<IAddComment>) =>{
            let newComment = {
                id: payload.id,
                cardId: payload.cardId,
                title: payload.title,
                author: payload.author,
            }
            state.commentArray.push(newComment);
        },
    }
})

export const {addComment} = commentReducer.actions;
export default commentReducer.reducer;