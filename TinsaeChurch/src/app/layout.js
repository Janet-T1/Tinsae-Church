import { Inter } from "next/font/google";
import "./globals.css";
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tinsae Youth",
  description: "Youth That Are Crazy For Jesus",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} >
        
        {children}
        <Navbar/>
        <Footer/>
      </body>
    </html>
  );
}
