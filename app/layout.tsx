import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ModalProvider from "@/providers/modal-provider";
import { ToastProvider } from "@/providers/toast-provider";

import "./globals.css";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "Store",
};

export default function RootLayout({
  children,
  params: { storeId },
}: {
  children: React.ReactNode;
  params: { storeId: string };
}) {
  return (
    <html lang="en" className={font.className}>
      <body className="min-h-screen bg-gray-50">
        <ToastProvider>
          <ModalProvider>
            <Navbar storeId={storeId} />
            <main className="pt-16">{children}</main>
            <Footer />
          </ModalProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
