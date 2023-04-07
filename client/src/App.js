import React from 'react';
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";

import MainRouter from "./MainRouter";

const App = () => {
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
    <MainRouter/>
    </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
