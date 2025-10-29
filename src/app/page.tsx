import AllProducts from "@/components/Home/AllProducts";
import FeatureProduct from "@/components/Home/FeatureProduct";
import Hero from "@/components/Home/Hero";
import ScrollText from "@/components/Home/ScrollText";
import Slogan from "@/components/Home/Slogan";
import Video from "@/components/Home/Video";

export default function Home() {
  return (
    <div>
      <Hero />
      <ScrollText />
      <FeatureProduct />
      <AllProducts />
      <Slogan />
      <Video />
    </div>
  );
}
