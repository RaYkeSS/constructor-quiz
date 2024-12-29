import React from "react";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOptions[];
}

interface SelectOptions {
  value: string;
  label: string;
}

// React.ChangeEventHandler<HTMLSelectElement>
