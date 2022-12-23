import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
// import { Link } from 'react-router-dom'
import abc from '../Images/wp6968022.jpg'




export default function Game() {
  let {gameId} = useParams();
  const [gameData,setGame]=useState([]);
  let[idError ,setIdError] = useState('');
  async function getGame(){

    let { data } = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/game`, {
      params: { id: gameId },
      headers: {
        'X-RapidAPI-Key': '4998af725cmsh6f9f9f80bad9fb5p1beca5jsnb4ac2eaac9ae',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    })
    .catch(error=>{
      setIdError(error.response.status)
    })
    console.log(data)
    setGame(data);
    
    
  };




  useEffect(()=>{
    getGame(gameId)
  },[]);
  
  

  return (
    
    <div className='bgss' style={gameData.screenshots ? {backgroundImage :`linear-gradient(90deg, rgba(48,12,9,0.927608543417367) 0%, rgba(128,13,13,0.8911939775910365) 35%, rgba(70,25,25,0.735171568627451) 67%, rgba(67,45,89,0.8668242296918768) 100%),url(${gameData.screenshots[0].image})`} :  {backgroundImage : `url(${gameData.thumbnail})`}  }>
      <div className='container' >
        <div className='row'>
           <div className='cc col-md-4 text-white mt-2 mb-2 '>
            <img src={gameData.thumbnail} alt="" className='w-100' />
            <button className='btn btn-dark px-3'>Free</button>
            <a href={gameData.game_url} target='_blank'><button className='btn btn-info text-white m-1 px-5 w-75 '>Play now <i className="fa-solid fa-right-from-bracket"></i></button></a>
           
            </div> 
            <div className='col-md-8 texto'>
              <h2>{gameData.title}</h2>
              <h5>About{gameData.title}</h5>
              <p>{gameData.description}</p>
              
              
              
              
              <br />
              <h4>Minimum System Requirements</h4>
              {gameData.minimum_system_requirements ?
              <>
                <h6>
                <ul>
                <li>graphics:{gameData.minimum_system_requirements.graphics}</li>
                <li>memory :{gameData.minimum_system_requirements.memory}</li>
                <li>OS :{gameData.minimum_system_requirements.os}</li>
                <li>processor :{gameData.minimum_system_requirements.processor}</li>
                <li>Storage :{gameData.minimum_system_requirements.storage}</li>
               </ul>
               </h6>
               </>
               :null

              }
            
              
              
              <br />
              <h3>{gameData.title} screenshots</h3>
              <br />

  {gameData.screenshots ? <div id="carouselExampleFade" class="carousel slide carousel-fade mb-5" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      
      <a href={gameData.screenshots[0].image} target='_blank'><img src={gameData.screenshots[0].image}  class="d-block " alt="..."/></a>
    </div>
    <div class="carousel-item">
    <a href={gameData.screenshots[1].image} target='_blank'><img src={gameData.screenshots[1].image}  class="d-block " alt="..."/></a>
    </div>
    <div class="carousel-item">
    <a href={gameData.screenshots[2].image} target='_blank'><img src={gameData.screenshots[2].image}  class="d-block " alt="..."/></a>
    </div>
   
  </div>
  <div className='buttons'>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
  <i class="fa-solid fa-angles-left fs-2 texto"></i>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
  <i class="fa-solid fa-angles-right fs-2 texto"></i>
    <span class="visually-hidden">Next</span>
  </button>
  </div>
  
</div> :null }




            </div>
        </div>
      </div>
    </div>
  )
}
























              // <h6>
              // <ul>
              // <li>graphics:{gameData.minimum_system_requirements.graphics}</li>
              // <li>memory :{gameData.minimum_system_requirements.memory}</li>
              // <li>OS :{gameData.minimum_system_requirements.os}</li>
              // <li>processor :{gameData.minimum_system_requirements.processor}</li>
              // <li>Storage :{gameData.minimum_system_requirements.storage}</li>
              // </ul>
              // </h6>
              // className='bgss ' style={{backgroundImage : `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${gameData.thumbnail})`}}