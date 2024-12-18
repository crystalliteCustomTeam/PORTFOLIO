import "./globals.css";
import localFont from 'next/font/local'
import BG from "Media/Body/bg.jpg";
import { Poppins } from 'next/font/google'
import Image from "next/image";

const poppins = Poppins({
  weight: ['400', '600'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

const Francy = localFont({
  src: "./fonts/CookConthic.woff",
  display: 'swap',
  variable: '--font-Francy',
})

export const metadata = {
  title: "Faisal Qadeer Yousufi",
  description: "Empowering Business Success through Innovative Leadership and Execution.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${Francy.variable} ${poppins.variable} bg-image[url('${BG}')] `}>
       
        {children}
      </body>
    </html>
  );
}
