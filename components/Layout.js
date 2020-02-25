/** @jsx jsx */
//   ^ Required to use the `sx` prop: https://theme-ui.com/sx-prop
import { jsx, Flex, Styled } from "theme-ui"
import Head from "next/head"

export const Layout = ({ children }) => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Head>
        <title>UglyCauc.us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header
        sx={{
          bg: "background",
          p: [2, 3],
          textAlign: "center",
          borderBottom: "2px solid black",
        }}
      >
        <a href="/">
          <Styled.h1
            sx={{
              textDecoration: "underline",
              color: "gray.1",
              px: [2, 5],
              fontWeight: "bold",
              fontFamily: "work",
            }}
          >
            UglyCauc.us
          </Styled.h1>
        </a>

        <Styled.h3 sx={{ color: "gray.2" }}>
          Inspecting the nevada caucus results.
        </Styled.h3>
        <Styled.code sx={{ display: ["block", "none"] }}>
          This site is optimized for wide (desktop) displays.
        </Styled.code>
      </header>
      <main
        sx={{
          flex: "1 1 auto",
          width: "100%",
        }}
      >
        {children}
      </main>
      <footer
        sx={{
          bg: "white",
          py: [2, 3],
          px: [2, 5],
          color: "black",
          borderTop: "2px solid black",
        }}
      >
        <Styled.p sx={{ color: "gray.1" }}>©2020</Styled.p>
        <Styled.a sx={{ color: "gray.1" }} href="/about">
          About
        </Styled.a>
      </footer>
    </Flex>
  )
}
