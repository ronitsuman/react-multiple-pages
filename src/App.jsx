import React from 'react'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import Postselection from './Component/Topics/Postselection'

const App = () => {
  return (
    <div className=' bg-cyan-700 w-auto h-auto p-4 flex flex-col item-center align-cente gap-4 '>
      <Header/> 
      <Postselection/> 

      <Footer/>
      
    </div>
  )
}

export default App