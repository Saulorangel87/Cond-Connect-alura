import { useEffect, useState } from "react";
import { CardPost } from "../../components/CardPost"
import styles from './feed.module.css'

export const Feed = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/blog-posts')
            .then(res => res.json())
            .then(data => setPosts(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <main className={styles.grid}>
            {posts.map(post => <CardPost key={post.slug} post={post} />)}
        </main>

    )
}