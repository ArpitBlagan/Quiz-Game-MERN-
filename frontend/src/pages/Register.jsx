import {useState} from 'react'
import { Link } from 'react-router-dom';
import { useRegisterMutation } from '../services/user';
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const navigate=useNavigate();
    const [register,ff]=useRegisterMutation();
    const [email,setE]=useState("");
    const [password,setP]=useState("");
    const [name,setN]=useState("");
    const [isCheck,setC]=useState(false);
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
    <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-blue-700 underline">
           Register
        </h1>
        <form className="mt-6">
        <div className="mb-2">
                <label
                    className="block text-sm font-semibold text-gray-800"
                >
                    Name
                </label>
                <input
                    type="name"
                    className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    value={name}
                    onChange={(e)=>{setN(e.target.value)}}
                    required
                />
            </div>
            <div className="mb-2">
                <label
                    className="block text-sm font-semibold text-gray-800"
                >
                    Email
                </label>
                <input
                    type="email"
                    className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    value={email}
                    onChange={(e)=>{setE(e.target.value)}}
                    required
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
                    className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    value={password}
                    onChange={(e)=>{setP(e.target.value)}}
                    required
                />
            </div>
            <div className="mb-2">
            <label
                    className="text-sm font-semibold text-gray-800 mr-3"
                >
                    As a Admin
                </label>
                <input
                    type="checkbox"
                    checked={isCheck}
                    onChange={(e)=>{setC(e.target.checked)}}
                />
            </div>
            <div className="mt-6">
                <button className="w-full px-4 py-2 tracking-wide text-white  bg-blue-700 rounded-md hover:bg-blue-900"
                    onClick={async(e)=>{
                        e.preventDefault();
                        if(name,email,password){
                        const val={
                            name,email,password,isAdmin:isCheck
                        }
                            try{
                                const data=await register(val).unwrap();
                                console.log(data);
                                navigate("/login");
                            }catch(err){
                                console.log(err);
                            }
                        }else{
                            alert('all fields required');
                        }

                    }}
                >
                    Register
                </button>
            </div>
        </form>
        <div className='text-center text-gray-500'>
            {" "}
            Don't have an account?{" "}
        <Link to="/login" className="font-medium text-gray-600 hover:underline">
            Login
        </Link></div>
    </div>
</div>
  )
}

export default Register