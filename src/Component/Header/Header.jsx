
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
      <div className='w-[100vw] px-6 py-4 bg-blue-700'>
       <nav className='flex list-none gap-5 text-white justify-end'>
        <li>
          <NavLink className={(isActive)=>(isActive ? "text-green-500": "text-white")} to="/"  href="/">
          Home </NavLink>
        </li>
        <li>
          <NavLink className={(isActive)=>(isActive ? "text-green-500": "text-white")} to="/about">About</NavLink>
        </li>
        <li>
        <NavLink className={(isActive)=>(isActive ? "text-green-500": "text-white")} to="/contact">Contact </NavLink>
        </li>
        <li>
        <NavLink className={(isActive)=>(isActive ? "text-green-500": "text-white")} to="/blog">Blogs </NavLink>
        </li>
        </nav>  
      </div>
  )
}

export default Header