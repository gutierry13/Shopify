import 'keen-slider/keen-slider.min.css'
import Image from 'next/image'
import { SlideElement, Slider } from '@/components/slider/slider'
import { StripeInfo } from './stripeInfo'
import Link from 'next/link'
export const revalidate: number = 60
export default async function Home() {
  const products = await StripeInfo()
  return (
    <Slider>
      {products.map((product) => {
        return (
          <Link href={`/product/${product.id}`} key={product.id}>
            <SlideElement>
              <Image src={product.imageUrl} alt="" width={520} height={480} />
              <footer>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </footer>
            </SlideElement>
          </Link>
        )
      })}
    </Slider>
  )
}
