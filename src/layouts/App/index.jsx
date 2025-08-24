import { Aside } from "../../components/Aside"
import styles from './app.module.css'

export const AppLayout = ({ children }) => {
    return (
        <div className={styles.app}>
            <Aside />
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}