import styles from "./Loader.module.css";
import { LoaderProps } from "./Loader.types.ts";

const Loader = ({ size = "" }: LoaderProps) => {
  return (
    <div
      className={`${styles.loader} ${size ? styles[`loader-${size}`] : ""}`.trim()}
    >
      <div
        className={`${styles.spinner} ${size ? styles[size] : ""}`.trim()}
      ></div>
    </div>
  );
};

export default Loader;
