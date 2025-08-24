import styles from './textdivider.module.css'

export const TextDivider = ({ text }) => {
    return (
        <div className={styles.container}>
            <div className={styles.line}></div>
            <span className={styles.text}>{text}</span>
            <div className={styles.line}></div>
        </div>
    )
}