'use client'
import { Box, Flex, Image, HStack, Link } from '@chakra-ui/react';

export default function Header() {
  const menuStyle = {
    fontFamily: 'var(--font-asap), sans-serif',
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "33px",
    color: "white", // Mudado para branco
    _hover: { color: "rgb(0, 229, 252)", textDecoration: "none" }, // Hover no azul ciano do título
    transition: "all 0.2s"
  };

  return (
    <Box 
      as="nav" 
      bg="#2222FF" // Fundo azul vibrante igual ao Hero
      px="8" 
      py="4" 
      borderBottom="1px solid" 
      borderColor="rgba(255,255,255,0.1)" // Borda sutil para separar do Hero
      position="sticky"
      top="0"
      zIndex="1000"
    >
      <Flex align="center" maxW="1200px" mx="auto" justify="space-between">
        {/* Logo do Curso em Vídeo */}
        <Image 
          src="https://www.cursoemvideo.com/wp-content/uploads/2019/08/cursoemvideo-logo.png" 
          alt="Curso em Vídeo"
          h="50px" 
          filter="brightness(0) invert(1)" // Truque de CSS para deixar a logo branca, se necessário
        />
        
        <HStack gap="5" flexWrap="wrap">
          {[
            "Cursos", 
            "Sobre", 
            "Assine", 
            "Patrocine", 
            "Blog", 
            "Login", 
            "Cadastre-se", 
            "Validação de Certificado", 
            "Hall da Fama"
          ].map((item) => (
            <Link key={item} {...menuStyle} href="#">
              {item}
            </Link>
          ))}
        </HStack>
      </Flex>
    </Box>
  );
}