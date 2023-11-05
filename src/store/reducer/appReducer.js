import actionTypes from "../action/actionTypes";

const initState = {
  banner:[],//khi reload tro ve mang rong neu ko dung redux persist luu local

}

const appReducer = (state = initState,action)=> {
    switch (action.type) {
        case actionTypes.GET_HOME:
            
            return {
                ...state,
                banner: action.homeData?.find(item => item.sectionType === 'banner')?.items || null,// loc ra xem cai item nao cua mang .sectiontype co gia tri la banner
            }
        
        default:
            return state
    }
}

export default appReducer