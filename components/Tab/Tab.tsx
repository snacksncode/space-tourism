import { FC } from "react";
import Image from "next/image";
import classNames from "classnames";
import styles from "./Tab.module.scss";

interface Props {
  __fakeHover?: boolean;
  active?: boolean;
  mode?: "text" | "dot" | "number";
}
const Tab: FC<Props> = ({ children: text, __fakeHover, active, mode }) => {
  const tabClasses = classNames(styles.wrapper, "uppercase text-accent letter-spacing-md", {
    "fake-hover": __fakeHover,
    [styles.dot]: mode === "dot",
    [styles.number]: mode === "number",
  });
  return (
    <button role="tab" aria-selected={!!active} className={tabClasses}>
      {mode === "dot" ? <span className="sr-only">{text}</span> : text}
      {__fakeHover && (
        <div className="fake-pointer" style={{ bottom: mode === "dot" ? -15 : 0, right: mode === "dot" ? -13 : 0 }}>
          <Image src="/assets/pointer.svg" width={30} height={30} alt="fake pointer" />
        </div>
      )}
    </button>
  );
};

export default Tab;
