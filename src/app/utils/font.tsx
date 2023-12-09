import { DM_Sans, Amatic_SC } from 'next/font/google'
export const amaticSC = Amatic_SC(
  {
    weight: '700',
    style: 'normal',
    subsets: ['latin'],
    display: 'swap'
  }
)
export const dmSans = DM_Sans(
  {
    weight: ['400', '700'],
    variable: '--font-test',
    style: 'normal',
    subsets: ['latin'],
    display: 'swap'
  })