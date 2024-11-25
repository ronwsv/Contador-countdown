import React from 'react'
import './Counter.css'

const Counter = ({ title, number }) => {
  const displayNumber = isNaN(number) ? 0 : number

  return (
    <div className="counter">
      <p className="counter-number">{displayNumber}</p>
      <h3 className="counter-text">{title}</h3>
    </div>
  )
}

export default Counter