import { useState } from 'react'
import { Flex, Button, IconButton } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import { Icon, Text, Box, HStack, Heading } from "@chakra-ui/react";



export const MyMobileView = () => {

  const [display, changeDisplay] = useState('none')

  return (
    <Flex>
        <HamburgerIcon
          aria-label="Open Menu"
          // size="lg"
          bgColor='white'
          // icon={<HamburgerIcon color={'black'} boxSize='7'  position='fixed'/>}
          onClick={() => changeDisplay('flex')}
          display={['flex', 'flex', 'none', 'none']}
        />

      <Flex
        display={display}
        bgColor="white"
        flexDir="column"
        maxW={'full'}
        pt='10'
      >
        <Flex justify="flex-end">

          <IconButton
            aria-label="Open Menu"
            size="lg"
            mt={2}
            mr={2}
            icon={<CloseIcon />}
            onClick={() => changeDisplay('none')}
          />

        </Flex>
        <Box
                    as="button"
                    _hover={{ transform: "scale(0.9)" }}
                    _active={{ transform: "scale(0.98)" }}
                >
                    <Text fontSize={["sm", "sm", "sm", "sm", "md"]} fontWeight={'semibold'}>How it Works</Text>
                </Box>
                <Box
                    as="button"
                    _hover={{ transform: "scale(0.9)" }}
                    _active={{ transform: "scale(0.98)" }}
                >
                    <Heading fontSize={["sm", "sm", "sm", "sm", "md"]} fontWeight={'semibold'}>Crypto</Heading>
                </Box>
                <Box
                    as="button"
                    _hover={{ transform: "scale(0.9)" }}
                    _active={{ transform: "scale(0.98)" }}
                >
                    <Heading fontSize={["sm", "sm", "sm", "sm", "md"]} fontWeight={'semibold'}>Marketplace</Heading>
                </Box>
                <Box
                    as="button"
                    _hover={{ transform: "scale(0.9)" }}
                    _active={{ transform: "scale(0.98)" }}
                >
                    <Heading fontSize={["sm", "sm", "sm", "sm", "md"]} fontWeight={'semibold'}>Sign In</Heading>
                </Box>

                <Button
                    bgColor="black"
                    size="sm"
                    height="32px"
                    width={['100px', '100px', "150px"]}
                    textColor={"white"}
                    fontSize={["sm", "sm", "sm", "sm", "md"]}
                    _hover={{
                        bg: "#FFFF",
                        textColor: 'black',
                        border: 'solid',
                    }}
                >
                    Get Started
                </Button>
      </Flex>
    </Flex>
  )
}
