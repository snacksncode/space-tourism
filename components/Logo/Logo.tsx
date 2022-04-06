import Image from "next/image";
import styles from "./Logo.module.scss";
import Link from "next/link";
import { FC } from "react";
import classNames from "classnames";
import logoSrc from "../../public/assets/shared/logo.svg";

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
        <Image src={logoSrc} priority width={48} height={48} alt="" />
      </a>
    </Link>
  );
};

export default Logo;
