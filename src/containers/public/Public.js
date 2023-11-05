import React from "react";

import { Outlet } from "react-router-dom";
import { SideBarLeft,SideBarRight } from "../../components/index";
import {Player} from "../../components/index";
// 2 sidebar o public vi public la router nested nen se luon hien sidebar
// chia 2 sidebar va noi dung thanh chieu doc
// w-full chieu rong 100%, flex khien 3 thanh phan nam ngang voi nhau
// do flex nen chinh cung chieu rong cua 2 sidebar thi se tu chinh outlet flex-none xet cung flex-auto se lay khoang con lai
// over-flow-auto la thiet lap chieu cao cua trang khi qua dong se auto keo dai trang
//flex flex-col chỉnh các thẻ con theo chiều dọc và tùy chỉnh vị trí dễ dàng
const Public= ()=>{
    return (
        <div className="w-full flex flex-col bg-[#CED9D9] min-h-screen">
           <div className="flex w-full h-full flex-auto">
           <div className="w-[240px] flex-none border-red-300 border-2 ">
            <SideBarLeft/>
           </div>
           <div className="flex-auto border-2 border-red-300">
           <Outlet/>
           </div>
           
            <div className="w-[329px]  flex-none border-red-300 border-2">
            <SideBarRight/>
           </div>
           </div>
           <div className="h-[90px] flex-none flex">
            <Player/>
           </div>
        </div>
    )
 }

 export default Public;