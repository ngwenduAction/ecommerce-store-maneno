import Link from "next/link";

import Container from "@/components/ui/container";
import MainNav from "@/components/main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "@/components/navbar-actions";

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="border-b">
        <Container>
          <div className="flex h-16 items-center justify-between px-4 lg:px-0">
            <Link href="/" className="flex items-center gap-x-2">
              <span className="text-xl font-bold">E-Commerce Store</span>
            </Link>
            <MainNav data={categories} />
            <NavbarActions storeId="yourStoreId" />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
