import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

export default function Layout(props) {
  return (
    <>
    <div className=' bgg'>
    <Navbar isLogin={props.isLogin} setLogin={props.setLogin}/>
    <Outlet/>
    </div>
    

  
    </>
    
  )
}
