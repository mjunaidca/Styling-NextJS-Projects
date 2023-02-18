'use client'

import theme from "@/theme/theme"
import { ChakraProvider } from "@chakra-ui/react"

interface Props {
    children: React.ReactNode
}

export default function Wrapper( { children }: Props ) {
  return (
    <ChakraProvider  theme={theme}> { children } </ChakraProvider>
  )
}
