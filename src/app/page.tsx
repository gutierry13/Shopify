import 'keen-slider/keen-slider.min.css'
import Image from 'next/image'
import shoe1 from '../assets/Rectangle 20.png'
import { SlideElement, Slider } from '@/components/slider/slider'
import StripeInfo from './stripeInfo'
export const revalidate: number = 60
export default async function Home() {
  const products = await StripeInfo()
  return (
    <Slider>
      {products.map((product) => {
        return (
          <SlideElement key={product.id}>
            <Image src={shoe1} alt="" width={520} height={480} />
            <footer>
              <strong>{product.name}</strong>
              <span>{product.price}</span>
            </footer>
          </SlideElement>
        )
      })}
    </Slider>
  )
}
