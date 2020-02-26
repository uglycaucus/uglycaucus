import React from "react"
import { NextPage } from "next"
import { useRouter } from "next/router"
import { Styled } from "theme-ui"

const Home: NextPage = () => {
  const router = useRouter()
  React.useEffect(() => {
    router.push("/states/nevada")
  })
  return <Styled.code>redirecting to nevada... </Styled.code>
}

export default Home
