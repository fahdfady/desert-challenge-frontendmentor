import { CartCard } from '@/components/CartCard'
import { ProductsGrid } from '@/components/ProductsGrid'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='py-8 px-2'>
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between">
        <section>
          <h1 className="text-3xl md:text-4xl text-secondary font-bold mb-4">Desserts</h1>

          <ProductsGrid />
        </section>

        <CartCard />
      </div>
    </main>
  )
}
