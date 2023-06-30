import { StripePrefetch } from '@/app/stripeInfo'
import ProductPage from '@/components/product/product'
// import {
//   ImageContainer,
//   ProductContainer,
//   ProductDetails,
// } from '@/styles/product'

interface ProductProps {
  params: {
    id: string
  }
}
export default async function Product({ params }: ProductProps) {
  const { props } = await StripePrefetch(params.id)
  const { product } = props
  // console.log(product)

  return (
    <ProductPage image={product.imageUrl}>
      <h1>{product.name}</h1>
      <span>{product.price}</span>
      <p>{product.description}</p>
      <button>Comprar</button>
    </ProductPage>
  )
}
