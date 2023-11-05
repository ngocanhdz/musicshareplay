
import React, {useEffect} from "react";
import {Header,Slider} from '../../components';
import { getHome } from "../../apis/home";

 const Home = ()=>{
    return (
        <div className="overflow-y-auto">
            <div className="">
                <Header/> 
                <Slider/>
            </div>
        </div>
    )
 }

 export default Home;