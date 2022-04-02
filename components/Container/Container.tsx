import { FC } from "react";
import styles from "./Container.module.scss";
import classNames from "classnames";

type ContainerTypes = "fixed" | "fluid" | "grid";
interface ContainerProps {
  type?: ContainerTypes;
  className?: string;
  component?: keyof JSX.IntrinsicElements;
}

const Container: FC<ContainerProps> = ({ type, className, children, component }) => {
  const classes = classNames({
    [styles.wrapper]: type === "fixed" || type == null,
    [styles["wrapper--fluid"]]: type === "fluid",
    [styles["wrapper--grid"]]: type === "grid",
    [className as string]: className != null,
  });
  const RootElement = component || "div";
  return <RootElement className={classes}>{children}</RootElement>;
};

export default Container;
