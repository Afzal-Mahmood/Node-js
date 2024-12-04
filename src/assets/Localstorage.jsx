import React from 'react'

export const Localstorage = () => {
    let ali =prompt(`Enter Your Name *`)
    let value =prompt(`Enter Your Phone *`)
      localStorage.setItem(ali , value)
    //  console.log(`This is ${ali} Are ${localStorage.getItem(value)}`)

  return (
    <div>local-storage</div>
  )
}
