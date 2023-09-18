import {useState} from 'react'
import { Link } from 'react-router-dom';
import {useLoginMutation} from '../services/user'
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [login,ff]=useLoginMutation();
    const [email,setE]=useState("");
    const [password,setP]=useState("");
    const navigate=useNavigate();
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
    <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-blue-700 underline">
           Log in
        </h1>
        <form className="mt-6">
            <div className="mb-2">
                <label
                    className="block text-sm font-semibold text-gray-800"
                >
                    Email
                </label>
                <input
                    type="email"
                    required
                    className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    value={email}
                    onChange={(e)=>{setE(e.target.value)}}
                />
            </div>
            <div className="mb-2">
                <label
                    className="block text-sm font-semibold text-gray-800"
                >
                    Password
                </label>
                <input
                    type="password"
                    required
                    className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    value={password}
                    onChange={(e)=>{setP(e.target.value)}}
                />
            </div>
            <div className="mt-6">
                <button className="w-full px-4 py-2 tracking-wide text-white    bg-blue-700 rounded-md hover:bg-blue-900"
                    onClick={async(e)=>{
                        e.preventDefault();
                        if(email,password){
                            const val={
                                email,password
                            }
                        try{
                            const data=await login(val).unwrap();
                            console.log(data.id,data.admin);
                            navigate("/");
                        }catch(err){
                            setE("");setP("");
                            alert('something went wrong please try again later')
                            console.log(err);
                        }}else{
                            alert('all fields required');
                        }
                    }}
                >
                    Login
                </button>
            </div>
        </form>
        <div className='text-center text-gray-500'>
            {" "}
            Don't have an account?{" "}
        <Link to="/register" className="font-medium text-gray-600 hover:underline">
            Register
        </Link></div>
    </div>
</div>
  )
}

export default Login