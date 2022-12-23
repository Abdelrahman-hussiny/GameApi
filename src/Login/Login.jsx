import React from 'react';


import asset3 from '../Images/8565.jpg'
import asset4 from '../Images/assetlogo.png'
import {Link} from 'react-router-dom';
import ost from '../Images/ost2.mp3'
import { useState,} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Joi from 'joi';



export default function Login(props) {
    const [user,setUser] = useState({
 
        email:"",
        password:"",

        
        });

 const[apiMsg , setMsg] = useState('')

const[errorData , setErrors] = useState([]);
let navigateTo = useNavigate();

let myUser = {...user};






    async function Login(){

        if(validateUser()){
            let {data} = await axios.post(`https://sticky-note-fe.vercel.app/signin` , user);
            console.log(data)
          if(data.errors !== undefined){
              setMsg(data.errors.email.message)
          }else{
              setMsg(data.message)
              if(data.message ==='success'){
                navigateTo('/Home')
                localStorage.setItem('token', data.token)
                props.setLogin('true')

              }
          }
            
        }else{
            setErrors([])
            errorData([])
    
        }
     
    }



    function validateUser(){
        let rules = Joi.object({
        // first_name:Joi.string().alphanum().min(5).max(15).required(),
        // last_name:Joi.string().alphanum().min(5).max(15).required(),
        email:Joi.string().email({minDomainSegments:2 ,tlds:{allow:['com' , 'net'] }}).required(),
        password:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
        // age:Joi.number().min(15).max(50).required(),
        })
    
    
        let validationResults = rules.validate(user ,{abortEarly:false});
        console.log(validationResults);
        if(validationResults.error !==undefined){
            setErrors(validationResults.error.details.message);
            return false
        }else{
            setErrors([]);
            return true;
        }
    }
    

















  return (
    <>
    <div className='container  mt-5 vh-100 '>
        <div className='row  shadow-lg '>
            <div className='d-flex justify-content-between  '>
            <div className='col-md-6 loggi'>
                <div>
                    <img src={asset3} alt=""  className='h-50 '/>
                </div>
                
                
            </div>
            <div className='col-md-6 bg'>
                <div >
                    <div className='text-center'>
                        <img src={asset4} alt="" className='w-25 ' />
                        <h5 className='text-white'>Login to <span className='text-danger'>Origin</span></h5>
                    </div>
                        
                    <form action="" className='p-3 '  onSubmit={(e)=>{e.preventDefault();Login();}}>
                        <input type="text" onChange={(e)=>{myUser.email=e.target.value;setUser(myUser); }} className='form-control w-100 mb-2 bg-dark text-light' placeholder='Email'/>
                        <input type="password" onChange={(e)=>{myUser.password=e.target.value;setUser(myUser); }} className='form-control w-100 mb-2 bg-dark text-light ' placeholder='Password'/>
                        <button className='btn text-white border border-1  w-100'>Login</button>
                        <div>
                        <h5 className='text-danger'>{apiMsg}</h5>
                        <span className='d-flex justify-content-center text'>Not a member yet ? <Link class=" text-info"  to="/Register"> Create Account </Link></span>
                        </div>
                        <audio src={ost}  autoPlay loop type='audio/mpeg'></audio>
                        
                    </form>
                </div>

            </div>
            
            </div>
        </div>
    </div>
    </>
  )
}
