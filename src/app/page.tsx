'use client'
import { HomeContainer, Products } from "@/styles/home";
import {useKeenSlider} from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import Image from "next/image";
import shoe1 from '../assets/Rectangle 20.png'
import shoe2 from '../assets/Rectangle 22-1.png'
import shoe3 from '../assets/Rectangle 22.png'
export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })
  return (
    <HomeContainer className="keen-slider" ref={sliderRef }>
      <Products className='keen-slider__slide'>
        <Image src={shoe1} alt="" width={520} height={480} />
        <footer>
          <strong>Moletom amarelo</strong>
          <span>R$ 200,00</span>
        </footer>
      </Products>
      <Products className='keen-slider__slide'>
        <Image src={shoe3} alt="" width={520} height={480} />
        <footer>
          <strong>Camiseta branca</strong>
          <span>R$ 80,00</span>
        </footer>
      </Products>
      <Products className='keen-slider__slide'>
        <Image src={shoe2} alt="" width={520} height={480} />
        <footer>
          <strong>Camiseta branca</strong>
          <span>R$ 80,00</span>
        </footer>
      </Products>
      <Products className='keen-slider__slide'>
        <Image src={shoe2} alt="" width={520} height={480} />
        <footer>
          <strong>Camiseta branca</strong>
          <span>R$ 80,00</span>
        </footer>
      </Products>
    </HomeContainer>
  )
}
