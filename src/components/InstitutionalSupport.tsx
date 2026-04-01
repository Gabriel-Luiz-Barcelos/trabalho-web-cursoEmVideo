'use client'
import { Box, Container, Flex, Heading, Image, Button, Link } from '@chakra-ui/react';

export default function InstitutionalSupport() {
  const partners = [
    { name: "Hostnet", src: "https://www.cursoemvideo.com/wp-content/uploads/2019/07/apoiador-hostnet.png", href: "https://www.hostnet.com.br/" },
    { name: "Estudonauta", src: "https://www.cursoemvideo.com/wp-content/uploads/2019/07/apoiador-estudonauta.png", href: "https://www.estudonauta.com/" },
    { name: "Recode", src: "https://www.cursoemvideo.com/wp-content/uploads/2019/07/apoiador-recode.png", href: "https://recode.org.br/" },
    { name: "Asus", src: "https://www.cursoemvideo.com/wp-content/uploads/2019/07/Asus.png", href: "https://www.asus.com/br/laptops/for-home/all-series/?utm_source=cursoemvideo&utm_medium=partner&utm_id=influencer" },
    { name: "FEC", src: "https://www.cursoemvideo.com/wp-content/uploads/2019/07/FEC-logo.png", href: "https://www.souestudante.tech/" },
  ];

  return (
    <Box bg="rgb(245, 245, 245)" py="12">
      <Container maxW="1200px">
        <Heading
          fontFamily="'Catamaran', sans-serif"
          fontWeight="700"
          fontSize="16px"
          lineHeight="21px"
          color="rgba(64, 57, 81, 0.63)"
          textTransform="uppercase"
          mb="10"
        >
          Apoio Institucional
        </Heading>

        <Flex 
          justify="space-between" 
          align="center" 
          wrap="wrap" 
          gap={{ base: 10, md: 4 }}
          mb="8"
        >
          {partners.map((partner) => (
            <Link key={partner.name} href={partner.href} target="_blank">
              <Image
                src={partner.src}
                alt={partner.name}
                maxH="50px"
                objectFit="contain"
                opacity="0.8"
                _hover={{ opacity: 1 }}
                transition="0.2s"
              />
            </Link>
          ))}
        </Flex>

        <Flex justify="flex-end" mt="4">
          <Button
            as="a"
            href="https://www.cursoemvideo.com/seja-um-patrocinador/"
            target="_blank"
            variant="outline"
            borderColor="rgba(0, 0, 0, 0.1)"
            borderRadius="4px"
            bg="transparent"
            color="rgba(64, 57, 81, 0.63)"
            fontSize="14px"
            fontWeight="400"
            px="6"
            h="40px"
            textTransform="uppercase"
            _hover={{
              bg: "white",
              borderColor: "rgba(0, 0, 0, 0.2)"
            }}
          >
            Seja um apoiador institucional
          </Button>
        </Flex>
      </Container>
    </Box>
  );
}