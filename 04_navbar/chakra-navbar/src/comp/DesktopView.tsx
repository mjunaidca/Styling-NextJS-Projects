import React from 'react'

import { Icon, Text, Button, Box, HStack, Heading } from "@chakra-ui/react";

export default function DesktopView() {
  return (
    <div>
         <Box display={['none', 'none', 'block']}>
            <HStack spacing={['4', '6', '14']}>
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
            </HStack>
        </Box>
    </div>
  )
}
