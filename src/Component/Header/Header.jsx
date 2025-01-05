import React from 'react'

const Header = () => {
    const topic = "Here you Watch The Topic Name when the Tutorial is begin "
    console.log(topic)
  return (
    <div className='flex items-center justify-center flex-col gap-5 '>
        <h1 className='text-2xl'>Welcome In React <span className='text-4xl text-red-400 '>Revision</span> Series   </h1>

        <h2 className='text-white text-xl border-2 border-s-amber-200 px-11 py-14 rounded-full  '>{topic}</h2>
    </div>
  )
}

export default Header