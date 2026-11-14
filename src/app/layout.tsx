import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "ElevenLabs Bilingual Voice Assistant · Nayeli",
  description:
    "Nayeli is a voice-first AI care companion that takes healthcare admin off Spanish-speaking families. Built with ElevenLabs, Twilio, and Vercel.",
  metadataBase: new URL("https://nayeli.gtm0.com"),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body>{children}</body>
    </html>
  );
}
