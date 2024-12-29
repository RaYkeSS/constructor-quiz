import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

export interface InputProps {
  className?: string;
  type?: HTMLInputTypeAttribute;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  placeholder?: string;
}
