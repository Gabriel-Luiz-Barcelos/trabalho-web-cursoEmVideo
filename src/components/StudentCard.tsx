'use client'
import { Box, Container, Flex, Heading, Text, Button, Image, Stack } from '@chakra-ui/react';

export default function StudentCard() {
  return (
    <Box 
      bgImage="linear-gradient(90deg, #1A0DAB 0%, #2222FF 100%)" 
      py="6"
    >
      <Container maxW="1200px">
        <Flex 
          align="center" 
          justify="space-between" 
          direction={{ base: "column", md: "row" }}
        >
          <Flex align="center" gap="8">
            <Image 
              src="https://www.cursoemvideo.com/wp-content/uploads/2023/06/FEC-logo-branco.png" 
              alt="Logo FEC"
              w="135px" 
              h="29px"
              objectFit="contain"
            />

            <Box w="1px" h="50px" bg="white" opacity="0.5" />

            <Stack gap="0">
              <Heading
                fontFamily="'Roboto', sans-serif"
                fontWeight="900"
                fontSize="23px"
                lineHeight="30px"
                color="white"
              >
                Carteirinha Estudantil Física e Virtual
              </Heading>
              <Text
                fontFamily="'Asap', sans-serif"
                fontWeight="400"
                fontSize="18px"
                lineHeight="23px"
                color="white"
              >
                O documento oferece benefícios como meia entrada em cinemas, <br />
                teatros, shows e estádios. Válido em todo o território nacional.
              </Text>
            </Stack>
          </Flex>

          <Button
            as="a"
            href="https://www.souestudante.tech/"
            target="_blank"
            bg="white"
            color="rgb(28, 0, 81)"
            borderRadius="full"
            px="10"
            h="50px"
            fontSize="18px"
            fontWeight="700"
            _hover={{ bg: "gray.100" }}
          >
            Solicitar Agora
          </Button>
        </Flex>
      </Container>
    </Box>
  );
}