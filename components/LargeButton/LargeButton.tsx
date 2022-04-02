import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./LargeButton.module.scss";
import classNames from "classnames";

interface Props {
  href: string;
  __fakeHover?: boolean;
}

const LargeButton: FC<Props> = ({ children: text, __fakeHover, href }) => {
  const linkClasses = classNames(styles.wrapper, "inline-grid center uppercase ff-serif fs-600 bg-white text-dark", {
    [styles["fake-hover"]]: __fakeHover,
  });
  return (
    <>
      <Link href={href}>
        <a className={linkClasses}>
          {text}
          {__fakeHover && (
            <div className="fake-pointer" style={{ bottom: 50, right: 30 }}>
              <Image src="/assets/pointer.svg" width={30} height={30} alt="fake pointer" />
            </div>
          )}
        </a>
      </Link>
    </>
  );
};

export default LargeButton;
