import { stripe } from '@/lib/stripe'
import { NextResponse } from 'next/server'

export async function GET() {
  const priceID = 'price_1NLn5VJy2N6yeMWj6kPDalnr'
  const successUrl = `${process.env.NEXT_URL}/success`
  const cancelUrl = `${process.env.NEXT_URL}/`
  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: [
      {
        price: priceID,
        quantity: 1,
      },
    ],
  })
  return NextResponse.json({
    status: 201,
    checkoutUrl: checkoutSession.url,
  })
}
