import React from 'react'

const Header = () => {
  return (
      <div className='w-[100vw] px-6 py-4 bg-blue-700'>
       <nav className='flex list-none gap-5 text-white justify-end'>
        <li><Link to="/" onClick={(event)=>handleNavClick(event , 1)}  href="/">Home </Link></li>
        <li><a onClick={(event)=>handleNavClick(event , 2)} href="/bout">About</a></li>
        <li><a onClick={(event)=>handleNavClick(event , 3)} href="/contact">Contact </a></li>
        <li><a onClick={(event)=>handleNavClick(event , 4)} href="/blog">Blogs </a></li>
        </nav>  
      </div>
  )
}

export default Header