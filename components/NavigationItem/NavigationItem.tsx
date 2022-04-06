import classNames from "classnames";
import { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./NavigationItem.module.scss";
import { useRouter } from "next/router";

interface NavigationProps {
  href: string;
  position: number;
}

const NavigationItem: FC<NavigationProps> = ({ children, position, href }) => {
  const router = useRouter();
  const active = router.pathname === href;
  const classes = classNames("uppercase", "text-white", {
    active: active === true,
  });
  return (
    <li className={classes}>
      <Link href={href}>
        <a tabIndex={0} className="flex letter-spacing-md">
          <span className={styles.number}>{String("0" + position.toString()).slice(-2)}</span>
          {children}
          {active === true && <motion.span className="indicator" layout layoutId="header-navlink-underline" />}
        </a>
      </Link>
    </li>
  );
};

export default NavigationItem;
