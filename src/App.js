import { useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import {Unic,Home,Public,Login} from './containers/public/Index'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import{Routes,Route} from 'react-router-dom';
import path from "./ultis/path"; // path ko nen thiet lap cung ma nen thay doi duoc
import {home} from "./store/action/home";
import { useEffect } from "react";
function App() {
  // ghi chu dung react-router-dom
  // nested router can boc cac router con 
  // cac router ko phai nested ko can dung / 
  // dung outlet thi no moi hien thi router con neu dung *
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(home());
  },[])
  return (
    <>
    <div>
      <Routes>
        <Route path={path.PUBLIC} element={<Public/>}> 
          <Route path={path.UNIC} element={<Unic/>}/>
          <Route path={path.HOME} element={<Home/>}/>
          <Route path={path.LOGIN} element={<Login/>}/>
        </Route>
      </Routes>
    </div>
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
    </>
    
  );
}

export default App;
