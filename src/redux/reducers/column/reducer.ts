import {ColumnDataArrayType} from '../../../';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';


interface ColumnInterface{
    columnArray: ColumnDataArrayType[];
}

const initialState:ColumnInterface = {
    columnArray: [{id: '1', title: 'In progress'}, {id: '2', title: 'Done'}, {id: '3', title: 'Testing'}, {id: '4', title: 'Delay'}],
}

interface IEditColumn{
    id: string;
    title?: string;
}

interface IAddColumn{
    id: string;
    title: string;
}

export const columnReducer = createSlice({
    name: 'column',
    initialState,
    reducers: {
        editColumn: (state, {payload}:PayloadAction<IEditColumn>) =>{
            state.columnArray.map((column:ColumnDataArrayType)=>{
                if(column.id === payload.id){
                    column.title = payload.title || column.title;
                }
            })
        },
        addColumn: (state, {payload}:PayloadAction<IAddColumn>) =>{
            let newColumn = {
                id: payload.id,
                title: payload.title,
            }
            state.columnArray.push(newColumn);
        },

    }
})

export const {editColumn, addColumn} = columnReducer.actions;
export default columnReducer.reducer;