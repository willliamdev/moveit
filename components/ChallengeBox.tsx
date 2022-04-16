import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
  const hasActiveChallenge = true
  return (
    <div className={styles.challengeBoxContainer}>
      {
        hasActiveChallenge ? (
          <div className={styles.challengeActive}>
            <header>Ganhe 400xp</header>
            <main>
              <img src="icons/body.svg" alt="ilustração de uma mão segurando um altere com anilhas menores na cor verde e as maiores na cor roxa" />
              <strong>Novo desafio</strong>
              <p>Com as pernas juntas e sem dobrar os joelhos, tente ecostar as mãos nos pés</p>
            </main>
            <footer>
              <button
                type='button'
                className={styles.challengeFailedButton}
              >
                Falhei
              </button>
              <button
                type='button'
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