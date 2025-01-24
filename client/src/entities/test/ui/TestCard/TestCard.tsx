import { FC } from "react";
import { ITestCardProps } from "../../model";

import styles from "./TestCard.module.css";

export const TestCard: FC<ITestCardProps> = ({
  title,
  authorId,
  createdAt,
  questions,
}) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>Author: {authorId}</p>
      <p className={styles.sub_description}>
        Total questions: {questions?.length || 0}
      </p>
      <p className={styles.sub_description}>
        Created: {new Date(Number(createdAt)).toLocaleString()}
      </p>
    </div>
  );
};
