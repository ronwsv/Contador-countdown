import React, { useState } from 'react'

const DateForm = ({ onDateSubmit }) => {
  const [eventDate, setEventDate] = useState('')
  const [eventName, setEventName] = useState('')
  const [backgroundType, setBackgroundType] = useState('url') // 'url' ou 'file'
  const [backgroundUrl, setBackgroundUrl] = useState('')
  const [backgroundFile, setBackgroundFile] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!eventDate || !eventName) {
      alert('Por favor, preencha todos os campos!')
      return
    }

    const formattedDate = new Date(eventDate).toISOString()
    
    // Processando a imagem de fundo
    let backgroundImage = ''
    if (backgroundType === 'url' && backgroundUrl) {
      backgroundImage = backgroundUrl
    } else if (backgroundType === 'file' && backgroundFile) {
      backgroundImage = URL.createObjectURL(backgroundFile)
    }

    onDateSubmit({
      date: formattedDate,
      name: eventName,
      background: backgroundImage
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

        <div className="form-group">
          <label>Tipo de plano de fundo:</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                value="url"
                checked={backgroundType === 'url'}
                onChange={(e) => setBackgroundType(e.target.value)}
              />
              URL da imagem
            </label>
            <label>
              <input
                type="radio"
                value="file"
                checked={backgroundType === 'file'}
                onChange={(e) => setBackgroundType(e.target.value)}
              />
              Arquivo local
            </label>
          </div>
        </div>

        {backgroundType === 'url' ? (
          <div className="form-group">
            <label htmlFor="backgroundUrl">URL da imagem:</label>
            <input
              type="url"
              id="backgroundUrl"
              value={backgroundUrl}
              onChange={(e) => setBackgroundUrl(e.target.value)}
              placeholder="https://exemplo.com/imagem.jpg"
            />
          </div>
        ) : (
          <div className="form-group">
            <label htmlFor="backgroundFile">Selecione uma imagem:</label>
            <input
              type="file"
              id="backgroundFile"
              accept="image/*"
              onChange={(e) => setBackgroundFile(e.target.files[0])}
            />
          </div>
        )}

        <button type="submit">Iniciar Contagem</button>
      </form>
    </div>
  )
}

export default DateForm 