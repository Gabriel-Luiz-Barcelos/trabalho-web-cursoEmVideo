'use client'
import { Box, Container, Grid, GridItem, Stack, Text, Heading, Image, Flex, Link } from "@chakra-ui/react";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const headingStyle = {
    fontFamily: "'Roboto', sans-serif",
    fontWeight: "700",
    fontSize: "16px",
    lineHeight: "21px",
    color: "rgb(58, 58, 58)",
    textTransform: "uppercase" as const,
    letterSpacing: "0.05em",
  };

  const linkStyle = {
    fontFamily: "'Asap', sans-serif",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "28px",
    color: "rgba(38, 28, 63, 0.6)",
    textDecoration: "none" as const,
  };

  const menuLinks = [
    { label: "Sobre", href: "https://www.cursoemvideo.com/sobre/" },
    { label: "Cursos antiga", href: "https://www.cursoemvideo.com/?page_id=201" },
    { label: "Meu Painel", href: "https://www.cursoemvideo.com/minha-conta/" },
    { label: "Blog", href: "https://www.cursoemvideo.com/blog/" },
  ];

  const blogPosts = [
    {
      label: "O que é Programação Orientada a Objetos e por que ela é importante para programadores",
      href: "https://www.cursoemvideo.com/blog/cursos-online-gratuitos/o-que-e-programacao-orientada-a-objetos-e-por-que-ela-e-importante-para-programadores/"
    },
    {
      label: "Como montar um currículo para quem quer trabalhar com programação",
      href: "https://www.cursoemvideo.com/blog/cursos-online-gratuitos/como-montar-um-curriculo-para-quem-quer-trabalhar-com-programacao/"
    },
    {
      label: "Redes de computadores para iniciantes: entenda como a internet conecta sistemas e aplicações",
      href: "https://www.cursoemvideo.com/blog/cursos-online-gratuitos/redes-de-computadores-para-iniciantes-entenda-como-a-internet-conecta-sistemas-e-aplicacoes/"
    },
    {
      label: "Programadores resolvem problemas com dados",
      href: "https://www.cursoemvideo.com/blog/cursos-online-gratuitos/programadores-resolvem-problemas-com-dados/"
    },
  ];

  const socialLinks = [
    { icon: <FaInstagram size={18} />, href: "https://www.instagram.com/accounts/login/?next=%2Fcursoemvideo%2F&source=omni_redirect" },
    { icon: <FaFacebookF size={18} />, href: "https://www.facebook.com/CursosEmVideo/" },
    { icon: <FaXTwitter size={18} />, href: "https://x.com/guanabara" },
    { icon: <FaYoutube size={18} />, href: "https://www.youtube.com/cursoemvideo" },
  ];

  return (
    <Box bg="rgb(235, 237, 240)" pt="16" pb="0">
      <Container maxW="1200px">
        <Grid templateColumns={{ base: "1fr", md: "280px 1fr 200px" }} gap="12" mb="16">
          
          {/* Coluna 1: Logo e Descrição */}
          <GridItem>
            <Stack spacing="4">
              <Image 
                src="https://www.cursoemvideo.com/wp-content/uploads/2019/08/cursoemvideo-logo.png" 
                alt="Logo Curso em Vídeo" 
                w="130px"
                objectFit="contain"
              />
              <Text
                fontFamily="'Asap', sans-serif"
                fontWeight="400"
                fontSize="14px"
                lineHeight="24px"
                color="rgba(38, 28, 63, 0.6)"
              >
                Curso em Vídeo é uma empresa brasileira legalmente estabelecida e presta serviços educacionais a distância e consultoria para empresas
              </Text>
              
              <Box mt="8">
                <Flex gap="6" justify="flex-start" mb="3" wrap="nowrap">
                  {menuLinks.slice(0, 3).map((item) => (
                    <Link 
                      key={item.label} 
                      href={item.href}
                      target="_blank"
                      fontFamily="'Asap', sans-serif"
                      fontWeight="400"
                      fontSize="18px"
                      lineHeight="33px"
                      color="rgb(38, 28, 63)"
                      textDecoration="none"
                      whiteSpace="nowrap"
                      _hover={{ color: "rgb(39, 39, 255)" }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </Flex>
                <Flex justify="center">
                  <Link 
                    href={menuLinks[3].href}
                    target="_blank"
                    fontFamily="'Asap', sans-serif"
                    fontWeight="400"
                    fontSize="18px"
                    lineHeight="33px"
                    color="rgb(38, 28, 63)"
                    textDecoration="none"
                    _hover={{ color: "rgb(39, 39, 255)" }}
                  >
                    {menuLinks[3].label}
                  </Link>
                </Flex>
              </Box>
            </Stack>
          </GridItem>

          {/* Coluna 2: Últimas do Blog */}
          <GridItem pl="8">
            <Stack spacing="4">
              <Heading {...headingStyle}>Últimas do Blog</Heading>
              <Stack spacing="3">
                {blogPosts.map((post, index) => (
                  <Link 
                    key={index} 
                    href={post.href}
                    target="_blank"
                    {...linkStyle}
                    _hover={{ color: "rgb(39, 39, 255)" }}
                  >
                    {post.label}
                  </Link>
                ))}
              </Stack>
            </Stack>
          </GridItem>

          {/* Coluna 3: Redes Sociais */}
          <GridItem>
            <Stack spacing="4" align="center">
              <Heading {...headingStyle}>Acompanhe</Heading>
              <Flex gap="3">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    w="36px"
                    h="36px"
                    borderRadius="full"
                    bg="rgba(38, 28, 63, 0.1)"
                    color="rgba(38, 28, 63, 0.5)"
                    _hover={{ bg: "#2222FF", color: "white" }}
                    transition="all 0.2s"
                  >
                    {social.icon}
                  </Link>
                ))}
              </Flex>
            </Stack>
          </GridItem>

        </Grid>
      </Container>

      {/* Faixa inferior */}
      <Box borderTop="1px solid rgba(0,0,0,0.05)" py="6" bg="rgb(225, 227, 230)">
        <Text 
          textAlign="center" 
          fontFamily="'Asap', sans-serif" 
          fontSize="12px" 
          fontWeight="700" 
          color="rgb(38, 28, 63)"
          textTransform="uppercase"
        >
          Quer um site igual a este? <Link href="https://www.hostnet.com.br/" target="_blank" color="rgb(39, 39, 255)" fontWeight="700">Acesse Hostnet Internet</Link>
        </Text>
      </Box>
    </Box>
  );
}