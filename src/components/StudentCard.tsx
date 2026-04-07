'use client'
import { Box, Container, Flex, Heading, Text, Button,Image, Link } from '@chakra-ui/react';

export default function StudentCard() {
  return (
    <Box 
      bgImage="url('https://www.cursoemvideo.com/wp-content/uploads/2023/06/bg-1.jpg')"
      bgSize="cover"
      backgroundPosition="center"
      py="12"
    >
      <Container maxW="1200px">
        <Flex 
          align="center" 
          justify="space-between" 
          direction={{ base: "column", md: "row" }}
          gap="8"
        >
          <Flex align="center" gap="8">
            <Image 
              src="https://www.cursoemvideo.com/wp-content/uploads/2023/06/FEC-logo-branco.png" 
              alt="Logo FEC"
              w="135px" 
              h="29px"
              objectFit="contain"
              alignSelf="flex-start"
            />

            {/* Traço menor */}
            <Box w="2px" h="100px" bg="white" opacity="0.7" />

            <Box>
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
            </Box>
          </Flex>

           <Link href="https://www.souestudante.tech/" target="_blank">
            <Button
              bg="white"
              color="rgb(28, 0, 81)"
              borderRadius="full"
              px="10"
              h="60px"
              fontSize="18px"
              fontWeight="700"
              _hover={{ bg: "gray.100" }}
            >
              Solicitar Agora
            </Button>
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}