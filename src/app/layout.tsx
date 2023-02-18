import { NavBarOrganism } from '@/components/organisms/NavBar/NavBarOrganism'
import Script from 'next/script'
import './globals.css'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <NavBarOrganism />
        {children}
      </body>
      <Script src='../lib/OpenSearchField.ts' />
    </html>
  )
}
