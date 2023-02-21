import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { HeroMolecule } from '@/components/molecules/Hero/HeroMolecule'
import { CallToActionMolecule } from '@/components/molecules/CallToAction/CallToActionMolecule'
import { ImageLockUp } from '@/components/molecules/ImageLockUp/ImageLockUp'
import { StatsMolecule } from '@/components/organisms/StatsSection/StatsMolecule'
import { LegalSection as LegalSection } from '@/components/organisms/Legal/LegalSection'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroMolecule />
      <CallToActionMolecule />
      <ImageLockUp image={{
        src: 'https://source.unsplash.com/random/?city,night',
        alt: 'Wow!'
      }}>
        <>
          <h2>Why choose us</h2>
          <h3>We do right by you</h3>
          <p>We will refund our fee within the first 60 days if you&apos;re unhappy with our services. Learn more</p>
          <h3>We&apos;ve got you covered in all 50 states</h3>
          <p>Have peace of mind knowing our docs have been legally recognized in every state—and you&apos;ll never need to leave home to work with a lawyer.</p>
          <h3>Flat-rate fees</h3>
          <p>No hourly charges. No surprises. Really.</p>
        </>
      </ImageLockUp>
      <StatsMolecule />
      <LegalSection />
    </main>
  )
}
