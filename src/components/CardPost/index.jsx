import { Author } from "../Author";
import styles from "./cardpost.module.css";

import { ThumbsUpButton } from "./ThumbsUpButton";
import { Link } from "react-router";
import { ModalComment } from "../ModalComent";
import { useState } from "react";
import { http } from "../../Api";
import { useAuth } from "../../hooks/useAuth";

export const CardPost = ({ post }) => {
  const [likes, setLikes] = useState(post.likes);
  const [comments, setComments] = useState(post.comments);

  const { isAuthenticated } = useAuth();

  const handleCommentButton = (newComment) => {
    setComments((previousComments) => [newComment, ...previousComments]);
  };

  const handleLikeButton = async () => {
    try {
      await http.post(`/blog-posts/${post.id}/like`);
      setLikes((oldState) => oldState + 1);
    } catch (error) {
      console.error("Erro ao curtir post:", error);
    }
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
            <ThumbsUpButton
              loading={false}
              onClick={handleLikeButton}
              disabled={!isAuthenticated}
            />
            <p>{likes}</p>
          </div>
          <div className={styles.action}>
            <ModalComment onSuccess={handleCommentButton} postId={post.id} />
            <p>{comments.length}</p>
          </div>
        </div>
        <Author author={post.author} />
      </footer>
    </article>
  );
};
