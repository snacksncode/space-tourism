import type { NextPage } from "next";
import Head from "next/head";
import Column from "@/components/Column";
import Container from "@/components/Container";
import Heading from "@/components/Heading";

const Destination: NextPage = () => {
  return (
    <>
      <Head>
        <title>Destination | Space Tourism</title>
        <meta name="description" content="Do you want to travel to Space?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container type="grid">
        <Column position="left">
          <Heading level={3}>Destination</Heading>
        </Column>
        <Column position="right">
          <Heading>Column Right</Heading>
        </Column>
      </Container>
    </>
  );
};

export default Destination;
