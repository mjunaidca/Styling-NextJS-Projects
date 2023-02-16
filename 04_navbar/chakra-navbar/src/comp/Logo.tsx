'use client'

import { Icon, Text } from '@chakra-ui/react'
import { BsBug } from "react-icons/bs";



export default function Logo() {
  return (
    <div>
        <Text fontWeight={'black'}fontSize={["sm", "sm","sm","sm","md"]}> <Icon as={ BsBug } /> Logo</Text>
    </div>
  )
}
