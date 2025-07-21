// home-page.tsx
import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  try {
    const products = await getProducts({ isFeatured: true });
    const billboard = await getBillboard(
      "322f773e-c87b-429c-86d4-7ee5c0b2bacd"
    );

    return (
      <div>
        <Container>
          <div className="space-y-10 pb-10">
            <Billboard data={billboard} />
            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
              <ProductList title="Featured Products" items={products} />
            </div>
          </div>
        </Container>
      </div>
    );
  } catch (error) {
    console.error("Error rendering home page:", error);
    if (error instanceof Error) {
      return <div>Error rendering home page: {error.message}</div>;
    } else {
      return <div>Error rendering home page: Unknown error</div>;
    }
  }
};

export default HomePage;
