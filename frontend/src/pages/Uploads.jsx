import { useUploadedQuery } from "../services/user"
import { useNavigate } from "react-router-dom";
const Uploads = () => {
    const logOut=async()=>{
        const ff=await axios.get('http://localhost:5000/game/logout',{withCredentials:true});
          console.log(data);
      }
    const navigate=useNavigate();
    const {data,isFetching,error}=useUploadedQuery();
    if(isFetching){
        return <div className="text-center">Loading...</div>
    }
    else if(error){
        if(error.data.message==='TokenExpired'){
            alert('Session expired redirecting to login page');logOut()
            navigate('/login');
        }else{
        console.log(error)}
    }
    console.log(data);
  return (
    <div className="font-mono rounded-md shadow-md m-3">
        <div className="text-center m-2">Uploaded Question</div>
        <div className="">
        {data?.map((ele,index)=>{
            return <div className="p-2">
                    <div>{index+1}: {ele.question}</div>
                    <div><span className="font-bold">answer:</span> {ele.ans} <span className="font-bold">difficulty:</span> {ele.difficulty} <span className="font-bold">language:{ele.language} </span></div>
                    <ul>
                {ele.options.map((elee,ind)=>{
                    return<li key={ind}>
                        <label>
                        {ind+1}: {elee}
                        </label>
                    </li>
                })}
                </ul><button className="rounded p-2 bg-blue-600 hover:bg-blue-800"
                    onClick={(e)=>{
                        e.preventDefault();
                        navigate("/form",{state:{ele}})
                    }}
                >Edit</button>
            </div>
        })}<div className="text-center">OOPS No Data...</div>
    </div>
    </div>
  )
}

export default Uploads