'use client'

import React from 'react'

import {Box, Flex} from '@chakra-ui/react'
import Logo from './Logo'
import Menu from './Menu'

export default function NavBar() {
  return (
    <div>
        <Box  >
            <Flex direction={'row'} justifyContent={'space-between'} alignItems="center" py={[5 ,5 ,10]} px={[5 ,5, 40]}>
                <Logo />
                <Menu />
            </Flex>
        </Box>
    </div>
  )
}
