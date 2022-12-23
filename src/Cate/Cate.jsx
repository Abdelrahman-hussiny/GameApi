import React from 'react'
import axios from 'axios'
import { useParams  } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import {Link} from 'react-router-dom'

export default function Sortby() {
    function addMore(){

        let plus = 8
        setadd(plus= add+8)
    
      }
      let [add , setadd] =useState(20);
      let {Catee} = useParams('Catee')
      const [gameData , setGame] = useState([]);
      let [idError ,setError] = useState('');



    async function caTe(){
        let {data} = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games`, {
            params:{category:Catee},
            headers:{
                'X-RapidAPI-Key': '4998af725cmsh6f9f9f80bad9fb5p1beca5jsnb4ac2eaac9ae',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        }).catch(error=>{
            setError(error.response.status)
          })
          console.log(data)
          setGame(data)

    }

    useEffect(()=>{
    caTe()
    },[Catee])
  return (
    <div>
    <div className='bgg py-3'>
    <div className='container'>
      <div className='row g-2 '>
        {gameData.slice(0,add).map((game)=>{return <div className='col-md-3'>
          <div className='bg text-center text-white p-1 rounded-3 '>

            <Link to={`/Game/${game.id}/${game.title}`}><img src={game.thumbnail} alt=""  className='w-100'/></Link>

            
            <div className='card-box py-2 mb-1'>
              <div className='row g-1'>
                <div className='float-start'> 
                  <h5 className=' fs-6 float-start'>{game.title.split('').slice(0,28).join('')}</h5>
                  <span className='badge bg-info  text-dark float-end '>Free</span>
                </div>
                <div className=''>
                  <p>{game.short_description.split('').slice(0,30).join('')}...</p>
                </div>
              <div className='fs-6 fw-1 float-end'>
              <span className='float-start px-2'><i class="fa-solid fa-square-plus text-info"></i></span>
              <div className='float-end'>
                <span className='badge bg-info text-dark m-2 '>{game.genre}</span>
              <span>{game.platform ? <i class="fa-brands fa-windows text-info"></i>  : ''}</span>
              </div>
            </div>
            
             </div>
            </div>
          </div>
        </div>
      
      })}
      
        <div className='mt-2 mb-2 p-2 d-flex justify-content-center'>
          <button  className='btn btn-outline-secondary' onClick={addMore} >More Games + </button>
        </div>

        

      </div>

    </div>
    </div>
      
    </div>
  )
}
