import { createPortal } from "react-dom";
import { MouseEvent, useEffect, useState } from "react";

import ModalProps from './Modal.types.ts'

import styles from "./Modal.module.css";

const Modal = ({className, children, open, setOpen}: ModalProps) => {
  const [hidden, setHidden] = useState(false);

  const handleHide = () => {
    setHidden(prevState => !prevState)
  };

  const handlePreventPropagation = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (!hidden) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      setOpen(false);
      setHidden(false);
      document.body.style.overflow = "";
    };
  }, [hidden]);

  return createPortal(
    <div style={{ display: hidden || !open ? "none" : ""}} className={`${styles.backdrop} ${className ? className : ''}`.trim()} onClick={handleHide}>
      <div onClick={handlePreventPropagation}>
        {children}
      </div>
    </div>
    , document.body)
}

export default Modal;