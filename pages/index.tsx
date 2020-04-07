/** @jsx jsx */
import { NextPage } from "next"

import Link from "next/link"
import { Styled, Box, jsx } from "theme-ui"
import { Layout } from "../components/Layout"

const Home: NextPage = () => {
  return (
    <Layout>
      <Box sx={{ textAlign: "center", py: 4 }}>
        <Link href="/states/[name]" as="/states/nevada">
          <Styled.a
            sx={{ fontFamily: "sans", cursor: "grabbing", fontSize: 3 }}
          >
            Try Nevada
          </Styled.a>
        </Link>
      </Box>
    </Layout>
  )
}

export default Home
