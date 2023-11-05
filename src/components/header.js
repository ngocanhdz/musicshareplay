import React from 'react'
import icons from '../ultis/icon'

const {AiOutlineArrowLeft,AiOutlineArrowRight,BsSearchHeart} = icons;
const Header = () => {
  return (
    <div className='w-full h-[70px] bg-green-300 px-[59px] flex items-center justify-between'>
      
      <div className='flex gap-6 w-full'>
      <div className='flex text-gray-400 gap-6 items-center'>
        <span><AiOutlineArrowLeft size={24}/></span>
        <span><AiOutlineArrowRight size={24}/></span>
      </div>
      <div className='w-1/2 flex items-center bg-[#DDE4E4] rounded-[20px] text-gray-500'>
        <span className='h-10 pl-4 flex items-center justify-center'><BsSearchHeart size={24}/></span>
        <input
        type = 'text'
        className='outline-none px-4 bg-[#DDE4E4] py-2 rounded-[20px] h-10 w-full text-gray-500'
        placeholder='SEARCH'
        >
        
        </input>
      </div>
      </div>
      <div className='flex-auto'>
        dang nhap
      </div>
    </div>
  )
}

export default Header
