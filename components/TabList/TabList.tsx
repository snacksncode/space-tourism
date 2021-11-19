import { CSSProperties, FC } from "react";
import styles from "./TabList.module.scss";
import classNames from "classnames";

interface Props {
  style?: CSSProperties;
  mode?: "list" | "dots" | "numbers";
}

const TabList: FC<Props> = ({ children, style, mode }) => {
  const tabListClasses = classNames(styles.wrapper, "flex", {
    "underline-indicators ff-sans-cond": mode === "list" || mode == null,
    "dot-indicators": mode === "dots",
    [styles.dots]: mode === "dots",
    "number-indicators ff-serif": mode === "numbers",
  });
  return (
    <div role="tablist" className={tabListClasses} style={style}>
      {children}
    </div>
  );
};

export default TabList;
