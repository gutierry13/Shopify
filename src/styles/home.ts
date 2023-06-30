import { styled } from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  /* gap: 3rem; */
  width: 100%;
  margin-left: auto;
  max-width: calc(100vw - ((100vw - 1180px) / 2));
  min-height: 656px;
`
export const Products = styled.div`
  background: linear-gradient(180deg, #1ea483 0%, #7465d4 100%);
  border-radius: 8px;
  /* padding: 0.25rem; */
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  img {
    object-fit: cover;
  }
  footer {
    position: absolute;
    bottom: 0.25rem;
    left: 0.25rem;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    transform: translateY(110%);
    opacity: 0;
    transition: all 0.2s ease-in-out;
    strong {
      color: ${(props) => props.theme['gray-100']};
      font-size: ${(props) => props.theme['text-lg']};
    }
    span {
      color: ${(props) => props.theme['gray-300']};
      font-size: ${(props) => props.theme['text-xl']};
      font-weight: bold;
    }
  }
  &:hover {
    footer {
      transform: translateY(0%);
      opacity: 1;
    }
  }
`
