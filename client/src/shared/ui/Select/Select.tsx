import styles from "./Select.module.css";
import { SelectProps } from "./Select.types.ts";

const Select = ({ options, value, onChange }: SelectProps) => {
  return (
    <select value={value} onChange={onChange} className={styles.select}>
      {options.map((option, index) => (
        <option key={index} value={option.value} className={styles.option}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
