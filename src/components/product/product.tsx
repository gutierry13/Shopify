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
}: {
  image: string
  children: React.ReactNode
}) {
  console.log(children)
  return (
    <ProductContainer>
      <ImageContainer>
        <img src={image} alt="" />
      </ImageContainer>
      <ProductDetails>{children}</ProductDetails>
    </ProductContainer>
  )
}
