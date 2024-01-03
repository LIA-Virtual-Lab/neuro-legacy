import Image from 'next/image'
import { Inter } from 'next/font/google'
import Dashboard from '@/components/Dashboard'
import Animation from '@/components/Animation'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<>
<Dashboard/>
{/* <Animation/> */}
</>
  )
}
