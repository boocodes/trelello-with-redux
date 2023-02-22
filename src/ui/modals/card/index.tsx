import { useState } from "react";
import styled from "styled-components";
import {CommentDataArrayType, 
        CommentList, 
        Description,
        useAppDispatch, 
        RootState,
        editCard,
        addComment,
        selectUsername,
        useAppSelector,
        selectCommentArray,
    } from '../../../';
import React from 'react';


interface Props{
    title: string;
    id: string;
    columnId: string;
    changeCardModalFlag: (flag:boolean) => void;
}

function CardModal(props:Props){

    const dispatch = useAppDispatch();
    const username = useAppSelector(selectUsername);
    console.log(username);
    const addCommentInputRef = React.useRef<HTMLInputElement>(null);
    const [editCardTitleFlag, setEditCardTitleFlag] = useState<boolean>(false);
    const editCardTitleInputRef = React.useRef<HTMLInputElement>(null);
    const commentArray = useAppSelector(selectCommentArray);


    function editCardFunction(){
        if(!editCardTitleInputRef.current?.value.trim()) return;
        dispatch(editCard({id: props.id, title: editCardTitleInputRef.current.value}));
    }
    function addCommentFunction(){
        if(!addCommentInputRef.current?.value.trim()) return;
        dispatch(addComment({id: Math.random().toString(), author: username, title: addCommentInputRef.current.value, cardId: props.id}));
    }

    return(
        <>
            <Overlay onClick={()=>{
                props.changeCardModalFlag(false)
            }}/>
            <ExternalWrapper>
                <CardTitleText>Card</CardTitleText>
                <CardTitleInnerWrapper>
                   
                    {
                        editCardTitleFlag === true ? 
                            <EditCardTitleForm onSubmit={(event: any)=>{
                                event.preventDefault();
                                editCardFunction();
                            }}>
                                <EditCardTitleInput ref={editCardTitleInputRef} defaultValue={props.title}/> 
                            </EditCardTitleForm>
                            
                            : 
                            <CardTitle>{props.title}</CardTitle>
                    }
                    {
                        editCardTitleFlag === true ? 
                            <SubmitEditCardTitleImage onClick={()=>{
                                setEditCardTitleFlag(false);
                                editCardFunction();
                            }} src={"./images/okIcon.png"}/>
                            :
                            <EditCardTitleIconImage onClick={()=>{
                                setEditCardTitleFlag(true);
                            }} src="./images/editIcon.png"/>
                    }    
                </CardTitleInnerWrapper>
                <Description cardId={props.id}/>
                <CommentWrapper>
                    <CommentList cardId={props.id}/>
                    <AddCommentForm onSubmit={(event: any)=>{
                        event.preventDefault();
                        addCommentFunction();
                    }}>
                        <AddCommentInput ref={addCommentInputRef} placeholder="text"/>
                        <AddCommentButton>Send</AddCommentButton>
                    </AddCommentForm>
                </CommentWrapper>
                <CloseModalButton onClick={()=>{
                    props.changeCardModalFlag(false);
                }}>Close</CloseModalButton>
            </ExternalWrapper>
            
        
        </>
    )
}

 

const AddCommentForm = styled.form`
    flex-direction: column;
    display: flex; 
    align-items: flex-start;
    margin-top: 30px;
    
`

const AddCommentInput = styled.input`
    font-size: 20px;
    padding: 10px 0px 10px 20px;
    border-radius: 5px;
    outline: none;
    border: 1px solid gray;
`

const AddCommentButton = styled.button`
    font-size: 18px;
    margin-top: 20px;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    border: none;
    :hover{
        opacity: 0.5;
        transition: 0.5s;
    }
`

const EditCardTitleForm = styled.form`

`

const SubmitEditCardTitleImage = styled.img`
    width: 25px;
    height: 25px;
    cursor: pointer;
    margin-bottom: 20px;
`

const EditCardTitleInput = styled.input`
    border: none;
    font-size: 24px;
    padding: 10px 0px;
    outline: none;
    max-width: 250px;
    margin-bottom: 20px;
`

const CommentWrapper = styled.div`
    position: relative;
    width: 100%;
`


const EditCardTitleIconImage = styled.img`
    width: 25px;
    height: 25px;
    margin-left: 30px;
    cursor: pointer;
    :hover{
        opacity: 0.5;
        transition: 0.5s;
    }
    margin-bottom: 20px;
`
const CardTitleInnerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 68%;
`

const Overlay = styled.div`
    position: absolute;
    width: 100vw;
    top: 0;
    left: 0;
    opacity: 0.5;
    height: 100vh;
    z-index: 3;
    background-color: black;
    cursor: pointer;
`

const CardTitle = styled.p`
    font-size: 24px;
    opacity: 0.5;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 250px;
    word-wrap: break-word;
    margin-bottom: 30px;
`


const ExternalWrapper = styled.div`
    padding: 30px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    z-index: 3;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    width: 500px;
    height: 600px;
    padding-bottom: 50px;
    font-family: Roboto;
    border-radius: 20px;
    overflow: scroll;
`

const CloseModalButton = styled.button`
    font-size: 18px;
    padding: 10px 15px;
    border: none;
    background-color: #ff004c;
    color: white;
    position: relative;
    
    border-radius: 5px;
    cursor: pointer;
    margin-top: 30px;
    :hover{
        opacity: 0.5;
        transition: 0.5s;
    }
`

const CardTitleText = styled.p`
    font-size: 24px;
    margin-bottom: 20px;
`

export default CardModal;