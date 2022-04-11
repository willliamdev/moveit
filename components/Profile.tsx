import styles from '../styles/components/Profile.module.css'


export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="http://github.com/willliamdev.png" alt="foto de perfil de willliam, jovem dev cabelo preto e curto, usando uma camisa de social também azul" />
      <div>
        <strong>William Almeida</strong>
        <p>
          <img src="icons/level.svg" alt="seta verde apontando pra cima" />
          level 1
        </p>
      </div>
    </div>
  )
}