import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Scoreboard = () => {
  const [language,setL]=useState("All");
  const [difficulty,setD]=useState(0);
  const [arr,setA]=useState([]);
  const logOut=async()=>{
    const ff=await axios.get('http://localhost:5000/game/logout',{withCredentials:true});
      console.log(data);
  }
  const getScore=async()=>{
    //getting user's info and storing in arr useState..
    try{
      const data=await axios.get('http://localhost:5000/game/board',{withCredentials:true});
      console.log(data);
      setA(data.data);
    }
    catch(err){
      console.log(err);
    }
  }
  useEffect(()=>{
    getScore();
  },[]);
  //useing language and difficulty is filter the data of users coming from backend
  useEffect(()=>{
    console.log(language,difficulty);
    const data=[...arr];
    if(data&&data.length>0){
      const another=[];
      //Using simple iteration calculate the total again with respect to language and difficulty
      for(let i=0;i<data.length;i++){
        const score=data[i]?.score;
        let total=0;
        if(score&&score.length>0){
          if(difficulty==0&&language=='All'){
            
            for(let j=0;j<score.length;j++){
              total+=score[j].marks;
            }
            another.push({email:data[i].email,name:data[i].name,total,score:data[i].score||[]});
          }else{
          for(let j=0;j<score.length;j++){
            if(score[j].language===language||score[j].difficulty==difficulty){
              total+=score[j].marks
            }
          }another.push({email:data[i].email,name:data[i].name,total,score:data[i].score});
        }}
        else{another.push({email:data[i].email,name:data[i].name,total:0,score:[]});}
      }
      //Sort the array in desc order..
      another.sort((a,b)=>(b.total-a.total))
      console.log('sorted',another);
      setA(another);console.log(another);
    }
  },[difficulty,language])
  return (
    <div className="flex flex-col">
      <div className='text-center text-lg font-bold mt-3'>Score Board</div>
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div className='text-center text-lg font-mono'>Sort of language and difficulty</div>
        <label className="block text-sm font-semibold text-gray-800">Select language</label>
            <select  className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" 
                onChange={(e)=>{setL(e.target.value)}}
                value={language}
            >
                <option value="All">All</option>
                <option value="english">english</option>
                <option value="hindi">hindi</option>
                <option value="spanish">spanish</option>
                <option value="french">french</option>
                <option value="japaness">japaness</option>
            </select>
            <label className="block text-sm font-semibold text-gray-800">Select difficulty</label>
            <select  className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                onChange={(e)=>{setD(e.target.value)}}
                value={difficulty}
            >
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">#</th>
                  <th scope="col" className="px-6 py-4">Name</th>
                  <th scope="col" className="px-6 py-4">Email</th>
                  <th scope="col" className="px-6 py-4">Score</th>
                </tr>
              </thead>
              <tbody>
                {arr.length>0?arr?.map((ele,index)=>{
                  return <tr className="border-b dark:border-neutral-500" key={index}>
                  <td className="whitespace-nowrap px-6 py-4 font-medium">{index+1}</td>
                  <td className="whitespace-nowrap px-6 py-4">{ele.name}</td>
                  <td className="whitespace-nowrap px-6 py-4">{ele.email}</td>
                  <td className="whitespace-nowrap px-6 py-4">{ele.total}</td>
                </tr>
                }):""}
              </tbody>
            </table>
            <div className='text-center'>No Record Left...</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Scoreboard