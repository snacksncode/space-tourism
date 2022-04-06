import { CSSProperties, FC, useEffect, useState } from "react";
import classNames from "classnames";
import styles from "./Navigation.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";

interface NavigationProps {
  className?: string;
  gap?: number;
}

const Navigation: FC<NavigationProps> = ({ className, children, gap }) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const router = useRouter();
  const navClasses = classNames(styles.wrapper, {
    [className as string]: className != null,
  });
  const toggleMenu = () => setMenuOpened((s) => !s);
  const ulClasses = classNames(styles.inner, "ff-sans-cond", "flex", "underline-indicators");

  useEffect(() => {
    const handleRouteChange = (_url: string) => setMenuOpened(false);
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  return (
    <nav className={navClasses}>
      <button onClick={toggleMenu} className={styles["menu-toggle"]}>
        <span className="sr-only">Menu Toggle</span>
        {menuOpened ? (
          <Image src="/assets/shared/icon-close.svg" priority alt="" width={21} height={21} />
        ) : (
          <Image src="/assets/shared/icon-hamburger.svg" priority alt="" width={24} height={21} />
        )}
      </button>
      <ul style={gap != null ? ({ "--gap": `${gap}rem` } as CSSProperties) : {}} className={ulClasses}>
        {children}
      </ul>
    </nav>
  );
};

export default Navigation;
