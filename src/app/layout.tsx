
import type { Metadata } from "next";
//import { Geist, Geist_Mono} from "next/font/google";
import {  Roboto } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./footer";
import Navbar from "./navbar";
import { GoogleAnalytics } from '@next/third-parties/google';


const roboto = Roboto({
  variable: "--font-roboto-normal",
  subsets: ["latin"],
  weight: "400"
})

export const metadata: Metadata = {
  title: "RD EverTerra Gardens & Lawns | Professional Softscaping & Lawn Care in Kemptville",
  description: "Transform your outdoor space with expert softscaping, garden design, and lawn care services.",
  icons: {
    icon: [
      {
        url: ' /logo1.png',
        href: '/logo1.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <head>
         <meta name="google-site-verification" content="_j3XM-jupTIiBwBISE2YljDhtDmrSrW6l0hGeihcxLk" />
      </head> */}
      <body
        className={`${roboto.variable} antialiased`}
      >
        <GoogleAnalytics gaId="G-906XENZS68" />
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
