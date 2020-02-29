import React, { Dispatch, SetStateAction } from "react"
// import { PrecinctData } from "../util/precinctData"

interface UserContext {
  selectedPrecinct: string | null
  setSelectedPrecinct: Dispatch<SetStateAction<null>>
  data: any
  // data: PrecinctData
}

export const UserContext = React.createContext<UserContext | null>(null)
