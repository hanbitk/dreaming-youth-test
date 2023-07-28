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
    --color-dark-gray: #565656;
    --color-gray: #E0E4E8;
    --color-light-gray: #DEDEDE;
    --color-cool-gray: #F6F7F8;
    --color-gray-hover: #F0F2F3;
    --color-gray-select-hover: #BEBEBE;
    --color-white-select-box: #FAFBFC;
    --color-gray-inactive: #777777;

    /* ============FONT SIZE============ */
    --font-extra-large: 40px;
    --font-large: 32px;
    --font-medium: 26px;
    --font-regular: 14px;
    --font-small: 12px;
    --font-micro: 10px;

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
    --size-border-radius: 5px;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
}

body{
    background-color: var(--color-white);
    color: var(--color-dark-black);
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
