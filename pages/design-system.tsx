import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/DesignSystem.module.scss";
import Heading from "@/components/Heading";
import Container from "@/components/Container";
import SubHeading from "@/components/SubHeading";
import Paragraph from "@/components/Paragraph";
import Navigation from "@/components/Navigation";
import NavigationItem from "@/components/NavigationItem";

const DesignSystem: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <nav className={styles.nav}>
          <Image src="/assets/shared/logo.svg" width={48} height={48} alt="Logo" />
          <h1 className="fs-500 text-accent letter-spacing-lg ff-sans-cond uppercase">Design System</h1>
        </nav>

        <section id="colors" className="flex" style={{ marginBottom: "6rem", flexDirection: "column" }}>
          <h2 className="numbered-title">
            <span>01</span> Colors
          </h2>
          <div className="flex">
            <div className="flow" style={{ flexBasis: "100%", "--flow-spacing": "0.5rem" } as any}>
              <div
                className="bg-dark text-white ff-serif fs-500"
                style={{ paddingInline: "1rem", paddingBlock: "3rem 1rem", border: "1px solid white" }}
              >
                #0B0D17
              </div>
              <p>
                <span style={{ marginRight: "3.5rem" }} className="text-accent">
                  RGB
                </span>{" "}
                11, 13, 23
              </p>
              <p>
                <span style={{ marginRight: "3.5rem" }} className="text-accent">
                  HSL
                </span>{" "}
                230°, 35%, 7%
              </p>
            </div>
            <div className="flow" style={{ flexBasis: "100%", "--flow-spacing": "0.5rem" } as any}>
              <div
                className="bg-accent text-dark ff-serif fs-500"
                style={{
                  paddingInline: "1rem",
                  paddingBlock: "3rem 1rem",
                  border: "1px solid white",
                  borderColor: "hsl(var(--clr-accent))",
                }}
              >
                #D0D6F9
              </div>
              <p>
                <span style={{ marginRight: "3.5rem" }} className="text-accent">
                  RGB
                </span>{" "}
                208, 214, 249
              </p>
              <p>
                <span style={{ marginRight: "3.5rem" }} className="text-accent">
                  HSL
                </span>{" "}
                231°, 77%, 90%
              </p>
            </div>
            <div className="flow" style={{ flexBasis: "100%", "--flow-spacing": "0.5rem" } as any}>
              <div
                className="bg-white text-dark ff-serif fs-500"
                style={{ paddingInline: "1rem", paddingBlock: "3rem 1rem", border: "1px solid white" }}
              >
                #FFFFFF
              </div>
              <p>
                <span style={{ marginRight: "3.5rem" }} className="text-accent">
                  RGB
                </span>{" "}
                255, 255, 255
              </p>
              <p>
                <span style={{ marginRight: "3.5rem" }} className="text-accent">
                  HSL
                </span>{" "}
                0°, 0%, 100%
              </p>
            </div>
          </div>
        </section>

        <section className="flow" id="typography" style={{ marginBottom: "6rem" }}>
          <h2 className="numbered-title">
            <span>02</span> Typography
          </h2>
          <div className="flex">
            <div className="flow" style={{ flexBasis: "100%" }}>
              <div>
                <p className="text-accent">Heading 1 - Bellefair Regular - 150px</p>
                <Heading level={1}>Earth</Heading>
              </div>
              <div>
                <p className="text-accent">Heading 2 - Bellefair Regular - 100px</p>
                <Heading level={2}>Venus</Heading>
              </div>
              <div>
                <p className="text-accent">Heading 3 - Bellefair Regular - 56px</p>
                <Heading level={3}>Jupiter & Saturn</Heading>
              </div>
              <div>
                <p className="text-accent">Heading 4 - Bellefair Regular - 32px</p>
                <Heading level={4}>Uranus, Neptune, & Pluto</Heading>
              </div>
              <div>
                <p className="text-accent">Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character Space</p>
                <Heading level={5}>So, you want to travel to space</Heading>
              </div>
            </div>

            <div className="flow" style={{ flexBasis: "100%" }}>
              <div>
                <p className="text-accent">Subheading 1 - Bellefair Regular - 28px</p>
                <SubHeading level={1}>384,400 km</SubHeading>
              </div>
              <div>
                <p className="text-accent">Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character Space</p>
                <SubHeading level={2}>Avg. Distance</SubHeading>
              </div>
              <div>
                <p className="text-accent">Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space</p>
                <p className="fs-300 ff-sans-cond uppercase letter-spacing-md">Europa</p>
              </div>
              <div>
                <p style={{ color: "hsl(var(--clr-white) / 50%)" }}>Body Text</p>
                <Paragraph color="white">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet
                  nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula
                  sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam
                  mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id,
                  mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget
                  blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque,
                  aliquet vel, dapibus id, mattis vel, nisi.
                </Paragraph>
              </div>
            </div>
          </div>
        </section>

        <section
          className="flow"
          style={{ paddingBottom: "2rem", "--flow-spacing": "4rem" } as any}
          id="interactive-elements"
        >
          <h2 className="numbered-title">
            <span>03</span> Interactive elements
          </h2>

          {/* navigation */}
          <div style={{ marginTop: "2rem" }}>
            <div style={{ backgroundColor: "rgba(255,255,255, 0.04)", display: "flex", justifyContent: "center" }}>
              <Navigation>
                <NavigationItem active number={"01"}>
                  Active
                </NavigationItem>
                <NavigationItem __fakeHover number={"02"}>
                  Hovered
                </NavigationItem>
                <NavigationItem number={"03"}>Idle</NavigationItem>
              </Navigation>
            </div>
            <p style={{ marginTop: "1rem", textAlign: "center" }} className="text-accent ff-sans fs-400">
              Different States of Navigation Bar
            </p>
          </div>

          <div className="flex" style={{ alignItems: "center", justifyContent: "space-around" }}>
            <div className="flow" style={{ "--flow-spacing": "6rem" } as any}>
              {/* explore button */}
              <div>
                <a href="#" className="large-button grid center uppercase ff-serif fs-600 bg-white text-dark">
                  Explore
                </a>
                <p style={{ marginTop: "1rem" }} className="text-accent ff-sans fs-400">
                  Landing Page Main Button - Idle
                </p>
              </div>

              <div>
                <a
                  href="#"
                  data-hovered
                  className="large-button grid center uppercase ff-serif fs-600 bg-white text-dark"
                >
                  Explore
                  <div className="fake-pointer" style={{ bottom: 50, right: 30 }}>
                    <Image src="/assets/pointer.svg" width={30} height={30} alt="fake pointer" />
                  </div>
                </a>
                <p style={{ marginTop: "5rem" }} className="text-accent ff-sans fs-400">
                  Landing Page Main Button - Hover
                </p>
              </div>
            </div>

            <div className="flow" style={{ "--flow-spacing": "6rem" } as any}>
              {/* Tabs */}
              <div className="flex" style={{ flexDirection: "column" }}>
                <div role="tablist" className="tab-list flex underline-indicators" style={{ justifyContent: "center" }}>
                  <button
                    role="tab"
                    aria-selected="true"
                    className="uppercase text-accent letter-spacing-md ff-sans-cond"
                  >
                    Moon
                  </button>
                  <button
                    role="tab"
                    aria-selected="false"
                    data-hovered
                    className="uppercase text-accent letter-spacing-md ff-sans-cond"
                  >
                    Mars
                    <div className="fake-pointer">
                      <Image src="/assets/pointer.svg" width={30} height={30} alt="fake pointer" />
                    </div>
                  </button>
                  <button
                    role="tab"
                    aria-selected="false"
                    className="uppercase text-accent letter-spacing-md ff-sans-cond"
                  >
                    Europa
                  </button>
                </div>
                <p style={{ textAlign: "center" }} className="text-accent ff-sans fs-400">
                  Tabs (Active, Hover, & Idle)
                </p>
              </div>

              {/* Dots */}
              <div className="flex" style={{ flexDirection: "column" }}>
                <div role="tablist" className="dot-indicators flex" style={{ justifyContent: "center" }}>
                  <button role="tab" aria-selected="true">
                    <span className="sr-only">Slide title</span>
                  </button>
                  <button role="tab" data-hovered aria-selected="false">
                    <span className="sr-only">Slide title</span>
                    <div className="fake-pointer" style={{ bottom: -15, right: -15 }}>
                      <Image src="/assets/pointer.svg" width={30} height={30} alt="fake pointer" />
                    </div>
                  </button>
                  <button role="tab" aria-selected="false">
                    <span className="sr-only">Slide title</span>
                  </button>
                </div>
                <p style={{ textAlign: "center" }} className="text-accent ff-sans fs-400">
                  Slider 1 States (Active, Hover, & Idle)
                </p>
              </div>

              {/* Numbers */}
              <div className="flex" style={{ flexDirection: "column" }}>
                <div role="tablist" className="number-indicators ff-serif flex" style={{ alignItems: "center" }}>
                  <button role="tab" aria-selected="true">
                    1
                  </button>
                  <button role="tab" data-hovered aria-selected="false">
                    2
                    <div className="fake-pointer" style={{ bottom: 0, right: 0 }}>
                      <Image src="/assets/pointer.svg" width={30} height={30} alt="fake pointer" />
                    </div>
                  </button>
                  <button role="tab" aria-selected="false">
                    3
                  </button>
                </div>
                <p style={{ textAlign: "center" }} className="text-accent ff-sans fs-400">
                  Slider 2 States (Active, Hover, & Idle)
                </p>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default DesignSystem;
