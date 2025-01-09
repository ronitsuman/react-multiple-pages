import React, { useState } from 'react'

const Counter = () => {
    const[count , setCount] = useState(0)


  return (
    <div className='flex flex-col items-center gap-5 border-2 border-blue-500 p-4 ' >
        <h1 className='text-5xl text-blue-500 capitalize '>Changes in ui creating a event  </h1>

        <button className=' px-4 py-2 border-2 capitalize text-lg border-black ' onClick={()=>{setCount(count+1)}}> Click to add</button>
        <h1 className='border-4 p-6 text-2xl '>{count}</h1>
        <button  className='border-2 px-4 py-2 capitalize border-black'onClick={()=>{
            setCount(count-1)
        }} > click to substract the element </button>
    </div>
  )
}

export default Counter