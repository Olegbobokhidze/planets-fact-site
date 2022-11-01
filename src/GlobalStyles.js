import { createGlobalStyle } from "styled-components";
import BackgroundStars from "./background-stars.svg";
export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin:0px;
    padding:0;
}
body{
    width:100vw;
    height:100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    overflow-x: hidden;
    /* font-family: 'Antonio', sans-serif; */
    /* font-family: 'League Spartan', sans-serif; */
    color:white;
    background-image: url(${BackgroundStars});
    background-color: #070724;
    background-repeat: no-repeat;
    background-size: cover;
}
`;
