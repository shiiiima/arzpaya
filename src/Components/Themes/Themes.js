import { createGlobalStyle } from "styled-components";
export const lightTheme = {
  body: "#FFF",
  fontColor: "#363537",
  toggleBorder: "#FFF",
  background: "#363537",
};
export const darkTheme = {
  body: "#363537",
  fontColor: "#FAFAFA",
  toggleBorder: "#6B8096",
  background: "#999",
};

export const GlobalStyles = createGlobalStyle`
body {
    background-color:${(props) => props.theme.body};
}
`;
