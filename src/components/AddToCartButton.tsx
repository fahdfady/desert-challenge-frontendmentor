"use client"

import { useEffect, useState } from "react";
import { ShoppingCartIcon } from "lucide-react";
import { Button } from "./ui/button";

import { cn } from "@/lib/utils";
import { CartItem, Product } from "@/lib/types";

export function AddToCartButton({ className, product }: { className?: string, product: Product }) {
    const [addedToCart, setAddedToCart] = useState(false);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const cartItem = cart.find((item: CartItem) => item.id === product.id);
        if (cartItem) {
            setAddedToCart(true);
            setQuantity(cartItem.quantity);
        }
    }, [product.id]);


    const handleAddToCart = () => {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const cartItem = cart.find((item: CartItem) => item.id === product.id);

        if (cartItem) {
            cartItem.quantity += quantity;
        } else {
            cart.push({ ...product, quantity });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        setAddedToCart(true);
    };

    const incrementQuantity = () => {
        setQuantity((prev) => prev + 1);
        updateCartQuantity(1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
            updateCartQuantity(-1);
        }
    };

    const updateCartQuantity = (change: number) => {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const cartItem = cart.find((item: CartItem) => item.id === product.id);

        if (cartItem) {
            cartItem.quantity += change;
            localStorage.setItem('cart', JSON.stringify(cart));
        }
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
