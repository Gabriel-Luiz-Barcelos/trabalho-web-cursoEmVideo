'use client'
import { Box, Flex, Heading, Text, Button, Image, Container, Stack } from '@chakra-ui/react';

export default function Hero() {
  return (
    <Box bg="#2222FF" py="80px">
      <Container maxW="1200px">
        <Flex 
          align="center" 
          justify="space-between" 
          direction={{ base: "column", md: "row" }}
        >
          
          {/* Lado Esquerdo: Textos */}
          <Stack gap="6" maxW="600px">
            <Heading 
              fontFamily="var(--font-roboto), sans-serif"
              fontWeight="700"
              fontSize="110px"
              lineHeight="88px"
              color="rgb(0, 229, 252)"
            >
              Paixão por <br /> 
              <Box as="span" color="rgb(252, 252, 252)">ensinar.</Box>
            </Heading>
            <Text 
              fontFamily="var(--font-asap), sans-serif"
              color="white"
              fontSize="20px"
              maxW="450px"
            >
              Estude gratuitamente e aprenda com conteúdo e professores de qualidade.
            </Text>

            {/* BOTÃO COM HOVER RGB(252, 252, 252) */}
            <Button 
              bg="#2222FF" 
              color="white"
              size="lg" 
              borderRadius="full" 
              px="12" 
              h="60px"
              fontSize="20px"
              fontFamily="var(--font-asap), sans-serif"
              fontWeight="700"
              border="2px solid white"
              borderBottom="4px solid rgba(0, 0, 0, 0.2)"
              transition="all 0.2s"
              _hover={{ 
                bg: "rgb(252, 252, 252)", // Cor solicitada para o hover
                color: "#2222FF", // Inverte a cor do texto para manter legível
                transform: "translateY(-2px)"
              }}
              _active={{
                bg: "rgba(255, 255, 255, 0.8)",
                transform: "translateY(2px)",
                borderBottomWidth: "0px"
              }}
              w="fit-content"
            >
              Começar!
            </Button>
          </Stack>

          {/* Lado Direito: Imagem do Guanabara */}
          <Box mt={{ base: 10, md: 0 }}>
             <Image 
               src="https://www.cursoemvideo.com/wp-content/uploads/2019/08/guana6.png" 
               alt="Gustavo Guanabara"
               maxW="550px"
               objectFit="contain"
             />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}