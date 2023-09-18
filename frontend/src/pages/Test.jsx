import {useState} from 'react'
import { useNavigate,useLocation} from 'react-router-dom';
import { useCheckMutation } from '../services/ques';
const Test = () => {
    const [check,ff]=useCheckMutation();
    const [answers,setA]=useState([]);
    const navigate=useNavigate();
    const location=useLocation();
    const val=location.state;
    if(!val){navigate("/");return;}
    console.log(val.data);
    const handleA=(index,ind,elee,ele)=>{
        const arr=[...answers];
        arr[index]={ans:elee,in:ind,id:ele._id}
        setA(arr);
    }
  return (
    <div className='m-3'>
        {val?.data?.map((ele,index)=>{
            return <div className='rounded-md shadow-md' key={index}>
                <div>{index+1}. {ele.question}</div>
                <ul>
                {ele.options.map((elee,ind)=>{
                    return<li key={ind}>
                        <label>
                        <input
                            type="radio"
                            value={ind}
                            checked={answers[index]?.in === ind}
                            onChange={() => handleA(index,ind,elee,ele)}
                        />
                        {elee}
                        </label>
                    </li>
                })}
                </ul>
            </div>
        })}
        <div className='text-center mt-2'><button className='rounded pl-4 pr-4 pt-2 pb-2 bg-blue-600 hover:bg-blue-900'
            onClick={async(e)=>{
                e.preventDefault();
                console.log('clicked')
                const vv={language:val?.data[0].language,difficulty:val?.data[0].difficulty,answers};
                try{
                    console.log(vv);
                    const data=await check(vv).unwrap();
                    if(data.message==='TokenExpired'){
                        alert('Session expired you need to login again');
                        const ff=await axios.get('http://localhost:5000/game/logout',{withCredentials:true});
                        console.log(data);
                        navigate("/login");
                    }else{
                    console.log(data); navigate('/progress')}
                }
                catch(err){
                    console.log(err);
                }
            }}
        >Submit</button></div>
    </div>
  )
}

export default Test