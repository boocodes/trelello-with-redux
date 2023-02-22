import { RootState } from "../../store";
import {ColumnDataArrayType} from '../../../';


export function selectColumnById(state:RootState, columnId: string){
    return state.column.columnArray.map((column:ColumnDataArrayType)=>{
        if(column.id === columnId){
            return column;
        }
    });
}

export function selectColumnArray(state:RootState){
    return(
        state.column.columnArray
    );
}