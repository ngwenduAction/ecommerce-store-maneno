import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL);

  if (!res.ok) {
    const text = await res.text();
    console.error("Failed to fetch categories:", text);
    throw new Error("Failed to fetch categories");
  }

  return res.json();
};

export default getCategories;
