import CheckboxProps from "./Checkbox.types.ts";
import styles from "./Checkbox.module.css";

const Checkbox = ({
  label,
  checked,
  onChange,
  className,
  labelClassName,
}: CheckboxProps) => {
  return (
    <label className="flex items-center">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={`${styles.checkbox} ${className ? className : ""}`.trim()}
      />
      <span
        className={`${styles.span} ${labelClassName ? labelClassName : ""}`.trim()}
      >
        {label}
      </span>
    </label>
  );
};
export default Checkbox;
