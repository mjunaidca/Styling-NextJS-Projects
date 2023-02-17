'use client'

import { Box, Button, Flex, HStack, Text, Stack } from "@chakra-ui/react"
import { CloseIcon } from '@chakra-ui/icons'



export default function Navbar() {
    return (
        <div>
            <DesktopTabMobile />
        </div>
    )
}

// const Desktop = () => {

//     return (
//         <Box width={'full'}>
//             <Flex display={['none', 'none', 'flex']} px={'14'} py='8' alignItems={'center'} justifyContent={'space-between'} minH={['64', '32', '16']} color={'green.500'}>

//                 <Box fontWeight={'bold'} fontSize={'lg'}>
//                     Logo
//                 </Box>

//                 <HStack spacing={'8'} fontWeight={'normal'}>
//                     <Text>Home</Text>
//                     <Text>How it works</Text>
//                     <Text>Features</Text>
//                     <Text>Pricing</Text>
//                     <Button size={'sm'} bg='green.500' textColor={'white'}>Create Account</Button>
//                 </HStack>

//             </Flex>
//         </Box>)
// }

const DesktopTabMobile = () => {

    return (
        <Box width={'full'}>
            <Flex px={['4','4', '14']} bg={['green.500', 'green.500', 'white']} textColor={['white', 'white', 'green.500']} direction={['column', 'column', 'row']}  py='8' alignItems={['stretch', 'stretch' ,'center']} justifyContent={'space-between'} minH={['64', '32', '16']}>

                <Flex justifyContent={'space-between'} mb='2'>
                    <Box fontWeight={'semibold'}  fontSize={'lg'}>
                        Logo
                    </Box>
                    <Box display={['flex', 'flex', 'none']} fontWeight={'bold'} textColor='white' fontSize={'lg'}>
                        <CloseIcon />
                    </Box>

                </Flex>

                <Flex justifyContent={'space-between'} alignItems='center' fontSize={['small', 'small', 'medium']} fontWeight={'normal'} direction={['column', 'row', 'row']} >
                    <Text px={['4', '3' ,'4']} py={['4', '0' ,'0']} >Home</Text>
                    <Text px={['4', '3' ,'4']} py={['4', '0' ,'0']}>How it works</Text>
                    <Text px={['4', '3' ,'4']} py={['4', '0' ,'0']}>Features</Text>
                    <Text px={['4', '3' ,'4']} py={['4', '0' ,'0']}>Pricing</Text>
                    <Button px={['4', '3' ,'4']} py={['4', '0' ,'0']}size={'sm'} bgColor={['white', 'white', 'green.500']}  textColor={['green.500', 'green.500', 'white']} >Create Account</Button>
                </Flex>

            </Flex>

        </Box>)
}

