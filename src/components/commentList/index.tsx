import styled from "styled-components";
import {CommentDataArrayType, 
        Comment,
        useAppSelector,
        selectCommentArray,
} from '../../';


interface Props{
    cardId: string;
}


function CommentList(props:Props){

    const commentArray = useAppSelector(selectCommentArray);

    return(
        <>
            <ExternalWrapper>
                
                {commentArray.map((elem:CommentDataArrayType)=>{
                        if(elem.cardId === props.cardId){
                            return(
                                <Comment key={Math.random().toString()} cardId={props.cardId} commentDataObject={elem}/>
                            )
                        }
                })}
            </ExternalWrapper>
        
        </>
    )
}

const ExternalWrapper = styled.div`
    background-color: #f2f4f7;
    padding: 15px 30px;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    
`


export default CommentList;