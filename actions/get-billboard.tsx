// getBillboard.ts
import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/api/${process.env.NEXT_PUBLIC_STORE_ID}/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
  const res = await fetch(`${URL}/${id}`);

  if (!res.ok) {
    throw new Error(
      `Failed to fetch billboard: ${res.status} ${res.statusText}`
    );
  }

  return res.json();
};

export default getBillboard;
