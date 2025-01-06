import React from 'react'

const Card = () => {
    
    const handleGreet = () => {
         let firstName = (prompt('hey ther enter your name '))
         console.log(alert (`${firstName} welcome here`))
         let page = <img src="../../Topics/Postselection.jsx" alt="" srcset="" /> 

    }
  return (
    // outer card layer starts here
    <div className='  w-[500] h-[600] border-2 border-black flex flex-col items-center gap-4 p-4'>
        <h2 className='capitalize bg-white p-2 '>post creation using tailwind and react and their data filling via json</h2>
       <section className=' relative bg-white  card w-[550px] h-[400px] border-2 border-gray-50 p-6 border-b--[#34318c] px-4 py-4 flex flex-col gap-5'>
        <img className='' src="../../../../public/blog-1.webp" alt="" />
        <span className='bg-[#409c69] text-white  font-bold  absolute right-10 top-4 p-2 rounded  '>Best Selling</span>
        <h2 className='b border-b-2 text-xl font-[500] '>Advance Data Science Course  </h2>
        <div className='duration flex items-center justify-between text-gray-400 '>
            <p>12 Months</p>  
            <p>Online/Ofline </p>
        </div>
        <div className=' flex items-center justify-between '>
            <button className='border-[.2rem] rounded  border-[#525252]  px-16 py-2 text-gray-500 font-semibold '>View Program</button>
            <button className='border-4 rounded  border-[#525252]  px-16 py-2 w-[50] font-semibold text-white bg-[#34318c]' onClick={handleGreet} >Enquire Now </button>
            
            

        </div>
       
       

       </section>
     {/* outer cards layer ends here  */}
      

    </div>
  )
}

export default Card