'use client'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/styles/product'
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
  function handleButProduct() {
    console.log(defaultPriceID)
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
