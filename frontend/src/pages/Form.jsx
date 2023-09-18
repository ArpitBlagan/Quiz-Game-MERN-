import { useEffect, useState } from "react"
import { useUploadMutation } from "../services/ques";
import { useLocation,useNavigate } from "react-router-dom";
import { useUpateMutation } from "../services/ques";
const Form = () => {
    const navigate=useNavigate()
    const [update,xx]=useUpateMutation();
    const location=useLocation();
    const values=location.state;
    const [upload,ff]=useUploadMutation();
    const [question,setQ]=useState("");
    const [difficulty,setD]=useState(1);
    const [language,setL]=useState("english");
    const [options,setO]=useState([""]);
    const [ans,setA]=useState("");
    useEffect(()=>{
        if(values?.data?._id){
            const ff=values.data;
            setQ(ff.question);
            setD(ff.difficulty);
            setL(ff.language);
            setA(ff.ans);
            setO(ff.options);
        }
    },[])
    const removeO=(index)=>{
        const arr=[...options];
        arr.splice(index,1);
        setO(arr);
    }
    const handleO=(e,index)=>{
        const arr=[...options];
        arr[index]=e.target.value;
        setO(arr);
    }
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
    <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-blue-700 underline">
           {values&&values.data._id?"Update the question":"As admin you can upload questions"}
        </h1>
        <form className="mt-6">
        <div className="mb-2">
                <label
                    className="block text-sm font-semibold text-gray-800"
                >
                    Question statment
                </label>
                <textarea
                    row={3}
                    className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    value={question}
                    onChange={(e)=>{setQ(e.target.value)}}
                />
            </div>
            <div className='mb-2 '>
                <label className="block text-sm font-semibold text-gray-800">Answer</label>
                <input 
                    value={ans}
                    onChange={(e)=>{setA(e.target.value)}}
                    className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
            </div>
            <div className='mb-2 '>
            <label className="block text-sm font-semibold text-gray-800">Select difficulty</label>
            <select  className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                onChange={(e)=>{setD(e.target.value)}}
                value={difficulty}
            >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
            <label className="block text-sm font-semibold text-gray-800">Select language</label>
            <select  className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" 
                onChange={(e)=>{setL(e.target.value)}}
                value={language}
            >
                <option value="english">english</option>
                <option value="hindi">hindi</option>
                <option value="spanish">spanish</option>
                <option value="french">french</option>
                <option value="japaness">japaness</option>
            </select>
            </div>
            <div className="mb-2">
            <div className="flex justify-between">
                <lable className="block text-sm font-semibold text-gray-800">Options for the question</lable>
                <button className=' rounded bg-blue-500 hover:bg-blue-800 p-3'
                    onClick={(e)=>{e.preventDefault();setO([...options,""])}}
                >Add+</button></div>
            </div>
            {options.map((ele,index)=>{
                return <div key={index}><label
                    className="block text-sm font-semibold text-gray-800"
                >Options {index+1}
                </label><div className="flex">
                <input  className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                 placeholder='enter option' value={ele} onChange={(e)=>{
                    e.preventDefault(); handleO(e,index);
                 }}
                />
                <button className=' rounded bg-blue-500 hover:bg-blue-800 p-3'
                    onClick={(e)=>{e.preventDefault();removeO(index)}}
                >Remove</button></div>
                </div>
            })}
            <div className="mt-6">
            {values&&values.data._id?<button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    onClick={async(e)=>{
                        e.preventDefault();
                        if(!language||!difficulty||!question||!options){
                            alert("all fields required")
                        }else{
                          try{
                             const val={
                                id:values.data._id,
                                language,difficulty,question,options,ans
                             }
                             const data=await update(val).unwrap();
                             if(data.message==='TokenExpired'){
                                alert('Session expired you need to login again');
                                const ff=await axios.get('http://localhost:5000/game/logout',{withCredentials:true});
                                console.log(data);
                                navigate("/login");
                            }else{
                             console.log(data);alert('updated');navigate("/uploads")
                             setO([]);setQ("");setD(1);setL('english');setA('');
                             console.log("cool");}
                          }catch(err){
                            console.log(err);
                          }
                        }
                    }}
                >
                    Update
                </button>:
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    onClick={async(e)=>{
                        e.preventDefault();
                        if(!language||!difficulty||!question||!options){
                            alert("all fields required")
                        }else{
                          try{
                             const val={
                                language,difficulty,question,options,ans
                             }
                             const data=await upload(val).unwrap();
                             if(data.message==='TokenExpired'){
                                alert('Session expired you need to login again');
                                const ff=await axios.get('http://localhost:5000/game/logout',{withCredentials:true});
                                console.log(data);
                                navigate("/login");
                            }else{
                             console.log(data);alert('uploaded');
                             setO([]);setQ("");setD(1);setL('english');setA('');}
                          }catch(err){
                            console.log(err);
                          }
                        }
                    }}
                >
                    Submit
                </button>}
            </div>
        </form>
    </div>
</div>
  )
}

export default Form