import React from 'react'
// import { useState } from 'react'
import Name from './three'
import One from './One'
import Card from './card'
import Form from './form'
import Log from './log'
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Product from './Product'
import Page from './assets/page'
import { Localstorage } from './assets/Localstorage'
// import { Mame } from './assets/Name'





function App() {
  const data=[
    {

      image:"1112.jpeg",
      title:"Heading",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. "
    },
    {

      image:"1118.jpeg",
      title:"Heading",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {

      image:"1115.jpeg",
      title:"Heading",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. "
    },
    {

      image:"44.jpeg",
      title:"Heading",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {

      image:"22.jpeg",
      title:"Heading",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    }
  ]
  
  return (
    <>
    
    <One />
    <Name />
    {/* <Log /> */}

    {/* <Form /> */}
    {/* <button onSubmit={blue} /> */}
     <Routes>
        <Route path='/Log' element={<Log/>} />
        <Route path='/One' element={<One/>} />
        <Route path='/Page' element={<Page/>} />
        <Route path='/Form' element={<Form/>} />
        <Route path='/Product' element={<Product/>} />
        <Route path='/Localstorage' element={< Localstorage/>}></Route>
      </Routes>
    {/* <Form /> */}
    <div className='card-container d-flex row bg-light p-5 m-0  justify-content-center col-lg-12 col-sm-12 '>
    {data.map((apple)=>(
      <Card   
      key={(apple.image)}
      image={apple.image}
      title={apple.title}
      description={apple.description} 
      />
    ))} 
  </div>
 </>
 )
}
{/* <Page /> */}

export default App
