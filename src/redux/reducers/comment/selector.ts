import { RootState } from "../../store";
import {CommentDataArrayType} from '../../../';


export function selectCommentById(state:RootState, commentId: string){
    state.comment.commentArray.map((comment: CommentDataArrayType)=>{
        if(comment.id === commentId){
            return comment;
        }
    })
}


    

export function selectCommentArray(state:RootState){
    return(
        state.comment.commentArray
    );
}