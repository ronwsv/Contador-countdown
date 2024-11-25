import { useState, useEffect } from 'react'
import Title from './components/Title'
import Counter from './components/Counter'
import DateForm from './components/DateForm'
import Confetti from './components/Confetti'
import useCountdown from './hooks/useCountdown'
import './App.css'

function App() {
  const [targetDate, setTargetDate] = useState(null)
  const [eventName, setEventName] = useState("")
  const [showForm, setShowForm] = useState(true)
  const [background, setBackground] = useState("")
  const [showConfetti, setShowConfetti] = useState(false)
  
  const [day, hour, minute, second] = useCountdown(targetDate)

  useEffect(() => {
    if (day === 0 && hour === 0 && minute === 0 && second === 0) {
      setShowConfetti(true)
    }
  }, [day, hour, minute, second])

  const handleDateSubmit = (data) => {
    setTargetDate(data.date)
    setEventName(data.name)
    setBackground(data.background)
    setShowForm(false)
    setShowConfetti(false)
  }

  return (
    <div className="App" style={{
      backgroundImage: background ? `url(${background})` : 'none',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}> 
      <div className='container'>
        {showForm ? (
          <DateForm onDateSubmit={handleDateSubmit} />
        ) : (
          <>
            <Title title={eventName} />
            <div className='countdown-container'>
              <Counter title="Dias" number={day}/>
              <Counter title="Horas" number={hour}/>
              <Counter title="Minutos" number={minute}/>
              <Counter title="Segundos" number={second}/>
            </div>
            <button className="reset-button" onClick={() => setShowForm(true)}>
              Configurar Nova Data
            </button>
          </>
        )}
      </div>
      {showConfetti && <Confetti />}
    </div>
  )
}

export default App
