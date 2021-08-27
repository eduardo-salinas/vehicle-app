import { createGlobalStyle } from 'styled-components';
import fund from './assets/fund.jpg'

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin:0;
    padding:0;
    font-family: 'Oswald', sans-serif;
    color:#311D3F;
    letter-spacing: 0.1em;
}
a{
    color:#311D3F;
    text-decoration:none;
}
a:hover{
    color:#311D3F;
    transform: scale(1.2);
}
body{
    width: 100%;
    height: 100%;
    background-image:linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${fund});
    background-size: cover;    
    background-position: center;
    background-attachment: fixed;    
    background-repeat: no-repeat;
}

`


export default GlobalStyle;