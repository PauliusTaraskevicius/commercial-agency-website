import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import Header from "../../components/header";
import Footer from "../../components/footer";

const kannit = Kanit({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Home - Moxey",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kannit.className} antialiased`}
        suppressHydrationWarning
      >
        <main className="h-[100dvh] flex flex-col pt-[30px] ">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
