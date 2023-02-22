import styled from "styled-components";
import { ColumnDataArrayType, 
        Column, 
        CardDataArrayType, 
        CommentDataArrayType,
        selectColumnArray,
        useAppSelector,
        RootState,
        useAppDispatch,
        addColumn,
    } from "../../";
import React from "react";
import {useState} from 'react';

interface Props{
}

function ColumnList(props:Props){
    const dispatch = useAppDispatch()
    
    const columnArray = useAppSelector(selectColumnArray);
    const columnTitleInputRef = React.useRef<HTMLInputElement>(null);
    const [newColumnInputData, setNewColumnInputData] = useState<string>('')

    function createColumn(){
        if(!columnTitleInputRef.current?.value.trim()) return;
        dispatch(addColumn({id: Math.random().toString(), title: columnTitleInputRef.current.value}))
        columnTitleInputRef.current.value = '';
    }


    return(
        <ExternalWrapper>
            {columnArray.map((elem:ColumnDataArrayType)=>{
                return(
                    <Column 
                        title={elem.title} 
                        id={elem.id} 
                        key={elem.id.toString()}/>
                )
            })} 
            <AddColumnWrapper onSubmit={(event: any)=>{
                event.preventDefault();
                createColumn();
            }} >
                <AddColumnInput ref={columnTitleInputRef} placeholder="column title"/>
                <AddColumnButton onClick={createColumn}>Add column</AddColumnButton>
            </AddColumnWrapper>
        </ExternalWrapper>
    )
}

const ExternalWrapper = styled.div`
    flex-wrap: wrap;
    display: flex;
    margin: 20px 0px 0px 30px;
   
`

const AddColumnWrapper = styled.form`
    height: 150px;
    padding: 15px 30px;
    display: flex;
    flex-direction: column;
    background-color: #f2f4f7;
`

interface AddColumnInputType{
    ref: any;
}

const AddColumnInput = styled.input<AddColumnInputType>`
    padding: 10px 0px 10px 15px;
    outline: none;
    border: none;
    border-radius: 5px;
    margin-bottom: 30px;
`
const AddColumnButton = styled.button`
    border: none;
    padding: 10px 10px;
    border-radius: 5px;
    background-color: #3d9ee3;
    color: white;
    font-family: Robot;
    font-size: 19px;
    cursor: pointer;
    :hover{
        opacity: 0.5;
    }
`


export default ColumnList;