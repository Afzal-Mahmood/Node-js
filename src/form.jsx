import React from 'react'

const Form = () => {
  function green(){
    console.log(1)
  }
  function blue(){
    console.log("OK")
  }

  
  return (
    <div className="col-12 my-5  container d-flex">
      <div className="col-8 " style={{paddingTop:'150px',paddingLeft:'100px',textTransform:'uppercase',fontVariant:'small-caps'}}>
     <h2 className='text-white display-4 '
     style={{fontFamily:'serif', letterSpacing:'5'}}>Catering Services For All Occasions <br/>
     </h2>
     <h3 className='text-white h6 pt- '>Just dial and book your service now!<br /> </h3>
     <button className='mt-3 btn btn-warning rounded-circle p-3 fw-bold text-white'>Call Use Now</button>
      </div>
   
      <div className="col-lg-4">
    <form className=''>
    <div id='apple' className=' bg-light rounded'>
        <h6 className=' pt-4   text-center text-primary align-center h6'>- Send us a message -</h6>
        <h2 onClick={green} className='text-center border border-2 mb-3 mt-1 border-dark border-end-0 border-start-0 align-center   mx-auto col-7'>CONTECTFORM</h2>
     <div className=" form  px-4">
     <div className="form-group  m-2 col"  >
            <label htmlFor="#">Name*</label>
            <input type="text" className='form-control mt-1' placeholder='Enter your name ' />
        </div>
        <div className="form-group  m-2 col">
            <label htmlFor="#">Email*</label>
            <input type="email" className='form-control mt-1' placeholder='Enter your email ' />
        </div>
        <div className="form-group  m-2  col">
            <label htmlFor="#">Password*</label>
            <input type="password" className='form-control mt-1' placeholder='Enter your password ' /><br />
        </div>
     </div>
        <div className="form-group px-4 pb-5 col">
            <label htmlFor="#" className='m2'>Message*</label>
            <textarea className='form-control' placeholder='Message' rows={3}  name="Address" id="#">
        
        </textarea>
        <button onClick={blue} className='btn btn-primary shadow mt-3 w-100 shadow'>Submit</button>
        </div>

      </div>
        
    </form>
    </div>
    </div>
  )
}
export default Form
