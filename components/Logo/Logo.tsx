import Image from "next/image";
import styles from "./Logo.module.scss";
import Link from "next/link";
import { FC } from "react";
import classNames from "classnames";

interface Props {
  className?: string;
}

const Logo: FC<Props> = ({ className }) => {
  const classes = classNames(styles.wrapper, {
    [className as string]: className != null,
  });
  return (
    <Link href="/">
      <a className={classes}>
        <Image src="/assets/shared/logo.svg" loading="eager" width={48} height={48} alt="Logo" />
      </a>
    </Link>
  );
};

export default Logo;
