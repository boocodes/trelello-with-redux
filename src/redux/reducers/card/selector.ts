import { RootState } from "../../store";
import {CardDataArrayType} from '../../../';


export function selectCardById(state:RootState, cardId: string){    
    return state.card.cardArray.filter((card:CardDataArrayType)=>{
        return card.id === cardId
    })
}

export function selectCardArray(state:RootState){
    return (
        state.card.cardArray
    );
}