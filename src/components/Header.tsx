'use client'
import { Box, Flex, Image, HStack, Link } from '@chakra-ui/react';

export default function Header() {
  const menuItems = [
    { label: "Cursos", href: "https://www.cursoemvideo.com/cursos/" },
    { label: "Sobre", href: "https://www.cursoemvideo.com/sobre/" },
    { label: "Assine", href: "https://www.cursoemvideo.com/apoie/" },
    { label: "Patrocine", href: "https://www.cursoemvideo.com/seja-um-patrocinador/" },
    { label: "Blog", href: "https://www.cursoemvideo.com/blog/" },
    { label: "Login", href: "https://www.cursoemvideo.com/login/" },
    { label: "Cadastre-se", href: "https://www.cursoemvideo.com/matricula-gratis/" },
    { label: "Validação de Certificado", href: "https://www.cursoemvideo.com/validacao-de-certificado/" },
    { label: "Hall da Fama", href: "https://www.cursoemvideo.com/hall-da-fama/" },
  ];

  const menuStyle = {
    fontFamily: 'var(--font-asap), sans-serif',
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "33px",
    color: "white",
    _hover: { color: "rgba(255, 255, 255, 0.7)", textDecoration: "none" },
    transition: "all 0.2s"
  };

  return (
    <Box 
      as="nav" 
      bg="#2222FF"
      px="8" 
      py="4" 
      borderBottom="1px solid" 
      borderColor="rgba(255,255,255,0.1)"
      position="sticky"
      top="0"
      zIndex="1000"
    >
      <Flex align="center" maxW="1200px" mx="auto" justify="space-between">
        <Image 
          src="https://www.cursoemvideo.com/wp-content/uploads/2019/08/cursoemvideo-logo.png" 
          alt="Curso em Vídeo"
          h="50px" 
          filter="brightness(0) invert(1)"
        />
        
        <HStack gap="5" flexWrap="wrap">
          {menuItems.map((item) => (
            <Link key={item.label} {...menuStyle} href={item.href} target="_blank">
              {item.label}
            </Link>
          ))}
        </HStack>
      </Flex>
    </Box>
  );
}