import AllProducts from "@/components/Home/AllProducts";
import FeatureProduct from "@/components/Home/FeatureProduct";
import Hero from "@/components/Home/Hero";
import ScrollText from "@/components/Home/ScrollText";

export default function Home() {
  return (
    <div>
      <Hero />
      <ScrollText />
      <FeatureProduct />
      <AllProducts />
    </div>
  );
}
