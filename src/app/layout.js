import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const popoins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});
export const metadata = {
  title: {
    default: "NextJs My App",
    template: "%s | NextJs My App",
  },
  description: "Make your life easy using nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${popoins.className}`}>
        <Navbar />
        <div className="px-20 py-4">{children}</div>
        <footer>
          <p className="py-8 bg-gray-700 text-white">
            Copyright all right reserved
          </p>
        </footer>
      </body>
    </html>
  );
}
