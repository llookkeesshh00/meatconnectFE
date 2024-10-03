import React from 'react'
import { useState } from 'react'
const Login = () => {
  const [email, setemail] = useState()
  const handleChange=()=>{
     


      }
  const handleSubmit=()=>{
     
  

      }


  return (
    <div className=''>
    <div className="container shadow-xl bg-purple-400  max-w-md m-2 p-3 rounded-lg ">
         <h1 className='text-2xl'> Login to get Started</h1>
        <form action="" method="post" className='flex flex-col text-start gap-2'>
          <span>UserName</span>
          <input type="text" name='username' onChange={handleChange()} />
          <span>Passoword</span>
          <input type="text" name='password' onChange={handleChange()} />
          <button  className='mt-8 mb-8 bg-purple-600 hover:bg-slate-50 ' onClick={handleSubmit}>Login</button>
        
        </form>
      </div>
    </div>
  )
}

export default Login
