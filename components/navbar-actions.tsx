"use client";

import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";

const NavbarActions = () => {
  // Hydration issue workaround
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Prevents hydration mismatch
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => {
          // Handle cart click
        }}
        className="flex items-center ronded-full bg-black px-4 py-2"
      >
        <ShoppingBag size={20} />
        <span className="ml-2 text-sm font-medium text-white">0</span>
      </Button>
    </div>
  );
};

export default NavbarActions;
