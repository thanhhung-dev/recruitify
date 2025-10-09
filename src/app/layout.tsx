import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import 'antd/dist/reset.css';

// Centralized font configuration with all weights we plan to use
const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "RecruitJob - Find Your Dream Job",
  description: "Join over 175,324 candidates waiting for good employees. Create your account and find your perfect job match.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={instrumentSans.variable}>
        {children}
      </body>
    </html>
  );
}