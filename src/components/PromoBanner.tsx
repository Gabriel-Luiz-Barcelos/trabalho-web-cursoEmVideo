'use client'
import { Box, Container, Flex, Text, Button, Image, VStack } from '@chakra-ui/react';

export default function PromoBanner() {
  return (
    <Box 
      bg="rgb(28, 0, 81)" // Cor de fundo azul muito escura conforme imagens
      py="12"
      position="relative"
      overflow="hidden"
    >
      <Container maxW="1200px">
        <VStack spacing={6} align="center">
          {/* Logo Estudonauta - Parâmetros exatos solicitados */}
          <Image 
            src="https://www.cursoemvideo.com/wp-content/uploads/2019/08/logo-01.png" 
            alt="Logo Estudonauta"
            w="250px" 
            h="45px"
            objectFit="contain"
          />

          {/* Selo Vagas Abertas - Fundo com opacidade conforme imagem 3 */}
          <Box 
            bg="rgba(255, 255, 255, 0.15)" // Fundo levemente diferente/claro
            px="6" 
            py="2" 
            borderRadius="md"
          >
            <Text
              fontFamily="'Asap', sans-serif" // Parâmetros solicitados
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

          {/* Texto de Chamada */}
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

          {/* Botão Conhecer - Fundo Branco conforme imagem 11 */}
          <Button
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

      {/* Ilustração opcional ao fundo à direita (foguete) conforme imagem 10 */}
      <Image 
        src="https://www.estudonauta.com/wp-content/uploads/2022/12/foguete-background.png" 
        position="absolute"
        right="0"
        bottom="0"
        h="100%"
        opacity="0.4"
        zIndex="0"
        pointerEvents="none"
        display={{ base: "none", lg: "block" }}
      />
    </Box>
  );
}