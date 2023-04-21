import 'server-only';
import FooterOrganism from '@/components/organisms/Footer/FooterOrganism'
import { NavBarOrganism } from '@/components/organisms/NavBar/NavBarOrganism'
import { DisclaimerOrganism } from '@/components/organisms/Disclaimer/DisclaimerOrganism'



import './globals.css'
import { PhoneModelMolecule } from '@/components/molecules/PhoneModel/PhoneModelMolecule'
import SupabaseProvider from '../components/providers/supabase-provider'
import { createClient } from 'utils/supabase-server'
import SupabaseAuthProvider from '@/components/providers/supabase-auth-provider'


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createClient();

  const {
    data: { session }
  } = await supabase.auth.getSession();
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <SupabaseProvider>
          <SupabaseAuthProvider serverSession={session}>
            <NavBarOrganism />
            {children}
            <DisclaimerOrganism />
            <FooterOrganism />
            <PhoneModelMolecule />
          </SupabaseAuthProvider>
        </SupabaseProvider>
      </body>


    </html>
  )
}
