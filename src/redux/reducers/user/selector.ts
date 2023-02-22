import { RootState } from "../../store";

export function selectUsername(state:RootState){
    return(
        state.user.username
    );
}