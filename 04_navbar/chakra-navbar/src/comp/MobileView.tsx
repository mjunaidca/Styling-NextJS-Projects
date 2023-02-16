import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react';

import { Icon, Text, Button, Box, HStack, Heading } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";


export default function MobileView() {
    return (
        <div>
            <Box display={['block', 'block', 'none']}>
                <Menu closeOnSelect={false}>
                    <MenuButton as={Button} colorScheme='white'>
                        <HamburgerIcon color={'black'} boxSize='7'></HamburgerIcon>
                    </MenuButton>

                    <Box boxShadow='2xl'>
                        <MenuList minWidth='300px' py='5'>

                            <MenuOptionGroup defaultValue='asc' title='About' type='radio'>
                                <MenuItemOption pt='4' value='asc'>How it works</MenuItemOption>
                                <MenuItemOption pt='4' value='desc'>Crypto</MenuItemOption>
                            </MenuOptionGroup>

                            <MenuOptionGroup pt='4' title='Explore Marketplace' type='checkbox'>
                                <MenuItemOption pt='4' value='email'>Marketplace</MenuItemOption>
                            </MenuOptionGroup>

                            <MenuOptionGroup pt='4' flexDirection={'row'}>
                                <MenuItemOption pt='4' >
                                    <Button
                                        bgColor="white"
                                        size="sm"
                                        height="32px"
                                        width={['100px', '100px', "150px"]}
                                        textColor={"black"}
                                        fontSize={["sm", "sm", "sm", "sm", "md"]}
                                    >
                                        Sign In
                                    </Button>
                                    <Button
                                        bgColor="black"
                                        size="sm"
                                        height="32px"
                                        width={['100px', '100px', "150px"]}
                                        textColor={"white"}
                                        fontSize={["sm", "sm", "sm", "sm", "md"]}
                                    >
                                        Get Started
                                    </Button>
                                </MenuItemOption>

                            </MenuOptionGroup>

                        </MenuList>
                    </Box>

                </Menu>
            </Box>
        </div>
    )
}





                //     <Text fontSize={["sm", "sm", "sm", "sm", "md"]} fontWeight={'semibold'}>How it Works</Text>
                //     <Heading fontSize={["sm", "sm", "sm", "sm", "md"]} fontWeight={'semibold'}>Crypto</Heading>
                //     <Heading fontSize={["sm", "sm", "sm", "sm", "md"]} fontWeight={'semibold'}>Marketplace</Heading>
                //    <Heading fontSize={["sm", "sm", "sm", "sm", "md"]} fontWeight={'semibold'}>Sign In</Heading>

