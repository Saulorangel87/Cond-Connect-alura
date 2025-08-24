import styles from './asidelink.module.css'

const AsideLink = ({ href, children }) => {
    return (<a href={href} className={styles.asidelink}>
        {children}
    </a>)
}

export default AsideLink