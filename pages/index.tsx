import { Box, Flex, Image } from "@chakra-ui/core";
import Head from "next/head";
import Section from "../components/Section";
import Paragraph from "../components/Text";
import Title from "../components/Title";

import AnimateOnScroll from "react-animate-on-scroll";

import { GiRetroController } from "react-icons/gi";
import { FaTrophy } from "react-icons/fa";
import { BiGame } from "react-icons/bi";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main style={{ overflow: "hidden" }}>
        <Section
          outerStyles={{
            align: "flex-start",
            h: "auto",
            minH: 600,
            bgImage: "url(./assets/4a94268541d7a0ed95a8be5138e8a288.jpg)",
            // bgAttachment: "fixed",
            bgSize: "cover",
            bgPos: "center",
          }}
          innerStyles={{
            flexDirection: "column",
          }}
        >
          <Flex align="center">
            <Box mr={4} display="inline-block" fontSize={64} color="white" as={FaTrophy} />
            <Title fontSize={64} textTransform="uppercase" color="white">
              dolor sit amet
            </Title>
          </Flex>
          <AnimateOnScroll delay={250} animateIn="fadeIn" animateOut="fadeOut" animateOnce>
            <Paragraph textShadow="1px 2px 6px #00000070" mt={4} fontSize={18} color="gray.200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut leo et purus dapibus
              efficitur.
              <br />
              Integer dolor elit, semper ac tincidunt in, varius at arcu.
              <br />
              Donec vitae feugiat magna.
            </Paragraph>
          </AnimateOnScroll>
        </Section>

        <Section
          outerStyles={{
            h: "auto",
            minH: 445,
            bg: "white",
          }}
          innerStyles={{
            align: [null, null, null, "center"],
            flexDirection: ["column", "column", "column", "row"],
          }}
        >
          <Box w={["100%", "100%", "100%", "50%"]}>
            <AnimateOnScroll animateIn="fadeIn" animateOut="fadeOut" animateOnce style={{ flex: 1 }}>
              <Title fontSize={46} textTransform="uppercase" color="black">
                Lorem ipsum
              </Title>
              <Paragraph fontSize={18} color="gray.800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent hendrerit, mi eget varius
                dictum, lacus massa cursus mauris, eget imperdiet tellus erat eu dolor. Cras ut lacus neque.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat eu tortor in viverra.
              </Paragraph>
            </AnimateOnScroll>
          </Box>

          <Flex
            mt={[8, 8, 8, 0]}
            ml={[0, 0, 0, 8]}
            align="center"
            justify="center"
            w={["100%", "100%", "100%", "50%"]}
          >
            <AnimateOnScroll
              delay={1000}
              animateIn="bounceIn"
              animateOut="zoomOut"
              animateOnce
              style={{ display: "flex", flex: 1, justifyContent: "center", alignItems: "center" }}
            >
              <Box as={GiRetroController} h="80%" w="80%" />
            </AnimateOnScroll>
          </Flex>
        </Section>

        <Section
          outerStyles={{
            h: 600,
            bgImage: "url(./assets/Flat_colorful_background.jpg)",
            // bgAttachment: "fixed",
            bgPos: "center",
            bgSize: "cover",
          }}
          innerStyles={{
            flexDirection: ["column", "column", "column", "row"],
          }}
        >
          <Flex align="center" justify="center" w={["100%", "100%", "100%", "50%"]}>
            <AnimateOnScroll
              animateIn="zoomIn"
              animateOut="fadeOutLeft"
              style={{ display: "flex", flex: 1, justifyContent: "center", alignItems: "center" }}
            >
              <Box color="yellow.300" as={BiGame} h="70%" w="70%" />
            </AnimateOnScroll>
          </Flex>

          <Flex
            direction="column"
            justify="center"
            mt={[8, 8, 8, 0]}
            ml={[0, 0, 0, 8]}
            w={["100%", "100%", "100%", "50%"]}
          >
            <AnimateOnScroll animateIn="fadeInRight" animateOut="fadeOutRight">
              <Title color="white" textTransform="uppercase" fontSize={46}>
                consectetur adipiscing elit
              </Title>
              <Paragraph fontSize={18} textShadow="1px 2px 4px #00000070" color="gray.200">
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                Duis vitae libero lacinia, molestie ipsum volutpat, maximus neque. Integer consectetur
                vestibulum metus ut aliquam. Suspendisse facilisis ac tellus at sagittis.
              </Paragraph>
            </AnimateOnScroll>
          </Flex>
        </Section>
      </main>

      <footer>
        <Flex justify="center" py={2} borderTop="1px solid" borderTopColor="black">
          <Title color="purple.500" fontSize={[30, 32, 36, 42]}>
            Powered by
          </Title>
          <Image src="/vercel.svg" alt="Vercel Logo" />
        </Flex>
      </footer>
    </div>
  );
}
