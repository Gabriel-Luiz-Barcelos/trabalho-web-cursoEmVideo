'use client'
import { Box, Container, Flex, Heading, Image, Button } from '@chakra-ui/react';

export default function InstitutionalSupport() {
  const partners = [
    { name: "Hostnet", src: "https://www.cursoemvideo.com/wp-content/uploads/2019/07/apoiador-hostnet.png" },
    { name: "Estudonauta", src: "https://www.cursoemvideo.com/wp-content/uploads/2019/07/apoiador-estudonauta.png" },
    { name: "Recode", src: "https://www.cursoemvideo.com/wp-content/uploads/2019/07/apoiador-recode.png" },
    { name: "Asus", src: "https://www.cursoemvideo.com/wp-content/uploads/2019/07/Asus.png" },
    { name: "FEC", src: "https://www.cursoemvideo.com/wp-content/uploads/2019/07/FEC-logo.png" },
  ];

  return (
    <Box bg="rgb(245, 245, 245)" py="12">
      <Container maxW="1200px">
        {/* Título da Seção */}
        <Heading
          fontFamily="'Catamaran', sans-serif"
          fontWeight="700"
          fontSize="16px"
          lineHeight="21px"
          color="rgba(64, 57, 81, 0.63)"
          textTransform="uppercase"
          mb="10"
        >
          Apoio Institucional
        </Heading>

        {/* Grid de Logotipos */}
        <Flex 
          justify="space-between" 
          align="center" 
          wrap="wrap" 
          gap={{ base: 10, md: 4 }}
          mb="8"
        >
          {partners.map((partner) => (
            <Image
              key={partner.name}
              src={partner.src}
              alt={partner.name}
              maxH="50px"
              objectFit="contain"
              opacity="0.8"
            />
          ))}
        </Flex>

        {/* Botão Seja um Apoiador - Alinhado à direita conforme imagem 13 */}
        <Flex justify="flex-end" mt="4">
          <Button
            variant="outline"
            borderColor="rgba(0, 0, 0, 0.1)"
            borderRadius="4px"
            bg="transparent"
            color="rgba(64, 57, 81, 0.63)"
            fontSize="14px"
            fontWeight="400"
            px="6"
            h="40px"
            textTransform="uppercase"
            _hover={{
              bg: "white",
              borderColor: "rgba(0, 0, 0, 0.2)"
            }}
          >
            Seja um apoiador institucional
          </Button>
        </Flex>
      </Container>
    </Box>
  );
}