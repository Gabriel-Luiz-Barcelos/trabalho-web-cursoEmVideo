'use client'
import { Box, Container, SimpleGrid, Stack, Text, Heading, Image, Flex, Link } from "@chakra-ui/react";

export default function Footer() {
  // Parâmetros solicitados: Asap, 18px, rgb(38, 28, 63)
  const bodyTextStyle = {
    fontFamily: "'Asap', sans-serif",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "33px",
    color: "rgb(38, 28, 63)",
  };

  // Parâmetros solicitados: Roboto, 16px, rgb(58, 58, 58)
  const headingStyle = {
    fontFamily: "'Roboto', sans-serif",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "21px",
    color: "rgb(58, 58, 58)",
    textTransform: "uppercase" as const,
  };

  return (
    <Box bg="rgb(235, 237, 240)" pt="16" pb="0">
      <Container maxW="1200px">
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing="12" mb="16">
          
          {/* Coluna 1: Logo e Descrição */}
          <Stack spacing="8">
            <Image 
              src="https://www.cursoemvideo.com/wp-content/uploads/2019/07/logo-cursoemvideo.png" 
              alt="Logo Curso em Vídeo" 
              w="160px"
            />
            <Text {...bodyTextStyle}>
              Curso em Vídeo é uma empresa brasileira legalmente estabelecida e presta serviços educacionais a distância e consultoria para empresas
            </Text>
            <Flex wrap="wrap" gap="6">
              {["Sobre", "Cursos antiga", "Meu Painel", "Blog"].map((item) => (
                <Link key={item} {...bodyTextStyle} _hover={{ color: "rgb(39, 39, 255)" }}>
                  {item}
                </Link>
              ))}
            </Flex>
          </Stack>

          {/* Coluna 2: Últimas do Blog */}
          <Stack spacing="6">
            <Heading {...headingStyle}>Últimas do Blog</Heading>
            <Stack spacing="4">
              {[
                "O que é Programação Orientada a Objetos e por que ela é importante para programadores",
                "Como montar um currículo para quem quer trabalhar com programação",
                "Redes de computadores para iniciantes: entenda como a internet conecta sistemas e aplicações",
                "Programadores resolvem problemas com dados"
              ].map((post, index) => (
                <Link key={index} {...bodyTextStyle} _hover={{ opacity: 0.7 }}>
                  {post}
                </Link>
              ))}
            </Stack>
          </Stack>

          {/* Coluna 3: Acompanhe */}
          <Stack spacing="6" align={{ base: "flex-start", md: "flex-end" }}>
            <Heading {...headingStyle}>Acompanhe</Heading>
            <Flex gap="4">
              {/* Círculos representando as redes sociais para evitar erro de ícones externos */}
              {["I", "F", "X", "Y"].map((social) => (
                <Flex 
                  key={social}
                  w="35px" h="35px" 
                  bg="rgba(38, 28, 63, 0.1)" 
                  borderRadius="full" 
                  align="center" justify="center"
                  color="rgb(38, 28, 63)"
                  fontWeight="bold"
                  fontSize="12px"
                  _hover={{ bg: "rgb(39, 39, 255)", color: "white" }}
                  cursor="pointer"
                >
                  {social}
                </Flex>
              ))}
            </Flex>
          </Stack>
        </SimpleGrid>
      </Container>

      {/* Barra Final Hostnet */}
      <Box borderTop="1px solid rgba(0,0,0,0.05)" py="6" bg="rgb(225, 227, 230)">
        <Text 
          textAlign="center" 
          fontFamily="'Asap', sans-serif" 
          fontSize="12px" 
          fontWeight="700" 
          color="rgb(38, 28, 63)"
          textTransform="uppercase"
        >
          Quer um site igual a este? <Link color="rgb(39, 39, 255)" href="#" fontWeight="700">Acesse Hostnet Internet</Link>
        </Text>
      </Box>
    </Box>
  );
}