import React from "react";
import { IconType } from "react-icons";
import {
  LuCrown,
  LuDroplet,
  LuFlame,
  LuGem,
  LuTreePine,
  LuZap,
} from "react-icons/lu";

type arrtibuteData = {
  label: string;
  Icon: IconType;
};
const ProductsFeatures = () => {
  const SCENT_PROFILES = {
    spicy: { label: "Spicy & Smoky", Icon: LuFlame },
    woody: { label: "Woody & Herbal", Icon: LuTreePine },
    fresh: { label: "Fresh & Aquatic", Icon: LuDroplet },
  };

  const MOODS = {
    bold: { label: "Bold & Seductive", Icon: LuCrown },
    grounded: { label: "Grounded & Sophisticated", Icon: LuGem },
    refreshing: { label: "Refreshing & Invigorating", Icon: LuZap },
  };
  return <div>ProductsFeatures</div>;
};

export default ProductsFeatures;
