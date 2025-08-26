import { ReactNode } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Container from "@/components/ui/container";

export default function StoreLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { storeId: string };
}) {
  return (
    <>
      <Navbar storeId={params.storeId} />
      <Container>{children}</Container>
      <Footer />
    </>
  );
}
