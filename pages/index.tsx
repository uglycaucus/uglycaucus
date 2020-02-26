import React from "react"
import { NextPage } from "next"
import Link from "next/link"
import { Styled, Box } from "theme-ui"
import { Layout } from "../components/Layout"



const Home: NextPage = () => (
  <Layout>
    <Box>
      <Styled.h2>
        Check out{" "}
        <Link href="/states/nevada">
          <Styled.a href="/states/nevada">Nevada (Link)</Styled.a>
        </Link>
      </Styled.h2>
      <Styled.h2>
        Check out <Styled.a href="/states/nevada">Nevada (a)</Styled.a>
      </Styled.h2>
      <Styled.h3>
        <Link href="/foo/test">
          <a>foo/test (Link)</a>
        </Link>
      </Styled.h3>
      <Styled.h3>
        <a href="/foo/test">foo/test (a)</a>
      </Styled.h3>
    </Box>
  </Layout>
)

export default Home
