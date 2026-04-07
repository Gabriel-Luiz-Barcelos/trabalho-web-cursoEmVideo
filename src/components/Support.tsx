'use client'
import { Box, Container, Flex, Heading, Text, Button, Image, Stack } from '@chakra-ui/react';
import { useState } from 'react';

export default function Support() {
  const testimonials = [
    {
      nome: "Francisco Sergio",
      texto: '"Parabéns professor, vc e sua equipe fazem um trabalho maravilhoso e de ótima qualidade. Patrocínio merecido. Espero que outras empresas siga o exemplo do youtube e da Hostnet e patrocinem o canal cada vez mais. Foi através do seu canal que me apaixonei pela programação. Obrigado por tudo!"'
    },
    {
      nome: "Alexandre Domingues",
      texto: '"Parabéns a equipe do curso em video, vcs são a referência em aprender programação no Brasil."'
    },
    {
      nome: "Angelo Coelho",
      texto: '"Começo a entender que grandes empresas ou grandes metas se constroem aos poucos ao decorrer dos anos. Vejo quanta qualidade e quanta dedicação foi aumentando no "CursoemVideo". Todos teus alunos lembrarão do Senhor Guanabara! Gracias!"'
    }
  ];

  const [index, setIndex] = useState(0);

  return (
    <Box bg="white" py="20">
      <Container maxW="1200px">
        {/* SEÇÃO SUPERIOR: APOIADOR */}
        <Flex align="center" justify="space-between" direction={{ base: "column", md: "row" }} mb="40">
          <Stack flex="1" gap="6" textAlign={{ base: "center", md: "left" }} pl={{ md: "10" }}>
            <Heading fontFamily="'Roboto', sans-serif" fontWeight="700" fontSize="40px" lineHeight="40px" color="rgb(28, 0, 81)">
              Seja um Gafanhoto <br /> apoiador
            </Heading>
            <Text fontFamily="var(--font-asap), sans-serif" fontSize="20px" color="rgb(38, 28, 63)">
              Ajude o Curso em Vídeo a continuar <br /> produzindo ainda mais!
            </Text>
            <Button 
              as="a"
              href="https://www.cursoemvideo.com/apoie/"
              target="_blank"
              bg="white" 
              color="#2222FF" 
              border="2px solid #2222FF" 
              borderRadius="full" 
              px="10" 
              h="54px" 
              fontSize="18px" 
              fontWeight="700" 
              _hover={{ bg: "#2222FF", color: "white", transform: "translateY(-2px)" }} 
              transition="all 0.3s" 
              w="fit-content" 
              alignSelf={{ base: "center", md: "flex-start" }}
            >
              Quero ser um Apoiador!
            </Button>
          </Stack>
          <Box flex="1" display="flex" justifyContent="center">
            <Image src="https://www.cursoemvideo.com/wp-content/uploads/2019/08/Ativo-11.png" alt="Apoio" maxW="480px" objectFit="contain" />
          </Box>
        </Flex>
      </Container>

      {/* SEÇÃO INFERIOR: fora do container para ocupar largura total */}
      <Flex align="stretch" direction={{ base: "column", md: "row" }}>
        
        {/* Lado esquerdo: 50% */}
        <Box 
          w={{ base: "100%", md: "50%" }} 
          display="flex" 
          alignItems="center" 
          justifyContent="center"
          py="20"
          px="16"
        >
          <Box maxW="320px">
            <Heading 
              fontFamily="var(--font-catamaran), sans-serif" 
              fontWeight="700" 
              fontSize="40px" 
              lineHeight="48px" 
              color="rgb(28, 0, 81)"
            >
              Mensagens que tornam o nosso dia mais feliz 💙
            </Heading>
          </Box>
        </Box>

        {/* Card de Depoimento: 50% com bordas arredondadas */}
        <Box 
          w={{ base: "100%", md: "50%" }}
          bg="#D7F8F9"
          p="16"
          h="500px"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          borderRadius="3xl"
        >
          {/* Conteúdo centralizado verticalmente */}
          <Box flex="1" display="flex" flexDirection="column" justifyContent="center" gap="6">
            <Text 
              fontFamily="'Roboto', sans-serif"
              fontWeight="700" 
              color="rgb(58, 58, 58)" 
              fontSize="18px"
              lineHeight="23px"
            >
              {testimonials[index].nome}
            </Text>

            <Text 
              fontFamily="var(--font-asap), sans-serif"
              fontWeight="400"
              fontSize="20px" 
              color="rgb(38, 28, 63)" 
              lineHeight="36px"
            >
              {testimonials[index].texto}
            </Text>
          </Box>
          
          {/* Dots na parte inferior centralizados */}
          <Flex gap="3" w="100%" justify="center" pt="6">
            {testimonials.map((_, i) => (
              <Box 
                key={i}
                onClick={() => setIndex(i)}
                cursor="pointer"
                w="12px" 
                h="12px" 
                borderRadius="full" 
                bg={index === i ? "#2222FF" : "gray.300"} 
                transition="0.3s"
              />
            ))}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}