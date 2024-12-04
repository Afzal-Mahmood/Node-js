import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement , increment } from './counterSlice'

export function Counter() {
    const  count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

  return (
    <div>
        <button
         className='btn btn-info'
         aria-label='Increment value'
         onClick={() =>dispatch(increment())
         }
        >
        +</button>
            <span className='text-primary'>{count}</span>
        <button 
        className='btn btn-secondary'
        aria-label='Decrement value'
        onClick={() => dispatch(decrement())}
        >
        -</button>
    </div>
  )
}
