import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { increment , decrement } from './counterSlice';

const CounterValue = () => {
  const dispatch=useDispatch(); // we are storing like use/state
  const data=  useSelector((state)=>state.counter.value)
  console.log(data)
  return (
      <>CounterValue:{data} 
      <div>
        <button onClick={()=>dispatch(increment())}>Increment</button><br/>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        {/* <button onClick={()=>dispatch(multiplication())}>Multiplication</button> */}
      </div>
    </>
  )
}

export default CounterValue