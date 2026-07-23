import { useRef, useState } from "react";
import { IconButton } from "../IconButton";
import { Modal } from "../Modal";
import { Textarea } from "../Textarea";
import { Subheading } from "../Subheading";
import { IconChat } from "../icons/IconChat";
import { IconArrowFoward } from "../icons/IconArrowFoward";
import { Spinner } from "../Spinner";
import styles from "./modalcoment.module.css";
import { Button } from "../Button";
import { http } from "../../Api";
import { useAuth } from "../../hooks/useAuth";

export const ModalComment = ({ isEditing, onSuccess, postId, comment }) => {
  const modalRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const { isAuthenticated } = useAuth();

  const onSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const text = formData.get("text");
    if (!text || !String(text).trim()) return;

    try {
      setLoading(true);

      const response = isEditing
        ? await http.patch(`/comments/${comment?.id}`, { text })
        : await http.post(`/comments/post/${postId}`, { text });

      form.reset();
      modalRef.current.closeModal();
      onSuccess?.(response.data);
    } catch (error) {
      console.error("Erro ao criar/atualizar comentário:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Modal ref={modalRef}>
        <form className={styles.container} onSubmit={onSubmit}>
          <Subheading>
            {isEditing
              ? "Editar comentário:"
              : "Deixe seu comentário sobre o post:"}
          </Subheading>
          <Textarea
            required
            rows={8}
            name="text"
            defaultValue={isEditing ? comment?.text : undefined}
            placeholder="Digite aqui..."
          />
          <div className={styles.footer}>
            <Button disabled={loading} type="submit">
              {loading ? (
                <Spinner />
              ) : (
                <>
                  {isEditing ? "Atualizar" : "Comentar"} <IconArrowFoward />
                </>
              )}
            </Button>
          </div>
        </form>
      </Modal>
      <IconButton
        onClick={() => modalRef.current?.openModal()}
        disabled={!isAuthenticated}
      >
        <IconChat fill={isEditing ? "#000" : "#888888"} />
      </IconButton>
    </>
  );
};
