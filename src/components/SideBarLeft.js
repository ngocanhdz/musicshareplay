import React from 'react'
import {sidebarMenu} from '../ultis/menu';
import { NavLink } from 'react-router-dom';
const SideBarLeft = () => {
  //w-full la chen het sidebar o phan public nha
  //NavLink kiểm soát link ở navbar dễ dàng hơn
  // dung isActive nho de trong ngoac
  const notActive ='flex gap-[12px] items-center text-[13px] text-[#3232D] py-2 px-[25px] font-bold'
  const active = 'flex gap-[12px] items-center text-[13px] text-[#0F7070] py-2 px-[25px] font-bold' //NAVLINK Con tra ve bien active hay ko active
  return (
    <div className='flex flex-col bg-[DDE4E4]'>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 justify-center items-center flex w-full h-[70px] py-[15px] px-[25px]">
        NALH MP3
      </div>
      <div className='flex flex-col'>
        
        {sidebarMenu.map(item => {
          return <NavLink
          to={item.path}
          className={({isActive})=> isActive ? active : notActive}
          >
            
            {item.icons}
            <span>{item.text}</span>
            
            
          </NavLink>
        })}
      </div>
    </div>
  )
}

export default SideBarLeft
