// get-products.ts
import qs from "query-string";

import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProducts = async (
  params: { isFeatured?: boolean; categoryId?: string } = {}
): Promise<Product[]> => {
  const query = qs.stringify(params);
  const res = await fetch(`${URL}?${query}`, {
    next: { revalidate: 60 },
    credentials: "include",
  });

  if (!res.ok) {
    const text = await res.text();
    console.error("Failed to fetch products:", text);
    throw new Error("Failed to fetch products");
  }

  return res.json();
};

export default getProducts;
