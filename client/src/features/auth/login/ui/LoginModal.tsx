import { Modal } from "~/shared/ui";
import { Login } from "./Login.tsx";

import { LoginModalProps } from "../model";

export const LoginModal = ({ open, setOpen, ...props }: LoginModalProps) => {
  return (
    <Modal open={open} setOpen={setOpen}>
      <Login {...props} />
    </Modal>
  );
};
