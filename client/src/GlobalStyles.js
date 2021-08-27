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
body{
    width: 100%;
    height: 100%;
    background-image:linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${fund});
    background-size: cover;    
    background-position: center;
    background-attachment: fixed;    
    background-repeat: no-repeat;
}
a{
    text-decoration:none ;
}
button{
    display:flex; 
    align-items:center ;
    text-align:center;
    color : #311D3F ;
    border:solid #311D3F ;
}
`


export default GlobalStyle;