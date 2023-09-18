import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios'
const Navbar = () => {
  const navigate=useNavigate();
  const [val,setV]=useState("");
  useEffect(()=>{
    setV(Cookies.get('id'));
    console.log(val);
  });
  return (
    <div className='font-mono font-bold m-0 flex sm:flex-row xs:flex-row  flex-col bg-gray-800 text-white h-25 '>
        <div className='flex flex-col  justify-center mr-5'>
        <div className='md:flex lg:flex xs:flex sm:flex'>
        <img className='w-10 h-10 mr-2' src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/d3f61c9084571.560c8af3a63c4.gif"/>
        <div className='mt-2 cursor-pointer'><Link to="/">LanguageLearner</Link></div></div>
        </div>
        <div className='flex-1 flex flex-col justify-center cursor-pointer'><Link to="/board">Scoreboard</Link></div>
        {val=="ok"?<div>
        <div className='mt-2 cursor-pointer mr-3'
          onClick={(e)=>{
            e.preventDefault();
            navigate("/progress");
          }}
        >My Progress</div>
        <div className='flex flex-col justify-center cursor-pointer mr-2'
          onClick={async(e)=>{
            e.preventDefault();
              try{
                const data=await axios.get('http://localhost:5000/game/logout',{withCredentials:true});
                console.log(data);
                alert('You are logged out');
                navigate("/login");
              }catch(err){
                console.log(err);
              }
          }}
        >Logout</div></div>:<div className='flex flex-col justify-center cursor-pointer'><Link to="/login">Login/Register</Link></div>}
    </div>
  )
}
export default Navbar