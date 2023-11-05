import React from 'react'
import { useSelector } from 'react-redux'
import { useEffect,useState, useRef } from 'react';
import {getDetailSong, getSong} from '../apis/music';
import icons from '../ultis/icon';


const Player = () => {
  const {AiFillHeart,AiOutlineHeart,BsThreeDots,BsChatDots,CiRepeat,CiShuffle,CiPause1,CiPlay1,MdSkipNext,MdSkipPrevious} = icons;
  const {curSongId} = useSelector(state => state.music);
  const [songInfo,setSongInfo] = useState(null);
  const [source,setSource] = useState(null);
  const audioElement = useRef(new Audio());
  const [isPlaying,setIsPlaying] = useState(false);
  useEffect(()=>{//useeffect ko cho dung bat dong bo
    const apixDetailSong = async()=>{
      const response1 = await getDetailSong(curSongId);
      const response2 = await getSong(curSongId);
      console.log(response2);
      if(response1.data.err===0){
        setSongInfo(response1.data.data);
      }
      if(response2.data.err===0){
        setSource(response2.data.data['128']);
      }
    }
    apixDetailSong();
  },[curSongId])// chi xet su thay doi cua curSongId de lap lai useEffect
  // obj cover giup anh tran o da chi dinh
  useEffect(()=>{
    audioElement.current.src = source;
    setIsPlaying(false)
  },[curSongId,source]);

  const handeButtonPlay = ()=>{
    if(isPlaying){
      audioElement.current.pause()
      setIsPlaying(false);
    }
    else{
      audioElement.current.play();
      setIsPlaying(true);
    }
  }
  return (
    <div className='flex w-full'>
      <div className='w-[30%] flex flex-auto items-center justify-center border-red-300 border-2'>
        <img src={songInfo?.thumbnail} alt="anh mini" className='h-16 w-16 object-cover rounded-md '/>
        <div className='flex-col flex pl-4'>
          <span className='font-semibold text-[14px]'>{songInfo?.title}</span>
          <span className='font-normal text-[12px]'>{songInfo?.artistsNames}</span>
        </div>
        <div className='pl-3 flex gap-2'>
        <AiOutlineHeart size={16}></AiOutlineHeart>
        <BsThreeDots size={16}></BsThreeDots>
        <BsChatDots size={16}></BsChatDots>
        </div>
      </div>
      <div className='w-[40%]  flex flex-auto items-center flex-col justify-center border-red-300 border-2'>
        <div className='flex gap-4 justify-center items-center'>
        <span className='cursor-pointer' title='bật phát ngẫu nhiên'><CiShuffle size={24}></CiShuffle></span>
        <span className='cursor-pointer'><MdSkipPrevious size={24}></MdSkipPrevious></span>
        <span className='cursor-pointer p-2 border border-purple-700 rounded-full hover:text-emerald-400'
        onClick={handeButtonPlay}
        
        >{isPlaying? <CiPause1 size={30}/>: <CiPlay1 size={30}/>}</span>
        <span className='cursor-pointer'><MdSkipNext size={24}></MdSkipNext></span>
        <span className='cursor-pointer' title='bật phát lại tất cả'><CiRepeat size={24}></CiRepeat></span>
        </div>
        <div>
          prograss
        </div>

        </div>
      <div className='w-[30%] flex flex-auto items-center justify-center border-red-300 border-2'>âm lượng</div>
    </div>
    
  )
}

export default Player
