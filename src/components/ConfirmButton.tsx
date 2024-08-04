import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { CheckCircleIcon } from "lucide-react"
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button"

const orders = [
    {
        id: 1,
        name: 'Classic Tiramisu',
        price: 5.50,
        quantity: 1,
        image: "image-macaron-desktop.jpg",
    },
    {
        id: 2,
        name: 'Vanilla Bean Creme Brulee',
        price: 7.00,
        quantity: 4,
        image: "image-tiramisu-desktop.jpg",
    },
    {
        id: 3,
        name: 'Vanilla Panna Cotta',
        price: 6.50,
        quantity: 2,
        image: "image-baklava-desktop.jpg",
    },
];

export function ConfirmButton() {
    const totalPrice = orders.reduce((acc, order) => acc + order.price * order.quantity, 0);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    className="w-full my-2"
                    size="lg"
                >Confirm Order</Button>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <CheckCircleIcon className="size-10 text-green-600 mb-4" />
                    <DialogTitle className="text-8xl font-extrabold">Order Confirmed</DialogTitle>
                    <DialogDescription>
                        We hope you enjoy your food!
                    </DialogDescription>
                </DialogHeader>

                <div className="w-full bg-background p-4">

                    <div className="grid grid-cols-1">
                        {orders.map((order, index) => {
                            return (
                                <div className="flex jusify-between items-center" key={index}>
                                    <div className="size-[40px]">
                                        <Image
                                            src={`/images/${order.image}`}
                                            className="size-full object-cover"
                                            width={40}
                                            height={40}
                                            alt={order.name}
                                        />
                                    </div>


                                </div>
                            )
                        })}
                    </div>

                    <div className="w-full flex justify-between items-center py-2">
                        <p className="text-base">order total</p>

                        <p className="text-xl font-bold">${totalPrice.toFixed(2)}</p>
                    </div>
                </div>

                <Button className="w-full h-10" asChild>
                    <Link href="/">
                        Start a new order
                    </Link>
                </Button>
            </DialogContent>
        </Dialog>

    )
}