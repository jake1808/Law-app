import FooterOrganism from '@/components/organisms/Footer/FooterOrganism'
import { NavBarOrganism } from '@/components/organisms/NavBar/NavBarOrganism'
import { DisclaimerOrganism } from '@/components/organisms/Disclaimer/DisclaimerOrganism'



import './globals.css'
import { PhoneModelMolecule } from '@/components/molecules/PhoneModel/PhoneModelMolecule'
import SupabaseProvider from './supabase-provider'


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
        <SupabaseProvider>
          <NavBarOrganism />
          {children}
          <DisclaimerOrganism />
          <FooterOrganism />
          <PhoneModelMolecule />
        </SupabaseProvider>
      </body>


    </html>
  )
}
