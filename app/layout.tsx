import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";

const urban = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "Store",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { storeId: string };
}) {
  // TODO: Replace this with the actual store ID logic as needed
  const { storeId } = params;

  return (
    <html lang="en">
      <body className={urban.className}>
        <ModalProvider />
        <ToastProvider />
        <Navbar storeId={storeId} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
