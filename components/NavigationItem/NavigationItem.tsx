import classNames from "classnames";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./NavigationItem.module.scss";

interface NavigationProps {
  href: string;
  active?: boolean;
  number: number;
  __fakeHover?: boolean;
}

const NavigationItem: FC<NavigationProps> = ({ children, active, number, href, __fakeHover }) => {
  const classes = classNames("uppercase", "text-white", {
    active: active === true,
    "fake-hover": __fakeHover != null,
  });
  return (
    <li className={classes}>
      <Link href={href}>
        <a tabIndex={0} className="flex letter-spacing-md">
          <span className={styles.number}>{String("0" + number.toString()).slice(-2)}</span>
          {children}
          {active === true && <motion.span className="indicator" layout layoutId="header-navlink-underline" />}
          {__fakeHover != null && (
            <div className="fake-pointer" style={{ bottom: 20, right: 5 }}>
              <Image src="/assets/pointer.svg" width={30} height={30} alt="fake pointer" />
            </div>
          )}
        </a>
      </Link>
    </li>
  );
};

export default NavigationItem;
