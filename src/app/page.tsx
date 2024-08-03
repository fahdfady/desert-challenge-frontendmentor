import { CartCard } from '@/components/CartCard'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='py-8 px-2'>
      <div className="max-w-screen-xl mx-auto flex justify-between">
        <section >
          <div className="grid grid-cols-1 md:grid-cols-2">

          </div>
        </section>

        <CartCard />
      </div>
    </main>
  )
}
