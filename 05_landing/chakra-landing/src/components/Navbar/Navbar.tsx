'use client'

import { Box, Button, Flex, HStack, Text, Stack } from "@chakra-ui/react"

export default function Navbar() {
    return (
        <div>
            <Desktop />
        </div>
    )
}

const Desktop = () => {

    return (
        <Box width={'full'}>
            <Flex  display={['none', 'flex', 'flex']} px={'14'} py='8' alignItems={'center'} justifyContent={'space-between'} minH='16' color={'green.500'}>

                <Box fontWeight={'bold'} fontSize={'lg'}>
                    Logo
                </Box>

                <HStack spacing={'8'} fontWeight={'normal'}>
                    <Text>Home</Text>
                    <Text>How it works</Text>
                    <Text>Features</Text>
                    <Text>Pricing</Text>
                    <Button size={'sm'} bg='green.500' textColor={'white'}>Create Account</Button>
                </HStack>

            </Flex>
        </Box>)
}


