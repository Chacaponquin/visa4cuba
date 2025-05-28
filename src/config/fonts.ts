import { Poppins, Raleway } from "next/font/google";

export const fontSans = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400",
});

export const fontMono = Raleway({
  subsets: ["latin"],
  variable: "--font-mono",
});
