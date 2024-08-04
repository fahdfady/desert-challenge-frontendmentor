import Image from "next/image";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { AddToCartButton } from "./AddToCartButton";

export function ProductCard({ product }: { product: any }) {
    return (
        <div className="p-1.5">
            <div className="relative w-full h-[200px] md:h-[250px] flex items-center justify-center mb-6">

                <Image
                    src={`/images/${product.image}`}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="size-full object-cover rounded-xl"
                />

                <AddToCartButton
                    className="absolute -bottom-5 left-1/2 transform -translate-x-1/2"
                    product={product}
                />
            </div>

            <div className="space-y-1">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-lg font-semibold text-primary">${product.price.toFixed(2)}</p>
            </div>
        </div>
    )
}