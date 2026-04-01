'use client'
import { Box, Flex, Heading, Text, Button, Image, Container, Stack } from '@chakra-ui/react';

export default function Hero() {
  return (
    <Box 
      bg="#2222FF" 
      py="80px"
      backgroundImage="url('/fundo08.jpg')"
      backgroundRepeat="no-repeat"
      backgroundPosition="right center"
      backgroundSize="cover"
      backgroundAttachment="local"
    >
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
              fontSize="80px"
              lineHeight="82px"
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

            <Button 
              bg="transparent" 
              color="white"
              size="lg" 
              borderRadius="full" 
              px="10" 
              h="50px"
              fontSize="18px"
              fontFamily="var(--font-asap), sans-serif"
              fontWeight="700"
              border="1.5px solid white"
              transition="all 0.2s"
              _hover={{ 
                bg: "rgb(252, 252, 252)",
                color: "#2222FF",
                transform: "translateY(-2px)"
              }}
              _active={{
                bg: "rgba(255, 255, 255, 0.8)",
                transform: "translateY(2px)",
              }}
              w="fit-content"
            >
              Começar!
            </Button>
          </Stack>

          {/* Lado Direito: Imagem do Guanabara */}
          <Box mt={{ base: 10, md: 0 }} alignSelf="flex-end">
             <Image 
               src="https://www.cursoemvideo.com/wp-content/uploads/2019/08/guana6.png" 
               alt="Gustavo Guanabara"
               maxW="680px"
               objectFit="contain"
               mb="-80px"
             />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}