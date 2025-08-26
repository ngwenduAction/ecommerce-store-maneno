import { Category } from "@/types";

const getCategories = async (storeId: string): Promise<Category[]> => {
  const URL = `${process.env.NEXT_PUBLIC_API_URL}/api/${storeId}/categories`;

  try {
    const res = await fetch(URL, { cache: "no-store" });

    if (!res.ok) {
      console.error("❌ getCategories failed:", res.status, res.statusText);
      return []; // return empty array instead of crashing
    }

    try {
      const data = await res.json();
      return data;
    } catch (err) {
      console.error("❌ getCategories: response not valid JSON", err);
      return [];
    }
  } catch (err) {
    console.error("❌ getCategories: fetch error", err);
    return [];
  }
};

export default getCategories;
