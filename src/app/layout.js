import { Cormorant_Upright, Open_Sans } from "next/font/google";
import "./globals.css";

const cormorant_Upright = Cormorant_Upright({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant_upright",
});

const opan_sans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-open_sans",
});

export const metadata = {
  title: "3D Cloth Configuration",
  description: "3D Cloth Configuration",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cormorant_Upright.variable} ${opan_sans.variable}`}>
        {children}
      </body>
    </html>
  );
}
