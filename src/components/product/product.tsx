'use client'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/styles/product'
import axios from 'axios'
import React from 'react'

export default function ProductPage({
  children,
  image,
  defaultPriceID,
}: {
  image: string
  children: React.ReactNode
  defaultPriceID: string
}) {
  async function handleButProduct() {
    // try {
    const response = await axios.post('/api/checkout', {
      priceID: defaultPriceID,
    })
    const { checkoutUrl } = response.data
    window.location.href = checkoutUrl
    console.log(response.data)
    // } catch (err) {
    //   alert('Falha ao carregar o checkout')
    // }
  }
  return (
    <ProductContainer>
      <ImageContainer>
        <img src={image} alt="" />
      </ImageContainer>
      <ProductDetails>
        {children}
        <button onClick={handleButProduct}>Comprar</button>
      </ProductDetails>
    </ProductContainer>
  )
}
