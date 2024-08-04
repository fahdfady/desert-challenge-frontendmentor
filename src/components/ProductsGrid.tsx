import { ProductCard } from "./ProductCard"

const products = [
    {
        id: 1,
        name: 'Waffle with Berries',
        price: 6.50,
        image: "image-waffle-desktop.jpg",
    },
    {
        id: 2,
        name: 'Vanilla Bean Creme Brulee',
        price: 7.00,
        image: "image-creme-brulee-desktop.jpg",
    },
    {
        id: 3,
        name: 'Macaron Mix of Five',
        price: 8.00,
        image: "image-macaron-desktop.jpg",
    },
    {
        id: 4,
        name: 'Classic Tiramisu',
        price: 6.50,
        image: "image-tiramisu-desktop.jpg",
    },
    {
        id: 5,
        name: 'Pistachio Baklava',
        price: 2.50,
        image: "image-baklava-desktop.jpg",
    },
    {
        id: 6,
        name: 'Lemon Meringue Pie',
        price: 3.50,
        image: "image-meringue-desktop.jpg",
    },
]

export function ProductsGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-6">
            {products.map((product) => (
                <ProductCard product={product} key={product.id} />
            ))}
        </div>
    )
}