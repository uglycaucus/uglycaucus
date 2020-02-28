import React from "react"
import { NextPage } from "next"
import fetch from "isomorphic-unfetch"
import { Layout } from "../../components/Layout"
import { UserContext } from "../../components/Context"
import { Main } from "../../components/Main"
import { massageResult } from "../../util/precinctData"

// get the csv from wherever
const getCsv = async () => {
  const result = await fetch("https://nevada-cranks.herokuapp.com/results")
  const csv = await result.text()
  return csv
}

interface Props {
  // data: PrecinctData
  data: any
  error?: string
}

const Nevada: NextPage<Props> = props => {
  const { data, error } = props
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

// eslint-disable-next-line @typescript-eslint/camelcase
export const unstable_getStaticProps = async (...args) => {
  console.warn("unstable_getStaticProps", { args })
  const csv = await getCsv()
  const data = massageResult(csv)
  return { props: { data: data as any } }
}

export default Nevada
