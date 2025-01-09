import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Header from "./Component/Header/Header"
import About from "./Component/nav/About"
import Home from "./Component/nav/Home"
import Blog from "./Component/nav/Blog"
import Contact from "./Component/nav/Contact"

const App = () => {
    let router = createBrowserRouter([
      {
        path: "/" ,element: 
      <>
      <Header/>
       <Home/>
      </> }
      ,

      {
        path: "/about" ,element:
        <>
        <Header/>
        <About/>
        </> }
        ,
      {path: "/contact" ,element:
        <>
        <Header/>
        
        <Contact/>
        </> }
        ,
      {path: "/blog" ,element:
        <>
        <Header/>
         <Blog/>
         
        </>}
    ])

  return (
   <>
   <RouterProvider router={router}/>
   </>
  )
}

export default App