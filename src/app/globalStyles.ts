import {createGlobalStyle} from 'styled-components'
export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    --webkit-font-smoothing: antialiased;
    background-color: ${props=>props.theme['gray-900']};
  }
  body,input,textarea,button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }
`
