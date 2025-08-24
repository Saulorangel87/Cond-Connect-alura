import styles from './avatar.module.css'

export const Avatar = ({ author }) => {
    const imgSrc = author.avatar

    return (
        <div className={styles.container}>
            {imgSrc && <img
                src={imgSrc}
                width={32}
                height={32}
                alt={`Avatar do(a) ${author.name}`}
            />}
        </div>
    )
}