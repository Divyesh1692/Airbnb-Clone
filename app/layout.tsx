import type { Metadata } from "next";
import localFont from "next/font/local";
import {Nunito} from "next/font/google"
import "./globals.css";
import Navbar from "./components/navbar/navbar";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";
import RegesterModal from "./components/modals/regesterModal";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Air Bnb",
  description: "Air bnb clone",
};

const font = Nunito({
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
       <ClientOnly>
        <RegesterModal />
        <Navbar/>
      </ClientOnly>
       
        {children}
      </body>
    </html>
  );
}
