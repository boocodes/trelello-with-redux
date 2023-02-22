import {UserDataType} from '../../../';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';



const initialState:UserDataType = {
    username: '',
}


interface IAddUsername{
    username: string;
}

export const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
       changeUsername: (state, {payload}:PayloadAction<IAddUsername>) =>{
            return {...state, ...payload}
       },
    }
})

export const {changeUsername} = userReducer.actions;
export default userReducer.reducer;