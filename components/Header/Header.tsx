import { AnimateSharedLayout } from "framer-motion";
import { FC } from "react";
import Container from "../Container";
import Logo from "../Logo";
import Navigation from "../Navigation";
import NavigationItem from "../NavigationItem";
import styles from "./Header.module.scss";

interface NavData {
  text: string;
  href: string;
}

const navigationData: NavData[] = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Destination",
    href: "/destination",
  },
  {
    text: "Crew",
    href: "/crew",
  },
  {
    text: "Technology",
    href: "/technology",
  },
];

const Header: FC = () => {
  return (
    <AnimateSharedLayout>
      <Container type="grid" component="header" className={styles.wrapper}>
        <Logo className={styles.logo} />
        <div className={styles.line} />
        <Navigation>
          {navigationData.map((navItem, navItemIdx) => {
            return (
              <NavigationItem key={navItemIdx} href={navItem.href} position={navItemIdx + 1}>
                {navItem.text}
              </NavigationItem>
            );
          })}
        </Navigation>
      </Container>
    </AnimateSharedLayout>
  );
};

export default Header;
