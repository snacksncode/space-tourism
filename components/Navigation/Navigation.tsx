import { CSSProperties, FC } from "react";
import classNames from "classnames";
import styles from "./Navigation.module.scss";

interface NavigationProps {
  className?: string;
  gap?: number;
}

const Navigation: FC<NavigationProps> = ({ className, children, gap }) => {
  const navClasses = classNames(styles.wrapper, {
    [className as string]: className != null,
  });
  const ulClasses = classNames(styles.inner, "ff-sans-cond", "flex", "underline-indicators");
  return (
    <nav className={navClasses}>
      <button className={styles["menu-toggle"]}>
        <span className="sr-only">Menu</span>
      </button>
      <ul style={gap != null ? ({ "--gap": `${gap}rem` } as CSSProperties) : {}} className={ulClasses}>
        {children}
      </ul>
    </nav>
  );
};

export default Navigation;
