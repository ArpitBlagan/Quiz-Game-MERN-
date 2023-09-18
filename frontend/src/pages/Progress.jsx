import { useProgressQuery } from "../services/user"
import axios from "axios";
const Progress = () => {
    const logOut=async()=>{
        const ff=await axios.get('http://localhost:5000/game/logout',{withCredentials:true});
          console.log(data);
      }
    const {data,isFetching}=useProgressQuery();
    if(isFetching){
        return <div className="text-center">Loading...</div>
    }
    else if(data.message==='TokenExpired'){
        alert('Session expired you need to login again');
        logOut()
        navigate("/login");
    }
      console.log(data);
  return (
    <div className="rounded-md shadow-md font-mono text-lg m-5">
        <div className="text-center p-2"><span className="mr-5">{data.name} ({data.email})</span>
            <button className="pl-3 pr-3 rounded bg-blue-600 hover:bg-blue-900"
               onClick={async(e)=>{
                e.preventDefault();
                if(data.score.length===0){
                    alert('done');
                }else{
                try{
                const data=await axios.get('http://localhost:5000/game/reset',{withCredentials:true});
                console.log(data);
                window.location.reload();
              }catch(err){
                console.log(err);
              }
               }}}
            >Reset Record</button>
        </div>
        <div className="m-3">
        <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">#</th>
                  <th scope="col" className="px-6 py-4">Language</th>
                  <th scope="col" className="px-6 py-4">Difficulty</th>
                  <th scope="col" className="px-6 py-4">Score</th>
                </tr>
              </thead><tbody>
            {data.score.map((ele,index)=>{
                return <tr className="border-b dark:border-neutral-500" key={index}>
                  <td className="whitespace-nowrap px-6 py-4 font-medium">{index+1}</td>
                  <td className="whitespace-nowrap px-6 py-4">{ele.language}</td>
                  <td className="whitespace-nowrap px-6 py-4">{ele.difficulty}</td>
                  <td className="whitespace-nowrap px-6 py-4">{ele.marks}</td>
                </tr>
            })}
            </tbody>
        </table>
            <div className="text-center">No Record Left...</div>
        </div>
    </div>
  )
}
export default Progress