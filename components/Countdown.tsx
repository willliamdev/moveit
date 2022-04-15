import { clear } from 'console'
import { useState, useEffect } from 'react'
import styles from '../styles/components/Countdown.module.css'

let countdownTimeout: NodeJS.Timeout

export function Countdown() {
  const [time, setTime] = useState(25)
  const [isActive, setIsActive] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  function startCountdown() {
    setIsActive(true)
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout)
    setIsActive(false)
    setTime(25)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else {
      resetCountdown()
    }
  }, [isActive, time])

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>


      {!isActive ? (
        <button
          type="button"
          className={styles.countdownButton}
          onClick={startCountdown}
        >
          Iniciar um ciclo
        </button>

      ) : (

        <button
          type="button"
          className={`${styles.countdownButton} ${styles.countdownButtonActivated}`}
          onClick={resetCountdown}
        >
          Abandonar ciclo
        </button>
      )
      }



    </div>
  )
}