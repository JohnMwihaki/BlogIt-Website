import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4B3D3A",
    },
    secondary: {
      main: "#E0A96D",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F5F5F5",
    },
    text: {
      primary: "#4B3D3A",
      secondary: "#555555",
    },
    warning: {
      main: "#F8CC22",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h1: {
      fontFamily: "Dancing Script, cursive",
      fontWeight: 700,
      fontSize: "3rem",
      color: "red",
    }
  
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      :root {
        --primary-font: "Poppins,san-serifs";
        --secondary-font: "Lato", sans-serif,cursive;
        --deep-green: rgb(34, 93, 37);
        --orange: rgba(255, 152, 0, 1);
        --earth-brown: rgba(93, 64, 55, 1);
        --smoke-white: rgb(255, 255, 253);
        --soft-sand: rgba(245, 245, 220, 1);
        --stone-grey: rgba(189, 189, 189, 1);
        --light-grey: rgba(180, 174, 169, 0.22);
        --dark: rgba(19, 18, 18, 0.88);
        --golden-yellow: rgba(255, 213, 79, 1);
        --sky-blue: rgba(54, 26, 165, 1);
        --light-dark-blue: rgba(22, 55, 70, 1);
        --dark-blue:rgba(22, 7, 43, 1);;
        --amber: rgb(236, 33, 33);
      }
     
    `,
    },
  },
});

export default theme;
