import React from "react"
export default ({ buildTime }) => <div>Site built at {buildTime.toString}</div>

// eslint-disable-next-line @typescript-eslint/camelcase
export const unstable_getStaticProps = async (...args) => {
  console.log({ args })
  const buildTime = new Date()
  return { props: { buildTime } }
  // return { data: (results as unknown) as any PrecinctData }
}
