import { useNavigate } from 'react-router-dom'
import bgPic from '../assets/bg.png'
import { Link } from 'react-router-dom'
export default function Login(){
const navigate=useNavigate()
    const handleSubmit=(e:React.FormEvent)=>{
e.preventDefault()
navigate('/dashboard')
}
    return (
        <div className='flex md:flex-row-reverse flex-col gap-20 justify-center items-center  '>
<div className='md:block hidden'>
    <img src={bgPic} alt="bg" className="object-cover "/>
</div>
<form onSubmit={handleSubmit} className="flex flex-col justify-center h-screen  md:w-[32%] w-[80%]  p-8  ">
<span>
    <h1 className="text-3xl font-semibold mb-10 ">Login</h1>
</span>
  <label className="text-sm text-gray-500 font-medium " htmlFor="username">
    Email Address
  </label>
  <input
    type="text"
    id="username"
    name="username"
    
    className="w-full p-2 mt-2 outline-none border-[1px]  rounded border-gray-300  mb-4"
  />

  <label className="text-gray-500 text-sm font-semibold" htmlFor="password">
    Password
  </label>
  <input
    type="password"
    id="password"
    name="password"
    
    className="w-full outline-none mt-2 border-[1px] rounded p-2 border-gray-300  "
  />

  <div className="flex flex-col space-y-4  mt-4">
    <button
      type="submit"
      className="bg-[#242526] text-white p-2  rounded  hover:bg-black transition duration-300"
    >
      CONTINUE
    </button>

    {/* <button
      type="button"
      className="border-gray-200 text-[#242526] rounded border-[1px] p-2  hover:bg-gray-100 transition duration-300"
    >
    
    </button> */}

    <span className='flex flex-col gap-2'>
<h2 className='text-sm'>By continuing with Google, Apple, or Email, you agree to our 
   {''} <span className='text-[#202020] underline'>Terms of Service</span> and <span className='text-[#202020] underline'>Privacy Policy.</span></h2>

<h2 className='text-center text-[#202020] '>Don't have an account? <Link to='/signup' className='underline'>Sign up</Link></h2>
    </span>
  </div>
</form>

        </div>
    )
}