import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar() {
  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: '36%' }} />
        <span
          className={styles.currentExperience}
          style={{ marginLeft: '36%' }}
        >
          216 xp
        </span>
      </div>
      <span>600 xp</span>
    </header>
  )
}