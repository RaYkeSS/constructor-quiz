import React, { Dispatch, SetStateAction } from "react";

export default interface ModalProps {
  className?: string,
  children: React.ReactNode,
  open: Boolean,
  setOpen: Dispatch<SetStateAction<boolean>>,
}