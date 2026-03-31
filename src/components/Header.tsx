'use client'

import { Box, Flex, Image, Button, Link, HStack, Popover } from '@chakra-ui/react';

export default function Header() {
  return (
    <Box as="nav" bg="#F7F2E9" px="8" py="4" borderBottom="1px solid" borderColor="gray.200">
      <Flex align="center" maxW="1200px" mx="auto" justify="space-between">
        
        <HStack gap="8">
          <Image src="/logo-wellhub.png" alt="Wellhub" h="30px" />

          <Link fontWeight="medium" fontSize="sm">Procurar academias e apps</Link>

          {/* Menu Planos */}
          <Popover.Root>
            <Popover.Trigger asChild>
              <Button variant="ghost" fontWeight="medium" fontSize="sm">Planos e preços</Button>
            </Popover.Trigger>
            <Popover.Content p="4" bg="white" borderRadius="xl">
                <Link display="block" py="2">Para empresas</Link>
                <Link display="block" py="2">Para colaboradores</Link>
            </Popover.Content>
          </Popover.Root>

          <Link fontWeight="medium" fontSize="sm">Para empresas</Link>

          {/* Menu Recursos */}
          <Popover.Root>
            <Popover.Trigger asChild>
              <Button variant="ghost" fontWeight="medium" fontSize="sm">Recursos</Button>
            </Popover.Trigger>
            <Popover.Content p="4" bg="white" borderRadius="xl">
                <Link display="block" fontWeight="bold">Blog</Link>
                <Link display="block" py="1">Central de Ajuda</Link>
                <Link display="block" py="1">Novidades</Link>
            </Popover.Content>
          </Popover.Root>
        </HStack>

        <HStack gap="4">
          <Button variant="ghost" fontSize="sm">Login</Button>
          <Button bg="#D53F8C" color="white" borderRadius="full" px="6" _hover={{ bg: '#b83279' }}>
            Começar
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
}