'use client'
import { Box, Container, Flex, Heading, Text, Button, Image, Stack, VStack } from '@chakra-ui/react';
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
      texto: '“Começo a entender que grandes empresas ou grandes metas se constroem aos poucos ao decorrer dos anos. Vejo quanta qualidade e quanta dedicação foi aumentando no "CursoemVideo". Todos teus alunos lembrarão do Senhor Guanabara! Gracias!"'
    }
  ];

  const [index, setIndex] = useState(1);

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
            <Button bg="white" color="#2222FF" border="2px solid #2222FF" borderRadius="full" px="10" h="54px" fontSize="18px" fontWeight="700" _hover={{ bg: "#2222FF", color: "white", transform: "translateY(-2px)" }} transition="all 0.3s" w="fit-content" alignSelf={{ base: "center", md: "flex-start" }}>
              Quero ser um Apoiador!
            </Button>
          </Stack>
          <Box flex="1" display="flex" justifyContent="center">
            <Image src="https://www.cursoemvideo.com/wp-content/uploads/2019/08/Ativo-11.png" alt="Apoio" maxW="480px" objectFit="contain" />
          </Box>
        </Flex>

        {/* SEÇÃO INFERIOR: MENSAGENS */}
        <Flex align="center" justify="space-between" direction={{ base: "column", md: "row" }} gap="10">
          
          <Box maxW="450px" textAlign={{ base: "center", md: "left" }} pl={{ md: "14" }}>
            <Heading 
              fontFamily="var(--font-catamaran), sans-serif" 
              fontWeight="700" 
              fontSize="40px" 
              lineHeight="48px" 
              color="rgb(28, 0, 81)"
            >
              Mensagens que <br /> tornam o nosso <br /> dia mais feliz 💙
            </Heading>
          </Box>

          {/* Card de Depoimento */}
          <Box 
            bg="#D7F8F9"
            p="12" 
            borderRadius="3xl" 
            flex="1" 
            maxW="650px" 
            minH="380px" 
            display="flex"
            flexDirection="column"
            justifyContent="center"
            boxShadow="sm"
          >
            <VStack align="start" gap="4" h="100%">
              {/* Nome do Aluno - Parâmetros Roboto */}
              <Text 
                fontFamily="'Roboto', sans-serif"
                fontWeight="700" 
                color="rgb(58, 58, 58)" 
                fontSize="18px"
                lineHeight="23px"
              >
                {testimonials[index].nome}
              </Text>

              {/* Texto do Comentário - Parâmetros Asap */}
              <Text 
                fontFamily="var(--font-asap), sans-serif"
                fontWeight="400"
                fontSize="24px" 
                color="rgb(38, 28, 63)" 
                lineHeight="48px"
                fontStyle="normal"
              >
                {testimonials[index].texto}
              </Text>
              
              <Flex gap="3" mt="auto" pt="8" w="100%" justify="center">
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
            </VStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}