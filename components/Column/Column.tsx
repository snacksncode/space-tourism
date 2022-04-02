import { FC } from "react";
import styles from "./Column.module.scss";
import classNames from "classnames";

interface Props {
  position: "left" | "right";
  className?: string;
}

const Column: FC<Props> = ({ position, className, children }) => {
  const classes = classNames({
    [styles["wrapper--left"]]: position === "left",
    [styles["wrapper--right"]]: position === "right",
    [className as string]: className != null,
  });
  return <div className={classes}>{children}</div>;
};

export default Column;
