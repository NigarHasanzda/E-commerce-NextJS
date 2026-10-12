import ProductCatalog from "@/components/products/ProductCatalog";
import { Suspense } from "react";

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-[50vh] bg-[#F7F7F7]" />}>
      <ProductCatalog />
    </Suspense>
  );
}
