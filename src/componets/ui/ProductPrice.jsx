import { SaudiRiyal } from "lucide-react";
import { cn } from "@/lib/utils";

export const ProductPrice = ({ product, className }) => (
  <p className={cn("flex items-center gap-1 text-lg font-bold text-primary", className)}>
    {product.priceFrom ? (
      <>
        من {product.priceFrom}
        <SaudiRiyal aria-label="ريال سعودي" strokeWidth={2.25} className="size-[1em]" />
      </>
    ) : (
      product.price
    )}
  </p>
);
