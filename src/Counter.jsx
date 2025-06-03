import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,reset,updatebyAmount } from './redux/slices/counterSlice'

function Counter() {

  const countState=useSelector((state)=>state.counterSlice.count) 
  const dispatch=useDispatch()
  const [inp,setInp]=useState(0)
  // console.log(countState)
  // console.log(inp)

  return (
   <>
   

    <div className='bg-dark container-fluid d-flex justify-content-center align-items-center' style={{height:'100vh'}}>
       <div className='w-50 p-3 border border-info border-2 shadow bg-secondary'>
          <h3 className='text-center text-dark my-3'>Counter</h3>
          <h1 className='text-center text-dark mb-4 '>{countState}</h1>
          <div className='container'>
          <div className='row gap-2'>
            <button className="btn btn-success col" onClick={()=>{dispatch(increment())}}>Increment +</button>
            <button className="btn btn-info col" onClick={()=>{dispatch(reset())}}>Reset</button>
            <button className="btn btn-danger col" onClick={()=>{dispatch(decrement())}}>Decrement -</button>
          </div>
          <div className='my-2'>
            <div className='row'>
              <div className='col-9'>
                <input type="number" className='form-control' placeholder='Ente Number' name='number'onChange={(e)=>setInp(e.target.value)}/>
              </div>
              <div className='col-3 d-grid'>
                 <button className="btn btn-dark" onClick={()=>{dispatch(updatebyAmount(parseInt(inp)))}}>Submit</button>
              </div>
              </div>
          </div>
        </div>
       </div>
     </div>
   </>
  )
}

export default Counter