import { Dispatch, SetStateAction } from "react";

import { Modal } from "shared/ui/";

import Auth from "./Auth.tsx";



const AuthModal = ({open, setOpen}: {open: Boolean, setOpen: Dispatch<SetStateAction<boolean>>}) => {

  return (
    <Modal open={open} setOpen={setOpen}>
      <Auth />
    </Modal>
  )
};

export default AuthModal;

