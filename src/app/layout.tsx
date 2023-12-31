import "./globals.css";
import type { Metadata } from "next";
// import { Noto_Sans_KR } from "next/font/google";
import Navbar from "../components/navbar";
import Head from "next/head";
import { MessageProvider } from "../lib/contexts/useMessage";
import { AuthProvider } from "@/lib/contexts/useAuth";

export const metadata: Metadata = {
  title: {
    template: "%s - 클래스뮤즈",
    default: "클래스뮤즈",
  },
  description: "모두가 즐거운 교육공간, 클래스뮤즈",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <MessageProvider>
        <AuthProvider>
          <body className={`w-full p-0`}>
            <Navbar />
            {children}
          </body>
        </AuthProvider>
      </MessageProvider>
    </html>
  );
};

export default RootLayout;
