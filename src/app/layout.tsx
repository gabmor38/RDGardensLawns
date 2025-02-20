
import type { Metadata } from "next";
//import { Geist, Geist_Mono} from "next/font/google";
import {  Roboto } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./footer";
import Navbar from "./navbar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const roboto = Roboto({
  variable: "--font-roboto-normal",
  subsets: ["latin"],
  weight: "400"
})

export const metadata: Metadata = {
  title: "RDoucet EverTerra Gardens & Lawn Care | Professional Softscaping & Lawn Care",
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
      <body
        className={`${roboto.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
