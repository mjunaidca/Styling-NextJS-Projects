"use client";

import { Box, Flex, HStack, Text, Icon } from "@chakra-ui/react";
import { EmailIcon } from '@chakra-ui/icons'



export default function TopBar() {
  return (
    <Box width={"full"} bg="purple.700" minH="45">
      <Flex
        px={["20", "20", "40"]}
        alignItems={"center"}
        minH="45"
        justifyContent={"space-between"}
        direction={["column", "row", "row"]}
        textColor={"white"}
        fontWeight={"normal"}
        fontSize={['sm', 'md', 'md']}
      >
        <Box>
          <Text> <EmailIcon /> info@example.com</Text>
        </Box>

        <HStack spacing={3}>
          <Text>  Branches</Text>
          <Text>|</Text>
          <Text>Stores</Text>
          <Text>|</Text>
          <Text>Contact US</Text>
        </HStack>
      </Flex>
    </Box>
  );
}
