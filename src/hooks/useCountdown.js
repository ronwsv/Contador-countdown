import { useState, useEffect } from 'react'

const useCountdown = (targetDate) => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const countdownDate = new Date(targetDate).getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = countdownDate - now

      // Cálculos para dias, horas, minutos e segundos
      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      if (distance < 0) {
        // Se a data já passou
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        clearInterval(interval)
      } else {
        setCountdown({ days, hours, minutes, seconds })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return [countdown.days, countdown.hours, countdown.minutes, countdown.seconds]
}

export default useCountdown 