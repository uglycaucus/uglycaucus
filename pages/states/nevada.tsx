import React from "react"
import { NextPage } from "next"
import fetch from "isomorphic-unfetch"
import { Layout } from "../../components/Layout"
import { UserContext } from "../../components/Context"
import { Main } from "../../components/Main"
import { Styled } from "theme-ui"
import { massageResult } from "../../util/precinctData"
// import { PrecinctData } from "../../util/precinctData"

interface Props {
  // data: PrecinctData
  data: any
  error?: string
}

import "core-js/fn/array/flat-map";

const Nevada: NextPage<Props> = ({ data, error }) => {
  if (error) return <p>error: {error}</p>
  const [selectedPrecinct, setSelectedPrecinct] = React.useState(null)
  return (
    <Layout>
      <UserContext.Provider
        value={{ selectedPrecinct, setSelectedPrecinct, data }}
      >
        <Main />
      </UserContext.Provider>
    </Layout>
  )
}

Nevada.getInitialProps = async ({ query: _query }) => {
  // if (query.state !== "nevada")
  //   return { data: {}, error: "State not available" }
  const result = await fetch("https://nevada-cranks.herokuapp.com/results")
  const csv = await result.text()
  const data = massageResult(csv)
  return { data: data as any }
  // return { data: (results as unknown) as any PrecinctData }
}

export default Nevada
