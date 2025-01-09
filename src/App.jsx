import React, { useState } from 'react'
import Home from './Component/nav/Home'
import About from './Component/nav/About'
import Contact from './Component/nav/Contact'
import Blog from './Component/nav/Blog'

const App = () => {
  const [value,setValue]=useState(0)

  const handleNavClick = (event,newValue)=>{
    event.preventDefault();  
    setValue(newValue)
  }
  return (
    <div className='w-[100vw] px-6 py-4'>
       <div className='w-[100vw] px-6 py-4 bg-blue-700'>
       <nav className='flex list-none gap-5 text-white justify-end'>
        <li><a onClick={(event)=>handleNavClick(event , 1)}  href="/">Home </a></li>
        <li><a onClick={(event)=>handleNavClick(event , 2)} href="/bout">About</a></li>
        <li><a onClick={(event)=>handleNavClick(event , 3)} href="/contact">Contact </a></li>
        <li><a onClick={(event)=>handleNavClick(event , 4)} href="/blog">Blogs </a></li>
        </nav>  
      </div>
       
      {value ===1 && <Home/>}
      {value === 2 && <About/>}
      {value === 3 && <Contact/>}
      {value === 4 && <Blog/>} 


    
    </div>
  )
}

export default App