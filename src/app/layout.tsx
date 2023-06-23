import './globals.css'
import { Gothic_A1 } from 'next/font/google';
import localFont from "next/font/local";


const gothic = Gothic_A1({ 
  subsets: ['latin'] ,
  weight: ["100", "300", "400"],

  variable: "--font-gothic",
})

const corbel = localFont({
  src: [
    {
      path: "../fonts/Corbel-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-corbel-bold",
});


export const metadata = {
  title: 'KAIRÓS | ARQUITETURA E DESIGN',
  description: 'ARQUITETURA E DESIGN',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${gothic.variable} ${corbel.variable}  font-sans bg-[#f6f6f6]`}>{children}</body>
    </html>
  )
}
