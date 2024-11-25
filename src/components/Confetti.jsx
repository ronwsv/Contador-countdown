import React from 'react'
import './Confetti.css'

const Confetti = () => {
  return (
    <div className="confetti-container">
      {[...Array(50)].map((_, index) => (
        <div key={index} 
          className="confetti"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`
          }}
        />
      ))}
    </div>
  )
}

export default Confetti 