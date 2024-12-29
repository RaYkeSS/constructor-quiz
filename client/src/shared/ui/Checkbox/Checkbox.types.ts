import React from "react";

export default interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  labelClassName?: string;
}
