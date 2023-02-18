// import './globals.css'
import Wrapper from "@/components/wrapper/Wrapper"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     
      <head />
      <body>
        <Wrapper>
        {children}
        </Wrapper>
        </body>
    </html>
  )
}
