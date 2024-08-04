import { LeafIcon, XCircleIcon } from "lucide-react";
import { Button } from "./ui/button";

const orders = [
    {
        id: 1,
        name: 'Classic Tiramisu',
        price: 5.50,
        quantity: 1,
    },
    {
        id: 2,
        name: 'Vanilla Bean Creme Brulee',
        price: 7.00,
        quantity: 4,
    },
    {
        id: 3,
        name: 'Vanilla Panna Cotta',
        price: 6.50,
        quantity: 2,
    },
]

export function CartCard() {
    const totalOrders = orders.reduce((acc, order) => acc + order.quantity, 0);
    const totalPrice = orders.reduce((acc, order) => acc + order.price * order.quantity, 0);

    return (
        <div className="bg-card rounded-2xl min-w-64 sm:min-w-96 min-h-[300px] h-fit p-4 md:p-6">
            <h2 className='text-2xl font-extrabold text-primary mb-4'>Your Cart ({totalOrders})</h2>

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


            <Button
                className="w-full my-2"
                size="lg"
            >Confirm Order</Button>
        </div>
    )
}