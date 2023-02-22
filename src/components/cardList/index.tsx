import styled from "styled-components";
import {CardDataArrayType, 
    Card, 
    CommentDataArrayType,
    RootState,
    selectCardArray,
    useAppSelector,
    
} from '../../';
import { useState } from "react";


interface Props{
    columnId: string;
}


function CardList(props:Props){

    const cardArray = useAppSelector(selectCardArray);


    
    return(
        <ExternalWrapper>
            {cardArray.map((elem:CardDataArrayType)=>{
                if(props.columnId === elem.columnId){
                    return(
                        <Card 
                            title={elem.title} 
                            id={elem.id} 
                            columnId={elem.columnId}/>
                    )
                }
                    
                    
                
            })}
        
        </ExternalWrapper>
    )
}

const ExternalWrapper = styled.div`
    display: flex;
    flex-direction: column;
`


export default CardList;