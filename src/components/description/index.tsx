import styled from 'styled-components'
import { useState } from 'react';
import React from 'react';
import {
    selectCardById,
    useAppSelector,
    RootState,
    CardDataArrayType,
    selectCardArray,
    editCard,
    useAppDispatch,
}   from '../../';

interface Props{
    cardId: string;
}


function Description(props:Props){
    const dispatch = useAppDispatch();
    const card = useAppSelector((state:RootState)=> selectCardById(state, props.cardId))[0];
    const [editDescriptionFlag, setEditDescriptionFlag] = useState<boolean>(false);
    const editDescriptionInputRef = React.useRef<HTMLInputElement>(null);

    function innerEditDescriptionFunction(){
        if(!editDescriptionInputRef.current?.value.trim()) return;
        dispatch(editCard({id: props.cardId, description: editDescriptionInputRef.current.value}));
        // props.editDescription(props.cardId, editDescriptionInputRef.current.value);
        setEditDescriptionFlag(false);
    }
    console.log(card);
    return(
        <>
            {
                editDescriptionFlag === false ? 
                <ExternalWrapper onClick={()=>{
                    setEditDescriptionFlag(!editDescriptionFlag);
                    
                }}>
                
                    <DescriptionText>
                        {card.description}
                    </DescriptionText>
                </ExternalWrapper>
                :
                <EditDescriptionForm onSubmit={(e:any)=>{
                    e.preventDefault();
                    innerEditDescriptionFunction();
                }}>
                    <EditDescriptionInput defaultValue={card.description} ref={editDescriptionInputRef} />
                </EditDescriptionForm>
            }
        </>
    )
}

const EditDescriptionForm = styled.form`
    position: relative;
    width: 100%;
`
const EditDescriptionInput = styled.input`
    border: none;
    outline: none;
    font-size: 18px;
    width: 100%;
    position: relative;
    word-wrap: break-word;
    background-color: #f2f4f7;
    padding: 15px 0px 15px 30px;
    margin-bottom: 30px;
    border-radius: 5px;
`

const ExternalWrapper = styled.div`
    background-color: #f2f4f7;
    cursor: pointer;
    :hover{
        opacity: 0.5;
        transition: 0.5s;
    }
    width: 100%;
    position: relative;
    padding: 15px 0px 15px 30px;
    margin-bottom: 30px;
    border-radius: 5px;
`

const DescriptionText = styled.p`
    font-size: 18px;
    width: 300px;
    word-wrap: break-word;
`

export default Description;
