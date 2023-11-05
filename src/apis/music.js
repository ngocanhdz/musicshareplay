import axios from '../axios'

export const getDetailSong = async (sid) =>  {
   let response = await axios({
    url: '/songinfo',
    method:'get',
    params: {id: sid},
   })
   return response;
}
export const getSong = async (sid) =>  {
    let response = await axios({
     url: '/song',
     method:'get',
     params: {id: sid},
    })
    return response;
 }