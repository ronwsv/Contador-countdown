import { useState } from 'react'
import Title from './components/Title'
import Counter from './components/Counter'
import DateForm from './components/DateForm'
import NewYear from './assets/newyear.png'
import useCountdown from './hooks/useCountdown'
import './App.css'

function App() {
  const [targetDate, setTargetDate] = useState("Jan 1, 2025 00:00:00")
  const [eventName, setEventName] = useState("Contagem regressiva para 2025")
  const [showForm, setShowForm] = useState(true)
  
  const [day, hour, minute, second] = useCountdown(targetDate)

  const handleDateSubmit = (data) => {
    setTargetDate(data.date)
    setEventName(data.name)
    setShowForm(false)
  }

  return (
    <div className="App" style={{backgroundImage:`url(${NewYear})`}}> 
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
    </div>
  )
}

export default App
