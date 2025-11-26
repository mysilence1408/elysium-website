import { notFound } from "next/navigation";
import AddToBagButton from "@/components/Global/AddToBagButton";
import { formatPrice } from "@/utils/formatters";

interface Product {
  _id: string;
  name: string;
  slug: string;
  description: string;
  image?: string;
  price?: number;
}

// Fetch products (no cache or revalidate)
const getData = async (slug: string): Promise<Product | null> => {
  try {
    const res = await fetch("http://localhost:3000/api/products", {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch products");

    const products: Product[] = await res.json();
    return products.find((p) => p.slug === slug) || null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}) {
  const { slug } = await params; // await params before using slug
  const product = await getData(slug);
  if (!product) {
    return {
      title: "Not Found",
      description: "The requested page does not exist.",
    };
  }
  return {
    title: product.name,
    description: product.description,
  };
}

const ProductPage = async ({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}) => {
  const { slug } = await params; // await params before using slug
  const product = await getData(slug);

  if (!product) notFound();

  return (
    <div className="px-8 lg:px-16 py-16">
      <div className="grid grid-cols-1 items-center gap-10 pb-10 lg:grid-cols-2">
        <div className="relative mb-14 flex justify-center pb-10">
          <img
            src={product.image}
            alt={product.name}
            width={600}
            height={600}
            className="absolute top-[90%] -scale-y-100 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_70%,rgba(0,0,0,.15)_100%)]"
          />
          <img
            src={product.image}
            alt={product.name}
            width={600}
            height={600}
            className="relative"
          />
        </div>
        <div className="text-white">
          <h1 className="font-display mb-4 border-b border-neutral-700 pb-2 text-4xl md:text-5xl">
            {product.name}
          </h1>
          <div className="space-y-6">
            <p>{product.description}</p>
            <p className="mt-10 text-3xl font-light">
              {formatPrice(product.price)}
            </p>
            <AddToBagButton
              product={{
                _id: product._id,
                name: product.name,
                slug: product.slug,
                price: product.price ?? null,
                image: product.image ?? null,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
