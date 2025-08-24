import styles from './link.module.css'

export const Link = ({ children, ...props }) => {
    const className = props.className || ''
    return (
        <a {...props} className={`${styles.link} ${className}`}>
            {children}
        </a>
    )
}