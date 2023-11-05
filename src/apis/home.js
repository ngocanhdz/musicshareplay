import axios from '../axios'

export const getHome = async () =>  {
   let response = await axios({
    url: '/home',
    method:'get',
   })
   return response;
}