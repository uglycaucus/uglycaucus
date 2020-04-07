import React from "react"
import { NextPage } from "next"
import { Layout } from "../../components/Layout"
import { UserContext } from "../../components/Context"
import { Main } from "../../components/Main"

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

export const getStaticPaths = () => {
  return {
    paths: (process.env.STATES as string)
      .split(",")
      .map(state => `/states/${state}`),

    fallback: false,
  }
}

export const getStaticProps = async (...args) => {
  const state = args[0].params.name
  const data = require(`../../data/${state}/results.json`)

  return { props: { data } }
}

export default Nevada
