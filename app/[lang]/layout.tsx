import "./globals.css";
import { Inter } from "next/font/google";
import { Locale, i18n } from "../../i18n.config";
import Header from "./components/Header";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "next-i18next-app",
  description: "This is test.",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { lang } = await params;
  return (
    <html lang={lang}>
      <body className={inter.className}>
        <Header lang={lang as Locale} />
        <main>{children}</main>
      </body>
    </html>
  );
}
