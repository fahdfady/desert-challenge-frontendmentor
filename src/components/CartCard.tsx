"use client"

import { LeafIcon, XCircleIcon } from "lucide-react";
import { Button } from "./ui/button";
import { ConfirmButton } from "./ConfirmButton";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CartItem } from "@/lib/types";


export function CartCard() {
    const [orders, setOrders] = useState<CartItem[]>([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
        setOrders(storedCart);
    }, [orders]);

    const totalOrders = orders.reduce((acc, order) => acc + order.quantity, 0);
    const totalPrice = orders.reduce((acc, order) => acc + order.price * order.quantity, 0);

    return (
        <div className="bg-card rounded-2xl min-w-64 sm:min-w-96 min-h-[300px] h-fit p-4 md:p-6">
            <h2 className='text-2xl font-extrabold text-primary mb-4'>Your Cart ({totalOrders})</h2>

            {orders.length === 0 ? (
                <div className="flex flex-col items-center justify-center gap-3">
                    <Image src="/illustration-empty-cart.svg" alt="empty-cart" width={200} height={200} />
                    <p className="text-base text-muted-foreground">Your added items will appear here</p>
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 gap-y-2 mb-3">
                        {orders.map((order, index) => {
                            return (
                                <div className="flex items-center justify-between py-4 border-b-[1px] border-muted-foreground/30" key={index}>
                                    <div className="space-y-1">
                                        <h3 className="text-base font-semibold ">{order.name}</h3>
                                        <div className="flex items-center gap-3 text-sm">
                                            <span className="text-primary font-bold">
                                                <span className="sr-only">quantity</span>
                                                {order.quantity}X
                                            </span>

                                            <span className="text-muted-foreground font-semibold">
                                                @ ${order.price}
                                            </span>

                                            <span className="text-muted font-bold">
                                                ${(order.price * order.quantity).toFixed(2)}
                                            </span>
                                        </div>
                                    </div>

                                    <XCircleIcon className="size-5 text-muted cursor-pointer hover:text-stone-950 focus:text-stone-950 duration-100" />
                                </div>
                            )
                        })}
                    </div>

                    <div className="w-full flex justify-between items-center py-2">
                        <p className="text-base">order total</p>

                        <p className="text-xl font-bold">${totalPrice.toFixed(2)}</p>
                    </div>

                    <div className="w-full rounded-2xl bg-background flex justify-center items-center my-3 py-3.5">
                        <LeafIcon className="size-5 text-green-500 me-1.5" />

                        <p className="text-sm ">this is a <strong>carbon-neutral</strong> delivery</p>
                    </div>


                    <ConfirmButton />
                </>
            )}
        </div>
    )
}