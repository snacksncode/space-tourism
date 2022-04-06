import type { NextPage } from "next";
import Head from "next/head";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import LargeButton from "@/components/LargeButton";
import styles from "@/styles/Home.module.scss";
import Column from "@/components/Column";
import PageBackground from "@/components/PageBackground";

// Static Background Import
import smallBackground from "../public/assets/home/background-home-mobile.jpg";
import mediumBackground from "../public/assets/home/background-home-tablet.jpg";
import bigBackground from "../public/assets/home/background-home-desktop.jpg";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Space Tourism</title>
        <meta name="description" content="Do you want to travel to Space?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageBackground
        images={{
          sm: smallBackground,
          md: mediumBackground,
          lg: bigBackground,
        }}
      />
      <Container className={styles.container} type="grid">
        <Column className={styles.left} position="left">
          <Heading className={styles.heading} level={1} forceStyleLevel={5}>
            So, you want to travel to <Heading forceStyleLevel={1}>Space</Heading>
          </Heading>
          <Paragraph className={styles.desc} color="accent">
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind
            of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
          </Paragraph>
        </Column>
        <Column className={styles.right} position="right">
          <LargeButton href="#">Explore</LargeButton>
        </Column>
      </Container>
    </>
  );
};

export default Home;
