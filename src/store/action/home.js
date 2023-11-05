import actionTypes from "./actionTypes";
import { getHome } from "../../apis/home";

export const home = () => async (dispatch) => {
    let response = await getHome();
    dispatch({
        type: actionTypes.GET_HOME,
        homeData: response.data.data.items,
    })
}