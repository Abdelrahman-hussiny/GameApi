import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {useState, useEffect} from 'react';

export default function Home() {


let [gameData ,setGames] = useState([]);


  async function getHome(){

    let {data} = await axios.get('https://free-to-play-games-database.p.rapidapi.com/api/games',{
      headers: {'X-RapidAPI-Key': 
      'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'},
      params : {
        id : 523
      }
    

    })
    console.log(data);
    setGames(data);

  }

  useEffect(()=>{
    getHome()
  },[]);





  return (
   <>
   <div className='overflow-hidden bggnavi'>
   <div className=" text-center">
    <div className='row'>
      <div className='col-md-12'>
      <div className='home-bg' >
      <div className='text-box'>
        <h2>Find & track the best <span className='text-info'>free-to-play</span> games!</h2>
        <p>Track what you have played and search for what to play next! Plus get free premium loot!</p>
        <Link className="nav-link" to="/all" > <button className='btn btn-outline-secondary '>browse Games</button></Link>
      </div>
      </div>
      </div>
    </div>
   </div>
   <div className='container'>
    <h3 className='mt-3 text-white mb-3' ><i className="fa-solid fa-robot"></i> Personalized Recommendations</h3>
   <div className="row ">
      {gameData.slice(4,10).map((id)=>{return <div className=' cc col-md-4 m-auto '>
       <div className=' text-center text-white p-1 rounded-3 '>
       <Link to={`/Game/${id.id}/${id.title}`}><img src={id.thumbnail} alt="" className='w-100' /></Link>
       <div className='py-3 mb-2'>
        <h5 className='float-start'>{id.title}</h5>
        <span className='badge bg-info float-end text-dark'>Free</span>
       </div>
        
       </div>
      </div> })}
   </div>
   </div>

   </div>
   </>
  )
}
