import styles from './auth.module.css'

export const AuthLayout = ({ children }) => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                {children}
            </div>
        </div>
    )
}