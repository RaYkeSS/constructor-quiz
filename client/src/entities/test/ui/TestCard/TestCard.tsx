import { FC } from "react";
import { ITestCardProps } from "../../model";

import styles from "./TestCard.module.css";

export const TestCard: FC<ITestCardProps> = ({
  title,
  author,
  createdAt,
  questions,
}) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>Author: {author}</p>
      <p className={styles.sub_description}>
        Total questions: {questions.length}
      </p>
      <p className={styles.sub_description}>
        Created: {new Date(createdAt).toLocaleDateString()}
      </p>
    </div>
  );
};
