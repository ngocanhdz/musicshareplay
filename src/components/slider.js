import React,{useEffect} from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { setCurSongId } from '../store/action/music'

const   Slider = () => {
  const { banner } = useSelector(state => state.app)
  const dispatch = useDispatch();
  const handleClickBanner = (item)=>{
    if(item.type === 1){
      dispatch(setCurSongId(item.encodeId));
    }
  }
  return (
    <div  className='flex overflow-hidden gap-2 w-full'>
      {banner.map(item => (
        <img
        key={item.encodeId}
        src={item.banner}
        onClick={()=> handleClickBanner(item)}
        className='slider-item flex-1 object-contain rounded-lg w-[32.5%]'
        />
      ))}
    </div>
  )
}

export default Slider;
