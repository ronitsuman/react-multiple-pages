import React from 'react'

const Card = (props) => {
    const {imgUrl,tittle,desc,date}= props.CardDetail
  return (
    <>
    <div className='border-2 p-1 w-[400px] h-[350px] flex  flex-col gap-1    '>
      <h1>Data filling via json </h1>
       <img className=" rounded-lg" src={imgUrl} alt="" loading='lazy'  />
       <p className='text-gray-400'>{date}</p>
       <h1 className='font-semibold text-2xl ' >{tittle} </h1>
       <p>{desc}</p>
    </div>
    
    </>
  )
}

export default Card