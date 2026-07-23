import { useEffect, useState } from "react";
import { CardPost } from "../../components/CardPost";
import styles from "./feed.module.css";
import { http } from "../../Api";

export const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    http
      .get("/blog-posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error("Erro ao carregar posts:", error));
  }, []);

  return (
    <main className={styles.grid}>
      {posts.map((post) => (
        <CardPost key={post.slug} post={post} />
      ))}
    </main>
  );
};