import { createTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";

const theme = createTheme({
  typography: {
    useNextVariants: true,
    
  },
  background: "#f5f5f5",
  palette: {
    primary: {
      light: "#5c67a3",
      main: "#3f4771",
      dark: "#2e355b",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff79b0",
      main: "#ff4081",
      dark: "#c60055",
      contrastText: "#000",
    },
    openTitle: "#212121",
    protectedTitle: green["400"],
    type: "light",
    
  },
});
export default theme;
