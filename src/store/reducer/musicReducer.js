import actionTypes from "../action/actionTypes";

const initState = {
  curSongId:null,//khi reload tro ve mang rong neu ko dung redux persist luu local

}

const musicReducer = (state = initState,action)=> {
    switch (action.type) {
        
            case actionTypes.SET_CUR_SONG_ID: 
            return{
              ...state,
              curSongId: action.sid || null
            }
            
        
        default:
            return state
    }
}

export default musicReducer