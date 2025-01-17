import { Dispatch, SetStateAction } from "react";

export interface RegistrationProps {}

export interface RegistrationModalProps extends RegistrationProps {
  open: Boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
