import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/api/${process.env.NEXT_PUBLIC_STORE_ID}/categories`;

const getCategories = async (): Promise<Category[]> => {
  console.log("Fetching categories from:", URL);

  const res = await fetch(URL, { cache: "no-store" });

  if (!res.ok) {
    throw new Error(`Failed to fetch categories: ${res.status}`);
  }

  return res.json();
};

export default getCategories;
