import {ColumnDataArrayType} from '../../../';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';


interface ColumnInterface{
    columnArray: ColumnDataArrayType[];
}

const initialState:ColumnInterface = {
    columnArray: [{id: '1', title: 'In progress'}, {id: '2', title: 'Done'}, {id: '3', title: 'Testing'}, {id: '4', title: 'Delay'}],
}

export const columnReducer = createSlice({
    name: 'column',
    initialState,
    reducers: {
        editColumnTitle: () =>{

        },
        addColumn: () =>{

        },

    }
})

export const {editColumnTitle, addColumn} = columnReducer.actions;
export default columnReducer.reducer;