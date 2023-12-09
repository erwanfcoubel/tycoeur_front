import './globals.css'
import type { Metadata } from 'next'
import { dmSans } from '@/app/utils/font'
import Navbar from '../Component/Navbar/Navbar';
import {ReactNode} from "react";
import Footer from "@/Component/Footer/Footer";




export const metadata: Metadata = {
  title: 'Ty\'Coeur',
  description: 'Ty\'Coeur description',
}



export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="fr" >
      <body className={dmSans.className}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  )
}
