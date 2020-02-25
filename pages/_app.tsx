import React from "react"
import { AppProps } from "next/app"
import { ThemeProvider } from "theme-ui"
import { theme } from "../util/theme"
import "../assets/styles/index.css"

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
