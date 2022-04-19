import { useContext } from 'react'
import { CountdownContext } from '../contexts/CountdownContext'
import styles from '../styles/components/Countdown.module.css'

export function Countdown() {

  const {
    minutes, seconds, hasFinished, isActive, startCountdown, resetCountdown
  } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

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

      {hasFinished ? (
        <button
          disabled
          className={styles.countdownButton}
        >
          Ciclo encerrado
          <img src="icons/check_circle.svg" alt="circulo verde com sinal de cofirmação em branco ao centro" />
        </button>
      ) : (
        <>
          {!isActive ? (
            <button
              type="button"
              className={styles.countdownButton}
              onClick={startCountdown}
            >
              Iniciar um ciclo
              <img src="icons/start.svg" alt="apenas um 'x' em cor cinza" />
            </button>

          ) : (

            <button
              type="button"
              className={`${styles.countdownButton} ${styles.countdownButtonActivated}`}
              onClick={resetCountdown}
            >
              Abandonar ciclo
              <img src="icons/cancel.svg" alt="apenas um 'x' em cor cinza" />
            </button>
          )}
        </>
      )}





    </div>
  )
}