"use client";

import {
    Box,
    Button,
    Flex,
    Heading,
    Icon,
    Text,
    Image,
} from "@chakra-ui/react";

import { ChevronRightIcon } from '@chakra-ui/icons'

export default function HeadContainer() {
    return (
        <Flex px={['14', '8' ,"8"]} py={[ '8', '8', "14"]} direction={['column-reverse', 'row', 'row']}>

            <Box width={["100%", "50%" ,"50%"]} py="8" textAlign={['center', 'left', 'left']}  px={[ '0', '0', "0", "0", "32"]}>

                <Heading as="h1" fontSize={["3xl", "3xl", "3xl", "4xl", "5xl"]} pb="4" justifyContent={'center'}>
                    Build this rad landing page from scratch
                </Heading>
                <Text as="h3" lineHeight={'6'} pb="4" fontSize={'lg'}>
                    This is the subheader section where you describe the basic benefits of
                    your product.
                </Text>
                <Button size={["sm", "sm", "sm", "sm", "md"]} bg="green.500" textColor={"white"} >
                    Create your account now <ChevronRightIcon />{" "}
                </Button>
                <Text fontSize={['xx-small', 'sm', 'sm']} py="2" >No credit card required</Text>
            </Box>

            <Box width={["100%", "50%" ,"50%"]}>
                <Box>
                    <Image
                        src={"/img.jpg"}
                        alt={"Image"}
                        width="xl"
                        height="xm"
                        rounded={"3xl"}
                        shadow="2xl"
                    ></Image>
                </Box>
            </Box>
        </Flex>
    );
}
