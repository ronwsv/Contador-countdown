import React, { useState } from 'react'

const DateForm = ({ onDateSubmit }) => {
  const [eventDate, setEventDate] = useState('')
  const [eventName, setEventName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!eventDate || !eventName) {
      alert('Por favor, preencha todos os campos!')
      return
    }

    const formattedDate = new Date(eventDate).toISOString()
    
    onDateSubmit({
      date: formattedDate,
      name: eventName
    })
  }

  return (
    <div className="date-form">
      <h2>Configure seu contador</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="eventName">Nome do evento:</label>
          <input
            type="text"
            id="eventName"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            placeholder="Ex: Ano Novo"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="eventDate">Data do evento:</label>
          <input
            type="datetime-local"
            id="eventDate"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Iniciar Contagem</button>
      </form>
    </div>
  )
}

export default DateForm 