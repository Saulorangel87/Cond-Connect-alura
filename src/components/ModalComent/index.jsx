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

export const ModalComment = ({ isEditing }) => {
  const modalRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const text = formData.get("text");

    if (!text || !String(text).trim()) return;

    try {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        modalRef.current?.closeModal();
      }, 2000);
    } catch (error) {
      console.error("Erro ao criar/atualizar comentário:", error);
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
      <IconButton onClick={() => modalRef.current?.openModal()}>
        <IconChat fill={isEditing ? "#000" : "#888888"} />
      </IconButton>
    </>
  );
};
