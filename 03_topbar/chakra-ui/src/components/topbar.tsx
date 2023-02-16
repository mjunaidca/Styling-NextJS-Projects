"use client";

import { Box, Flex, HStack, Text, Icon } from "@chakra-ui/react";
import { EmailIcon, PhoneIcon, Search2Icon, QuestionIcon } from "@chakra-ui/icons";


export default function TopBar() {
  return (
    <Box width={"full"} bg="purple.700" >
      <Flex
        px={["15", "20", "40"]}
        alignItems={"center"}
        minH={"55"}
        justifyContent={"space-between"}
        direction={["column", "row", "row"]}
        textColor={"white"}
        fontWeight={"normal"}
        fontSize={['sm', 'md', 'md']}
        py='1'
      >
        <Box>
          <Text> <EmailIcon /> info@example.com</Text>
        </Box>

        <HStack spacing={3} >
          <Text> <Search2Icon boxSize={['3.5','4']}  /> Branches</Text>
          <Text>|</Text>
          <Text> <QuestionIcon boxSize={['3.5','4']} /> Stores</Text>
          <Text>|</Text>
          <Text> <Icon as={PhoneIcon} boxSize={['3.5','4']}  /> Contact US</Text>
        </HStack>
      </Flex>
    </Box>
  );
}
