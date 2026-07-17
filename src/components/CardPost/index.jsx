import { Author } from "../Author";
import styles from "./cardpost.module.css";

import { ThumbsUpButton } from "./ThumbsUpButton";
import { Link } from "react-router";
import { ModalComment } from "../ModalComent";
import { useState } from "react";

export const CardPost = ({ post }) => {
  const [likes, setLikes] = useState(post.likes);

  const handleLikeButton = () => {
    fetch(`http://localhost:3000/blog-posts/${post.id}/like`, {
      method: "POST",
    }).then((response) => {
      if (response.ok) {
        setLikes((oldState) => oldState + 1);
        console.log("incrementar like");
      }
    });
  };

  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <figure className={styles.figure}>
          <img src={post.cover} alt={`Capa do post de titulo: ${post.title}`} />
        </figure>
      </header>
      <section className={styles.body}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <Link to={`/blog-posts/${post.slug}`}>Ver detalhes</Link>
      </section>
      <footer className={styles.footer}>
        <div className={styles.actions}>
          <div className={styles.action}>
            <ThumbsUpButton loading={false} onClick={handleLikeButton} />
            <p>{likes}</p>
          </div>
          <div className={styles.action}>
            <ModalComment />
            <p>{post.comments.length}</p>
          </div>
        </div>
        <Author author={post.author} />
      </footer>
    </article>
  );
};
