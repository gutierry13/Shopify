'use client'
import styled from "styled-components"


const Button = styled.button`
  background-color: ${props=>props.theme['aqua']};
`
export default function Home() {
  return (
    <Button>Hello world</Button>
  )
}
