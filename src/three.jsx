import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './apple.css'n
import { Link } from 'react-router-dom'
 const  Name = () => {
  return (  
    // <div style={{}}} className='container-fuild'>
 <div className=''>
      <nav className='navbar navbar-expend-sm text-white sticky-top rounded col px-5 '>
        <a href="#" className='navbar-brand ms-5'>
          <img src="malik.log" className='rounded rounded-circle' width={100} alt="" />
        </a>
        <ul className='navbar me-5 pe-5 h5' style={{ listStyle: "none", paddingLeft: 0, textShadow: "2px 2px 1px green", fontFamily: "sans-serif" }}>
  <li style={{ fontFamily: 'initial' }} className='nav-item me-5'>
    <Link to="/Log" aria-current="page" className='nav-link'>HOME</Link>
  </li>
  <li style={{ fontFamily: 'initial' }} className='nav-item me-5'>
    <Link to="/" className='nav-link'>ABOUT</Link>
  </li>
    <li style={{ fontFamily: 'initial' }} className='nav-item me-5'>
    <Link to="/Page" className='nav-link'>PAGE</Link>
  </li>
  <li style={{ fontFamily: 'initial' }} className='nav-item dropdown me-5'>
    <Link to="#" className='nav-link dropdown-toggle' data-bs-toggle='dropdown'>MENU</Link>
    <ul className='dropdown-menu bg-light'>
      <li><Link to="/peshawae" className="dropdown-item">Peshawae</Link></li>
      <li><Link to="/islamabad" className="dropdown-item">Islamabad</Link></li>
      <li><Link to="/quatta" className="dropdown-item">Quatta</Link></li>
      <li><Link to="/multan" className="dropdown-item">Multan</Link></li>
      <li><Link to="/karachi" className="dropdown-item">Karachi</Link></li>
    </ul>
  </li>
  <li style={{ fontFamily: 'initial' }} className='nav-item me-5'>
    <Link to="/form" className='nav-link'>TANDOORI CATERING</Link>
  </li>
  <li style={{ fontFamily: 'initial' }} className='nav-item me-5'>
    <Link to="/Product" className='nav-link'>LOCATION</Link>
  </li>
  <li style={{ fontFamily: 'initial' }} className='nav-item me-5'>
    <Link to="/Localstorage" className='nav-link'> localstorage</Link>
  </li>
</ul>

            {/* <div className="form-group d-flex pe-5">
                <input type="text" placeholder='seach'  className='form-control  border-2 h4' />
                <button className='btn btn-outline-warning h5'>Sarch</button>
                </div> */}
      </nav>    
 </div> 

  )
  
}
export default Name
