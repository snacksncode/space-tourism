import { FC } from "react";
import styles from "./Container.module.scss";
import classNames from "classnames";

type ContainerTypes = "fixed" | "fluid";
interface ContainerProps {
  type?: ContainerTypes;
  className?: string;
}

const Container: FC<ContainerProps> = ({ type, className, children }) => {
  const classes = classNames({
    [styles.wrapper]: type === "fixed" || type == null,
    [styles["wrapper--fluid"]]: type === "fluid",
    [className as string]: className != null,
  });
  return <div className={classes}>{children}</div>;
};

export default Container;
