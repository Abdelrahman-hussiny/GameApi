// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import {createBrowserRouter , RouterProvider} from 'react-router-dom';
// import Navbar from './Navbar/Navbar';
import  Login from './Login/Login';
import Layout from './Layout/Layout';
import Regiter from './Register/Regiter';
import Game from './Game/Game';
import Home from './Home/Home';
import All from './All/All';
import Sortby from './Sortby/Sortby'
import Cate from './Cate/Cate';
import Platforms from './Platforms/Platforms';
import Protected from './Protected/Protected';
import jwtDecode from 'jwt-decode';



function App() {




  let[isLogin ,setLogin]=useState(false);


  const routes = createBrowserRouter([
    {path:'/',element:<Layout isLogin={isLogin} setLogin={setLogin}/> , children:[
      {index:true ,element:<Regiter/>},
      {path:'login', element:<Login setLogin={setLogin}/>},
      {path:'Game/:gameId/:gameName', element: <Protected><Game/></Protected> },
      {path:'Register',element:<Regiter/>},
      {path:'Home',element:<Protected><Home/></Protected>},
      {path:'All',element:<Protected><All/></Protected>},
      {path:'Platforms/:Platforms' , element:<Protected><Platforms/></Protected>},
      {path:'Sortby/:SortBy' , element: <Protected><Sortby/></Protected>},
      {path:'Cate/:Catee' , element: <Protected><Cate/></Protected>},
      {path:'*',element: <Regiter/> }
      ]}
   ])

   useEffect(()=>{
  localStorage.getItem('');
  if(localStorage.getItem('token')){
    let token =localStorage.getItem('token')
    let userData = jwtDecode(token);
    setLogin(true)
    console.log(userData)

  }
},[isLogin])

  return (
    <>
    <RouterProvider router={routes}/>
    </>
  );

  
}

export default App;
