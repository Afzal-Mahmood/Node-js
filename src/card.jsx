import React from 'react'
import Name from './three'

 const card = ({image , title , description}) => {
 return(
  <div className="card col-lg-3 shadow col-sm-12 p-3  m-2  justify-content-center ">
    <img className='pb-3 ' src={image} alt='Image'/>
    <h2 className='border card-title p-3 border-4 border-start-0 border-end-0'>{title}</h2>
    <p className='card-body '>{description}</p>
  </div>
    
 )
}
export default card
