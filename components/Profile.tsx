import styles from '../styles/components/Profile.module.css'


export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="http://github.com/willliamdev.png" alt="foto de perfil de willliam, jovem dev cabelo preto e curto, usando uma camisa de social também azul" />
      <div>
        <strong>William Almeida</strong>
        <p>level 1</p>
      </div>
    </div>
  )
}