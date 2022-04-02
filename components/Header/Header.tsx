import { FC } from "react";
import Container from "../Container";
import Logo from "../Logo";
import Navigation from "../Navigation";
import NavigationItem from "../NavigationItem";
import styles from "./Header.module.scss";
import { AnimateSharedLayout } from "framer-motion";

interface NavData {
  text: string;
  href: string;
}

interface Props {
  activeIndex: number;
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

const Header: FC<Props> = ({ activeIndex }) => {
  return (
    <Container type="grid" component="header" className={styles.wrapper}>
      <Logo className={styles.logo} />
      <div className={styles.line} />
      <Navigation>
        {navigationData.map((navItem, navItemIdx) => {
          return (
            <NavigationItem
              key={navItemIdx}
              active={navItemIdx === activeIndex}
              href={navItem.href}
              number={navItemIdx + 1}
            >
              {navItem.text}
            </NavigationItem>
          );
        })}
      </Navigation>
    </Container>
  );
};

export default Header;
