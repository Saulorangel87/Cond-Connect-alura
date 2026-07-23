import styles from "./blogpost.module.css";
import { ThumbsUpButton } from "../../components/CardPost/ThumbsUpButton";
import { Author } from "../../components/Author";
import Typography from "../../components/Typography";
import { CommentList } from "../../components/CommentList";
import ReactMarkdown from "react-markdown";
import { useParams, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { ModalComment } from "../../components/ModalComent";
import { http } from "../../Api";
import { useAuth } from "../../hooks/useAuth";

export const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();
  const [comments, setComments] = useState([]);

  const handleCommentButton = (newComment) => {
    setComments((previousComments) => [newComment, ...previousComments]);
  };

  const { isAuthenticated } = useAuth();

  const handleCommentDelete = async (commentId) => {
    const isConfirmed = confirm("Tem certeza que deseja remover o comentário?");

    if (isConfirmed) {
      try {
        await http.delete(`comments/${commentId}`);
        setComments((oldState) =>
          oldState.filter((comment) => comment.id !== commentId),
        );
      } catch (error) {
        console.error("Erro ao remover comentário:", error);
      }
    }
  };

  const handleLikeButton = async () => {
    try {
      await http.post(`/blog-posts/${post.id}/like`);
      setPost((previousPost) => ({
        ...previousPost,
        likes: previousPost.likes + 1,
      }));
    } catch (error) {
      console.error("Erro ao curtir post:", error);
    }
  };

  useEffect(() => {
    http
      .get(`/blog-posts/slug/${slug}`)
      .then((response) => {
        setPost(response.data);
        setComments(response.data.comments);
      })
      .catch((erro) => {
        if (erro.response?.status === 404) {
          navigate("/not-found");
        }
      });
  }, [slug, navigate]);

  if (!post) {
    return null;
  }

  return (
    <main className={styles.main}>
      <article className={styles.card}>
        <header className={styles.header}>
          <figure className={styles.figure}>
            <img
              src={post.cover}
              alt={`Capa do post de titulo: ${post.title}`}
            />
          </figure>
        </header>
        <section className={styles.body}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </section>
        <footer className={styles.footer}>
          <div className={styles.actions}>
            <div className={styles.action}>
              <ThumbsUpButton
                loading={false}
                onClick={handleLikeButton}
                disabled={!isAuthenticated}
              />
              <p>{post.likes}</p>
            </div>
            <div className={styles.action}>
              <ModalComment onSuccess={handleCommentButton} postId={post?.id} />
              <p>{comments.length}</p>
            </div>
          </div>
          <Author author={post.author} />
        </footer>
      </article>
      <Typography variant="h3">Código:</Typography>
      <div className={styles.code}>
        <ReactMarkdown>{post.markdown}</ReactMarkdown>
      </div>
      <CommentList comments={comments} onDelete={handleCommentDelete} />
    </main>
  );
};
