'use client'

import { Box, Flex, Heading, Text, Button, Image, Input, Stack } from '@chakra-ui/react';

export default function Hero() {
  return (
    <Box bg="#F7F2E9" pt="20" pb="10">
      <Flex 
        direction={{ base: 'column', md: 'row' }} 
        align="center" 
        justify="space-between" 
        maxW="1200px" 
        mx="auto" 
        px="4"
      >
        
        {/* Lado Esquerdo: Texto e Form */}
        <Stack gap="6" maxW="550px">
          <Heading as="h1" size="4xl" fontWeight="bold" lineHeight="1.1" color="#2D3748">
            Planos de bem-estar que os colaboradores adoram
          </Heading>
          <Text fontSize="lg" color="gray.600">
            O Wellhub gera engajamento real, conectando os colaboradores a opções para atividade física, mindfulness, nutrição e qualidade do sono.
          </Text>

          {/* Simulação do Card de Empresas */}
          <Box bg="white" p="6" borderRadius="2xl" boxShadow="sm" border="1px solid" borderColor="gray.100">
            <Text fontWeight="bold" color="#D53F8C" fontSize="xl" mb="4">Para empresas</Text>
            <Input placeholder="E-mail corporativo" size="lg" mb="4" borderRadius="full" />
            <Button bg="#D53F8C" color="white" w="full" size="lg" borderRadius="full" _hover={{ bg: '#b83279' }}>
              Solicitar cotação gratuita
            </Button>
          </Box>
        </Stack>

        {/* Lado Direito: Imagem do Celular */}
        <Box mt={{ base: "10", md: "0" }}>
          <Image 
            src="/celular-hero.png" 
            alt="App Wellhub" 
            maxW="450px" 
          />
        </Box>

      </Flex>
    </Box>
  );
}