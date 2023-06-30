'use client'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/styles/product'

interface ProductProps {
  params: {
    id: string
  }
}
export default function Product({ params }: ProductProps) {
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
          consequuntur, odit modi nesciunt distinctio, dolor temporibus dolorem
          sint odio minima illo atque! A tenetur qui doloribus neque hic veniam
          ducimus!
        </p>
        <button>Comprar</button>
      </ProductDetails>
    </ProductContainer>
  )
}
