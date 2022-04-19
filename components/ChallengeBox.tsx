import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { CountdownContext } from '../contexts/CountdownContext'
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext)
  const { resetCountdown } = useContext(CountdownContext)
  function handleChallengeFailed() {
    resetChallenge()
    resetCountdown()
  }

  return (
    <div className={styles.challengeBoxContainer}>
      {
        activeChallenge ? (
          <div className={styles.challengeActive}>
            <header>Ganhe {activeChallenge.amount}xp</header>
            <main>
              <img
                src={`icons/${activeChallenge.type}.svg`}
                alt={activeChallenge.type === 'body' ?
                  "ilustração de uma mão segurando um altere com anilhas menores na cor verde e as maiores na cor roxa"
                  : 'ilustração de um olho com íris azul e pulpila preta'
                }
              />

              <strong>Novo desafio</strong>
              <p>{activeChallenge.description}</p>
            </main>
            <footer>
              <button
                type='button'
                onClick={handleChallengeFailed}
                className={styles.challengeFailedButton}
              >
                Falhei
              </button>
              <button
                type='button'
                onClick={completeChallenge}
                className={styles.challegeSucceedButton}
              >
                Completei
              </button>
            </footer>
          </div>
        ) : (
          <div className={styles.challengeNotActive}>
            <strong>Finalize um ciclo para receber desafios a serem completados </strong>
            <p>
              <img src="icons/level-up.svg" alt="seta verde que aponta pra cima com um sinal de adição (+) ao centro que é em verde mais escuro" />
              Avance de level completando desafios

            </p>
          </div>
        )

      }
    </div>
  )
}