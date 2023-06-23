import { HomeContainer, Products } from "@/styles/home";
import {useKeenSlider} from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import Image from "next/image";
import shoe1 from '../assets/Rectangle 20.png'
import shoe2 from '../assets/Rectangle 22-1.png'
import shoe3 from '../assets/Rectangle 22.png'
import { SlideElement,Slider } from "@/components/slider/slider";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
export default async function Home() {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })
  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price
    return{
      id:product.id,
      name: product.name,
      imageUrl:product.images[0],
      price:price.unit_amount ? price.unit_amount / 100 : '',

    }
  })

  return (
    <Slider>

      {products.map(product => {
        return (<SlideElement key={product.id}>
            <Image src={shoe1} alt="" width={520} height={480} />
            <footer>
          <strong>{product.name}</strong>
          <span>{product.price}</span>
        </footer>
        </SlideElement>)
      })}
    </Slider>
  )
}
