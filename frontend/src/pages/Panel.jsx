import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { useGetQuesMutation } from '../services/ques';
import axios from 'axios';
const Panel = () => {
  const [getQues,ff]=useGetQuesMutation();
  const navigate=useNavigate();
  const [difficulty,setD]=useState(1);
  const [language,setL]=useState("english")
  return (
    <div className='m-5 font-mono'>
      <div className='text-center text-2xl'>Start Test</div>
      <div className='bg-white rounded-md shadow-md m-2'>
      <div>
      <div>
      <h6>Difficulty</h6>
      <select  className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
        onChange={(e)=>{setD(e.target.value)}}
      >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
      </select></div>
      <div>
      <h6>Language</h6>
      <select  className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" 
          onChange={(e)=>{setL(e.target.value)}}  
          >
                <option value="english">english</option>
                <option value="hindi">hindi</option>
                <option value="spanish">spanish</option>
                <option value="french">french</option>
                <option value="japaness">japaness</option>
      </select></div>
      </div>
      <div className='text-center mt-3 '><button className='rounded bg-blue-700 hover:bg-blue-800 pt-2 pb-2 pl-5 pr-5 text-white'
        onClick={async(e)=>{
          e.preventDefault();
          const val={language,difficulty};
          try{
            const data=await getQues(val).unwrap();
            if(data.message==='Not eligible'){
              setD(1);
              alert('Your are not eligible for this difficulty please attend low difficulty quiz first and score passing marks in it');
              
            }
            else{
            navigate('/test',{state:{data}})}
          }catch(err){
            if(err.data.message==='TokenExpired'){
              alert('Session expired you need to login again');
              const ff=await axios.get('http://localhost:5000/game/logout',{withCredentials:true});
              navigate("/login");
            }
            else{console.log("panel",err)}
          }
        }}
      >Start</button></div>
      </div>
    </div>
  )
}
export default Panel