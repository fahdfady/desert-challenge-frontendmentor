"use client"

import { ShoppingCartIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function AddToCartButton({ className }: { className?: string }) {
    const [addedToCart, setAddedToCart] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        setAddedToCart(true);
    };

    const incrementQuantity = () => {
        setQuantity((prev: number) => prev + 1);
    };

    const decrementQuantity = () => {
        setQuantity((prev: number) => (prev > 1 ? prev - 1 : 1));
    };

    return (
        <div className={cn(
            "min-w-[50px]",
            className,
        )}>
            {addedToCart ? (
                <div className={cn(
                    "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                    "bg-primary text-primary-foreground",
                    "w-full h-12 px-6 border-[1px]"
                )}>
                    <Button
                        size="icon"
                        variant="ghost"
                        className="mr-4"
                        onClick={decrementQuantity}
                    >
                        -
                    </Button>
                    <span className="">{quantity}</span>
                    <Button
                        size="icon"
                        variant="ghost"
                        className="ml-4"
                        onClick={incrementQuantity}
                    >
                        +
                    </Button>
                </div>
            ) : (
                <Button
                    className="bg-white w-full h-12 px-6 text-secondary border-[1px] hover:bg-white focus:bg-white hover:border-primary"
                    onClick={handleAddToCart}
                >
                    <ShoppingCartIcon className="size-5 me-2 text-primary" /> Add to Cart
                </Button>
            )}
        </div>
    );
};
