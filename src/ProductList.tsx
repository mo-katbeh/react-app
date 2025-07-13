import React, { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [product, setProduct] = useState<string[]>([]);

  useEffect(() => {
    console.log("Fetching products in", category);
    setProduct(["Clothing", "HandMade"]);
  }, [category]);
  return <div>ProductList</div>;
};

export default ProductList;
