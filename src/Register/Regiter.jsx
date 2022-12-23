import React from 'react'

import asset3 from '../Images/8565.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { useState,} from 'react';
import axios from 'axios';
import Joi from 'joi';
import ost2 from '../Images/ost.mp3'




export default function Regiter() {

const [user,setUser] = useState({
first_name:"",
last_name:"",
email:"",
password:"",
age:"",

});

const[apiMsg , setMsg] = useState('')

let navigateTo = useNavigate();

const[errorData , setErrors] = useState([]);

let myUser = {...user};
// console.log(user)


async function register(){

    if(validateUser()){
        let {data} = await axios.post(`https://sticky-note-fe.vercel.app/signup` , user);
        console.log(data)
        if(data.errors !== undefined){
            setMsg(data.errors.email.message)
        }else{
            setMsg(data.message)
        }


        if(data.message === 'success'){
            
            navigateTo('/Login');
        }
      
        
    }else{
        setErrors([])

    }
 
}


function validateUser(){
    let rules = Joi.object({
    first_name:Joi.string().alphanum().min(5).max(15).required(),
    last_name:Joi.string().alphanum().min(5).max(15).required(),
    email:Joi.string().email({minDomainSegments:2 ,tlds:{allow:['com' , 'net'] }}).required(),
    password:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    age:Joi.number().min(15).max(50).required(),
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
     <>

     {errorData.map((error) => {return (error)= <h6 className='text-danger fs-3'>{error.details.message}</h6> })};
    <div className='container  mt-5 vh-100 '>
        <div className='row  shadow-lg '>
            
            
            <div className='d-flex justify-content-between col-md-12'>
            <div className='col-md-6 loggi'>
                <div>
                    <img src={asset3} alt=""  className='h-50 '/>
                </div>
                
            </div>
            <div className='col-md-6 bg'>
                <div >
                    <div className='text-center py-2'>
                        <h4 className='text-white'>Create my account </h4>
                    </div>    
                 
                    <form action="" className='p-3 ' onSubmit={(e)=>{
                        e.preventDefault();
                        register();
                    }}>
                        <div className='d-flex justify-content-between mt-1 mb-2'>
                        <input type="text" onChange={(e)=>{myUser.first_name=e.target.value;setUser(myUser); }} className='form-control w-50 bg-dark text-white' placeholder='First Name' />
                        <input type="text" onChange={(e)=>{myUser.last_name=e.target.value;setUser(myUser); }} className='form-control w-50 bg-dark text-white' placeholder='Last Name' />
                        </div>
                        
                        <input type="text" onChange={(e)=>{myUser.email=e.target.value;setUser(myUser); }} className='form-control w-100 mb-2 bg-dark text-white' placeholder='Email'/>
                        <input type="text" onChange={(e)=>{myUser.age=e.target.value;setUser(myUser); }} className='form-control w-100 mb-2 bg-dark text-white' placeholder='age' maxLength={2}/>
                        <input type="password" onChange={(e)=>{myUser.password=e.target.value;setUser(myUser); }} className='form-control w-100 mb-2 bg-dark text-white' placeholder='Password'/>
                        <button className='btn text-white border border-1  w-100' >Create account</button> 
                        <h5 className='text-danger'>{apiMsg}</h5>
                        <div className='text'>
                            <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                            <br/><span className='d-flex justify-content-center'>Already a member? <Link class=" text-info"  to="/login"> Login </Link></span></p>
                            <audio src={ost2} autoPlay></audio>
                            
                        </div>
                       
                    </form>
                </div>

               

            </div>
            </div>
        </div>
    </div>
    </></>
  )
}
