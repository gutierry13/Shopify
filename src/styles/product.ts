import { styled } from 'styled-components'

export const ProductContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: stretch;
  max-width: 1180px;
  gap: 4rem;
  margin: 0 auto;
  width: 100%;
`
export const ImageContainer = styled.div`
  width: 100%;
  max-width: 576px;
  height: calc(656px - 0.5rem);
  background-color: red;
  border-radius: 8px;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    object-fit: cover;
  }
`
export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  h1 {
    font-size: ${(props) => props.theme['text-xxl']};
    color: ${(props) => props.theme['gray-300']};
  }
  span {
    font-size: ${(props) => props.theme['text-xxl']};
    color: ${(props) => props.theme['green-300']};
    margin-top: 1rem;
    display: block;
  }
  p {
    font-size: ${(props) => props.theme['text-sm']};
    margin-top: 2.5rem;
    line-height: 1.5;
    color: ${(props) => props.theme['gray-300']};
  }
  button {
    margin-top: auto;
    background-color: ${(props) => props.theme['green-500']};
    color: ${(props) => props.theme.white};
    border: 0;
    border-radius: 8px;
    cursor: pointer;
    padding: 1.25rem;
    font-weight: bold;
    font-size: ${(props) => props.theme['text-sm']};
    transition: background 0.2s;
    &:hover {
      background-color: ${(props) => props.theme['green-300']};
    }
  }
`
