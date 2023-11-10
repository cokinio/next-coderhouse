import Image from 'next/image'
import React from 'react'

const Cuadrito = (props) => {
  return (
    <div className='flex m-auto w-3/12 h-48 justify-between items-center'>
        <Image className="mx-2" src={props.src} alt={props.alt} width={50} height={50}/>
        <div className='px-2'>
            <h1 className='text-xl text-black'>{props.title}</h1>
            <p className='text-gray-600'>{props.description}</p>
        </div>
    </div>
  )
}

export default Cuadrito