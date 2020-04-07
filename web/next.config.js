// @ts-check
require("dotenv").config()
const { transformCSVs } = require("./util/buildTime/localData")
const { STATES } = process.env

const enabledStates = (STATES && STATES.split(",")) || ["missing states"]

transformCSVs(enabledStates)

module.exports = {
  exportTrailingSlash: true,
  env: {
    ENABLE_MAP: process.env.ENABLE_MAP,
    enabledStates,
  },
}
