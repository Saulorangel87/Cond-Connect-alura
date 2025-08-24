import styles from './authformcontainer.module.css'

export const AuthFormContainer = ({ children, bannerSrc }) => {

    return (
        <div className={styles.container}>
            <figure>
                <img src={bannerSrc} alt="" />
            </figure>
            <div className={styles['form-wrapper']}>
                {children}
            </div>
        </div>
    )
}