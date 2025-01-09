import React from 'react'
import Card from './Card'
import CardData from './CardData.json'



const CardContainer = () => {
  return (
 
    <div className='flex items-center gap-4 px-4 py-4'>
         {CardData.map((data)=>{
         return<Card CardDetail={data}/>
     })}
        
        
    </div>
  )
}

export default CardContainer