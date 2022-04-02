import Column from "@/components/Column";
import Container from "@/components/Container";
import Header from "@/components/Header";
import Heading from "@/components/Heading";
import { NextPage } from "next";
import Head from "next/head";

const Technology: NextPage = () => {
  return (
    <>
      <Head>
        <title>Technology | Space Tourism</title>
        <meta name="description" content="Do you want to travel to Space?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header activeIndex={3} />
      <Container type="grid">
        <Column position="left">
          <Heading level={3}>Technology</Heading>
        </Column>
        <Column position="right">
          <Heading>Column Right</Heading>
        </Column>
      </Container>
    </>
  );
};

export default Technology;
