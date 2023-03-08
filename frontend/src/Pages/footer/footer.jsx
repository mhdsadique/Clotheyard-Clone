import {
    Box,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
    useColorModeValue,
    Button,
    Heading,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { BiMailSend } from 'react-icons/bi';
  
  const Logo = (props) => {
    return (
      <svg
        height={32}
        viewBox="0 0 120 28"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
      </svg>
    );
  };
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function Footer() {
    return (
      <Box  margin={"auto"} w="80%" textAlign={'center'} marginTop='100px'
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>

            <Heading size={"md"}>The history of Aeropostale fashion - 32 years and counting</Heading>
       
            <Text>Aeropostale is a readily recognizable, famous American brand that is known for its trendy clothing and accessories. The first ever Aeropostale store was opened in New York City in 1987. Aeropostale captures the essence of casual clothing and takes it to a whole new level. Aeropostale jackets, shirts, hoodies, jeans, jackets, T-Shirts, sweatshirts, shoes, dresses and more are immensely popular worldwide. The Aeropostale brand is favored for the super-soft fabric that makes it close to impossible for you to take off.</Text>

            
            <Heading marginTop={'30px'} size={"md"}>Why Aeropostale t shirts and tops are a women’s favorite this season?</Heading>
       
            <Text>Aeropostale online has all sorts of t-shirts and tops that are designed to everyone’s liking. The Aeropostale t shirts and tops we would like to give a shout-out to are bold off-shoulders, flirty front knots, cool tie-dyes and simply amazing logo styles. Ladies, stay trendy with up-to-the-minute Aeropostale clothing — it is anything but basic.</Text>
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid
            templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
            spacing={8}>
            <Stack spacing={6}>
              <Box>
                {/* <Logo color={useColorModeValue('gray.700', 'white')} /> */}
                <img width={"80px"} src="http://localhost:3000/static/media/clotheyardbg.1cae1677a965bc2ef160.png" alt="" srcset="" />
              </Box>
              <Text fontSize={'sm'}>
                ©  All rights reserved
              </Text>
              <Stack direction={'row'} spacing={6}>
                <Button label={'Twitter'} href={'#'}>
                  <FaTwitter />
                </Button>
                <Button label={'YouTube'} href={'#'}>
                  <FaYoutube />
                </Button>
                <Button label={'Instagram'} href={'#'}>
                  <FaInstagram />
                </Button>
              </Stack>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Company</ListHeader>
              <Link href={'#'}>About us</Link>
              <Link href={'#'}>Blog</Link>
              <Link href={'#'}>Contact us</Link>
              <Link href={'#'}>Pricing</Link>
              <Link href={'#'}>Testimonials</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Support</ListHeader>
              <Link href={'#'}>Help Center</Link>
              <Link href={'#'}>Terms of Service</Link>
              <Link href={'#'}>Legal</Link>
              <Link href={'#'}>Privacy Policy</Link>
              <Link href={'#'}>Satus</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Stay up to date</ListHeader>
              <Stack direction={'row'}>
                <Input
                  placeholder={'Your email address'}
                  bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                  border={0}
                  _focus={{
                    bg: 'whiteAlpha.300',
                  }}
                />
                <IconButton
                  bg={useColorModeValue('green.400', 'green.800')}
                  color={useColorModeValue('white', 'gray.800')}
                  _hover={{
                    bg: 'green.600',
                  }}
                  aria-label="Subscribe"
                  icon={<BiMailSend />}
                />
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    );
  }