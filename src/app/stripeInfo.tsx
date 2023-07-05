import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'

export async function StripeInfo() {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })
  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount
        ? new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(price.unit_amount / 100)
        : '',
    }
  })
  return products
}
export async function StripePrefetch(productId: string) {
  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })
  const price = product.default_price as Stripe.Price
  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        description: product.description,
        defaultPriceID: price.id,
        price: price.unit_amount
          ? new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(price.unit_amount / 100)
          : '',
      },
    },
  }
}
