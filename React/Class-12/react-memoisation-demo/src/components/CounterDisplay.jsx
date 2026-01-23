import React,{memo} from 'react'

const CounterDisplay = memo((props) => {
    console.log('Counter Display')
  return (
    <div>
          <p>Counter Display: {props.count}</p>
          <button onClick={props.incrementCountBy10}>Increment By 10</button>
    </div>
  )
})

export default CounterDisplay
