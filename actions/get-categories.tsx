import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  console.log("Fetching categories from:", URL);

  const res = await fetch(URL, { cache: "no-store" });

  if (!res.ok) {
    throw new Error(
      `Failed to fetch categories: ${res.status} ${res.statusText}`
    );
  }

  try {
    return await res.json();
  } catch (err) {
    const text = await res.text();
    console.error("Invalid JSON received:", text);
    throw new Error("Response was not valid JSON");
  }
};

export default getCategories;
