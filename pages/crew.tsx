import Column from "@/components/Column";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import { NextPage } from "next";
import Head from "next/head";

const Crew: NextPage = () => {
  return (
    <>
      <Head>
        <title>Crew | Space Tourism</title>
        <meta name="description" content="Do you want to travel to Space?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container type="grid">
        <Column position="left">
          <Heading level={3}>Crew</Heading>
        </Column>
        <Column position="right">
          <Heading>Column Right</Heading>
        </Column>
      </Container>
    </>
  );
};

export default Crew;
