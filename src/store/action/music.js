import actionTypes from "./actionTypes";
import { getHome } from "../../apis/home";

export const setCurSongId = (sid) => ({
    type: actionTypes.SET_CUR_SONG_ID,
    sid
})