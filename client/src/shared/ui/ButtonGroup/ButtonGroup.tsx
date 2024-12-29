import { Button } from "shared/ui";
import ButtonGroupProps from "./ButtonGroup.types.ts";

import styles from "./ButtonGroup.module.css";

const ButtonGroup = ({ buttons }: ButtonGroupProps) => {
  return (
    <div className={styles.buttonGroup}>
      {buttons.map((button, index) => (
        <Button
          key={index}
          onClick={button.onClick}
          className={button.className}
        >
          {button.label}
        </Button>
      ))}
    </div>
  );
};

export default ButtonGroup;
