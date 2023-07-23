import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

:root{
    /* ============COLOR============ */
    --color-black: #000000;
    --color-light-black: #333333; 
    --color-white: #FFFFFF;
    --color-red: #F03738;
    --color-primary: #024EEE;
    --color-primary-light: #DBE1FD;
    --color-primary-hover: #003AD6;
    --color-gray: #565656;
    --color-light-gray: #DEDEDE;
    --color-gray-hover: #F0F2F3;

    /* ============FONT SIZE============ */
    --font-extra-large: 40px;
    --font-large: 32px;
    --font-medium: 26px;
    --font-regular: 16px;
    --font-small: 14px;
    --font-micro: 12px;

    /* ============FONT WEIGHT============ */
    --weight-bold: 700;
    --weight-semi-bold: 600; 
    --weight-regular: 400;
    --weight-light: 300;

    /* ============SIZE============ */
    --size-extra-large: 200px;
    --size-large: 150px;
    --size-medium: 120px;
    --size-small: 80px;
    --size-border-radius: 10px;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
}

body{
    background-color: var(--color-white);
    color: var(--color-light-black);
}

button{
    background-color: transparent;
    cursor: pointer;
    border: none;
    outline: none;
}

input {
    border: none;
    background-image: none;
    background-color: transparent;
    box-shadow: none;
    outline: none;
} 

ul{
    list-style: none;
    padding: 0;
    margin: 0;
} 
`;
