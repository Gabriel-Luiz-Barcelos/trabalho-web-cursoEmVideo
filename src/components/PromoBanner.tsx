'use client'
import { Box, Container, Text, Button, Image, VStack } from '@chakra-ui/react';

export default function PromoBanner() {
  return (
    <Box 
      bg="rgb(28, 0, 81)"
      py="12"
      position="relative"
      overflow="hidden"
      backgroundImage="url('/banner-estudonauta8.jpg')"
      backgroundRepeat="no-repeat"
      backgroundPosition="right bottom"
      backgroundSize="contain"
    >
      <Container maxW="1200px" position="relative" zIndex="1">
        <VStack gap={6} align="center">
          <Image 
            src="https://www.cursoemvideo.com/wp-content/uploads/2019/08/logo-01.png" 
            alt="Logo Estudonauta"
            w="250px" 
            h="45px"
            objectFit="contain"
          />

          <Box 
            bg="rgba(255, 255, 255, 0.15)"
            px="6" 
            py="2" 
            borderRadius="md"
          >
            <Text
              fontFamily="'Asap', sans-serif"
              fontStyle="normal"
              fontWeight="800"
              fontSize="20px"
              lineHeight="37px"
              color="rgb(255, 255, 255)"
              textTransform="uppercase"
            >
              Vagas Abertas por Tempo Limitado
            </Text>
          </Box>

          <Text
            fontFamily="'Asap', sans-serif"
            fontWeight="400"
            fontSize="20px"
            color="white"
            textAlign="center"
          >
            Não encontrou o curso que procura? Amplie ainda mais seus <br />
            conhecimentos com o Estudonauta!
          </Text>

          <Button
            as="a"
            href="https://www.estudonauta.com/"
            target="_blank"
            bg="white"
            color="rgb(28, 0, 81)"
            borderRadius="full"
            px="12"
            h="54px"
            fontSize="20px"
            fontWeight="700"
            _hover={{ 
              bg: "gray.100",
              transform: "scale(1.05)"
            }}
            transition="all 0.2s"
          >
            Conhecer
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}