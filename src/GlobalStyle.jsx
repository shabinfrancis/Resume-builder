import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
};

html {
    font-size: 65%;
    overflow-x: hidden;
}

h1 {
    color: ${({theme}) => theme.colors.heading}
    font-size: 6rem;
    font-weight: 900;
};

h2 {
    color: ${({theme}) => theme.colors.heading}
    font-size: 5rem;
    font-weight: 400;
    white-space: normal;
    text-align: center;
};

h3 {
    color: ${({theme}) => theme.colors.heading}
    font-size: 3rem;
    font-weight: 400;
};

p {
    color: ${({theme}) => theme.colors.text}
    opacity: 0.7;
    font-size: 2rem;
    line-height: 1.5;
    margin-top: 1rem;
    font-weight: 400;
};

a {
    list-style: none;
    text-decoration: none;
};

li {
    list-style: none;
};

.grid {
    display: grid;
    gap: 9rem;
  }
  
  .grid-two-column {
    grid-template-columns: repeat(2, 1fr);
  }
  
`;