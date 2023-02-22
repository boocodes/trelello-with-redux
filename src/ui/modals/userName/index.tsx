import styled from "styled-components";
import { useRef } from "react";
import React from "react";
import {
    useAppDispatch,
    changeUsername,
}   from '../../../';


interface Props{

}

function UserNameModal(props:Props){
    const dispatch = useAppDispatch();

    const userInputRef = React.useRef<HTMLInputElement>(null);

    function enterUserNameFunction(){
        if(!userInputRef.current?.value.trim()) return;
        dispatch(changeUsername({username: userInputRef.current.value}))
        userInputRef.current.value = "";   
    }

    return(
        <>
            <Overlay/>
            <ExternalWrapper>
                <Text>Enter your name</Text>
                <UserNameInput placeholder="name" ref={userInputRef}/>
                <SubmitButton onClick={enterUserNameFunction}>Submit</SubmitButton>
            </ExternalWrapper>
            
        </>
    )
}

const SubmitButton = styled.button`
    cursor: pointer;
    :hover{
        opacity: 0.5;
        transition: 0.5s;
    }
    font-size: 20px;
    border: none;
    border-radius: 5px;
    padding: 15px 20px;
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
`

const Text = styled.p`
    font-size: 24px;
    margin-bottom: 30px;
`


const ExternalWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 50px 50px;
    flex-direction: column;
    z-index: 3;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    width: 500px;
    height: 500px;
    border-radius: 20px;
`

const UserNameInput = styled.input`
    font-size: 24px;
    padding: 10px 15px;
    margin-bottom: 30px;
    outline: none;
`



export default UserNameModal;