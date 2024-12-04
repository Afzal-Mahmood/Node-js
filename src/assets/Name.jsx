import React from 'react'

export const Mame = () => {
    // const alart =()=>{
    //     alert('modal')
    // }
  return (
    <div>
<button className='btn btn-primary data-dismiss' data-bs-dismissabe='modal' data-bs-toggle='modal' data-bs-target='#Ali'>+Addtask</button>
        <div className="modal" id='Ali'>
        <div className="modal-dailog">
            <div className="modal-content">
            <div className="modal-header">
                <button data-bs-close className='btn btn-close'></button>
            </div>
            <div className="modal-body">
                <input type="text" placeholder='Enter Your Task' />
                <button className='btn btn-outline-warning'>Low</button>
                <button className='btn btn-outline-primary'>Meadium</button>
                <button className='btn btn-outline-info'>High</button>
            </div>
            <div className="modal-footer">
                <button className='btn btn-secondary' data-bs-dismissable='modal'>Add Task</button>
                <button className='btn btn-dark'>Clear</button>
            </div>
            </div>
        </div>
        </div>
        <div className="ali">Asalam u Alikom</div>
    </div>
  )
}
