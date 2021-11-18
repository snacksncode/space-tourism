import { FC } from "react";
import classNames from "classnames";
import styles from "./Navigation.module.scss";

interface NavigationProps {
  className?: string;
}

const Navigation: FC<NavigationProps> = ({ className, children }) => {
  const navClasses = classNames({
    [className as string]: className != null,
  });
  const ulClasses = classNames("ff-sans-cond", "flex", "underline-indicators", styles.wrapper);
  return (
    <nav className={navClasses}>
      <ul className={ulClasses}>{children}</ul>
    </nav>
  );
};

export default Navigation;
