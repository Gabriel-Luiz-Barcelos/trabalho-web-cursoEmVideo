'use client'

import { Box, Container, Flex, Heading, Image, Button } from "@chakra-ui/react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Support from "../components/Support";
import StudentCard from "../components/StudentCard";
import PromoBanner from "../components/PromoBanner";
import InstitutionalSupport from "../components/InstitutionalSupport";
import Footer from "../components/Footer";

function CourseHighlight() {
  return (
    <Box bg="white" py="20">
      <Container maxW="1200px">
        <Flex 
          align="center" 
          justify="space-between" 
          direction={{ base: "column-reverse", md: "row" }}
          gap="20"
        >
          {/* Imagem à ESQUERDA maior */}
          <Box flex="1.2">
            <Image 
              src="https://www.cursoemvideo.com/wp-content/uploads/2019/08/Ativo-12.png" 
              alt="Tecnologia"
              w="100%"
              maxW="650px"
              h="auto"
              objectFit="contain"
            />
          </Box>

          {/* Texto à DIREITA */}
          <Box flex="0.8" textAlign={{ base: "center", md: "left" }}>
            <Heading 
              fontFamily="var(--font-catamaran), sans-serif"
              fontWeight="700"
              fontSize="40px"
              lineHeight="48px"
              color="rgb(38, 28, 63)"
              mb="8"
            >
              Cursos de <br />
              Tecnologia <br />
              <Box as="span" color="rgb(39, 39, 255)">gratuitos</Box> e de <br />
              qualidade.
            </Heading>

            <Button 
              as="a"
              href="https://www.cursoemvideo.com/cursos/"
              target="_blank"
              bg="#2222FF" 
              color="white"
              borderRadius="full"
              px="10"
              h="50px"
              fontSize="18px"
              fontFamily="var(--font-asap), sans-serif"
              fontWeight="700"
              _hover={{ 
                bg: "rgb(38, 28, 63)",
                transform: "translateY(-2px)" 
              }}
              transition="all 0.2s"
            >
              Conhecer
            </Button>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default function Home() {
  return (
    <Box as="main" minH="100vh" bg="white">
      <Header />
      <Hero />
      <CourseHighlight />
      <Support />
      <StudentCard />
      <PromoBanner />
      <InstitutionalSupport />
      <Footer />
    </Box>
  );
}