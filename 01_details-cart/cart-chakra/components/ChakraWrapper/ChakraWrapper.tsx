'use client'

import { ChakraProvider } from "@chakra-ui/react"
import theme from "@/theme"
// import "@app/styles.css"

export default function ChakraWrapper( {children} : {children: React.ReactNode}) {
  return (
    <ChakraProvider theme={theme}>{children}</ChakraProvider>
  )
}
