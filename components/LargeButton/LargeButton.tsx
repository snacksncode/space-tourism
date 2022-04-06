import { FC } from "react";
import Link from "next/link";
import styles from "./LargeButton.module.scss";
import classNames from "classnames";

interface Props {
  href: string;
}

const LargeButton: FC<Props> = ({ children: text, href }) => {
  const linkClasses = classNames(styles.wrapper, "inline-grid center uppercase ff-serif fs-600 bg-white text-dark");
  return (
    <>
      <Link href={href}>
        <a className={linkClasses}>{text}</a>
      </Link>
    </>
  );
};

export default LargeButton;
