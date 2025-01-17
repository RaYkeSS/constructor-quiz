import { Modal } from "~/shared/ui";
import { Registration } from "./Registration.tsx";

import { RegistrationModalProps } from "../model";

export const RegistrationModal = ({
  open,
  setOpen,
  ...props
}: RegistrationModalProps) => {
  return (
    <Modal open={open} setOpen={setOpen}>
      <Registration {...props} />
    </Modal>
  );
};
