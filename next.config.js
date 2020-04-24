// @ts-check
require("dotenv").config()

const { transformCSVs } = require("./util/buildTime/localData")

transformCSVs()

module.exports = {
  env: {
    ENABLE_MAP: process.env.ENABLE_MAP,
  },
}
