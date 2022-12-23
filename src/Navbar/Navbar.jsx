import React from 'react';
import asset2 from '../Images/assetlogo.png'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
 



export default function Navbar(props) {
  console.log(props.isLogin);
  let navigate=useNavigate()
  function Logout(){
    props.setLogin(false);
    navigate('/Login')
    localStorage.removeItem('token')
  }

  return (
    <>
   <nav className="navbar navbar-expand-lg navbar-dark bggnavi">
  <div className="container-fluid">
    <Link className="navbar-brand" to="home" ><img src={asset2} alt="" className='img-logo' /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {!props.isLogin?<>
        <li className="nav-item">
          <Link className="nav-link" to="Register">Register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="login">Login</Link>
        </li>
        </>
        :''}
      
      {props.isLogin?<>
        <li className="nav-item">
          <Link className="nav-link" to="Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="All">All</Link>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Platforms 
          </Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="Platforms/pc">Pc</Link></li>
            <li><Link class="dropdown-item" to="Platforms/browser">browser</Link></li>
           
          </ul>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Sort-by
          </Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="Sortby/release-date">release-date</Link></li>
            <li><Link class="dropdown-item" to="Sortby/popularity">popularity</Link></li>
            <li><Link class="dropdown-item" to="Sortby/alphabetical">alphabetical</Link></li>
            <li><Link class="dropdown-item" to="Sortby/relevance">relevance</Link></li>
           
          </ul>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="Cate/racing">racing</Link></li>
            <li><Link class="dropdown-item" to="Cate/sports">sports</Link></li>
            <li><Link class="dropdown-item" to="Cate/social">social</Link></li>
            <li><Link class="dropdown-item" to="Cate/shooter">shooter</Link></li>
            <li><Link class="dropdown-item" to="Cate/open-world">open-world</Link></li>
            <li><Link class="dropdown-item" to="Cate/zombie">zombie</Link></li>
            <li><Link class="dropdown-item" to="Cate/fantasy">fantasy</Link></li>
            <li><Link class="dropdown-item" to="Cate/action-rpg">action-rpg</Link></li>
            <li><Link class="dropdown-item" to="Cate/action">action</Link></li>
            <li><Link class="dropdown-item" to="Cate/flight">flight</Link></li>
            <li><Link class="dropdown-item" to="Cate/battle-royale">battle-royale</Link></li>

           
          </ul>
        </li>
      



      </> 
      :''}
      
      
       
      </ul>
{props.isLogin ? <> 
          <button className='btn btn-outline-info float-left' onClick={Logout}>Logout</button>
       </> : ''}

    </div>
  </div>
</nav>
    
    </>
  )
}
