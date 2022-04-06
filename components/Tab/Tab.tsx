import { FC } from "react";
import classNames from "classnames";
import styles from "./Tab.module.scss";

interface Props {
  active?: boolean;
  mode?: "text" | "dot" | "number";
}
const Tab: FC<Props> = ({ children: text, active, mode }) => {
  const tabClasses = classNames(styles.wrapper, "uppercase text-accent letter-spacing-md", {
    [styles.dot]: mode === "dot",
    [styles.number]: mode === "number",
  });
  return (
    <button role="tab" aria-selected={!!active} className={tabClasses}>
      {mode === "dot" ? <span className="sr-only">{text}</span> : text}
    </button>
  );
};

export default Tab;
