// @ts-check
require("dotenv").config()

const { transformCSVs } = require("./util/buildTime/localData")

transformCSVs()

module.exports = {
  exportTrailingSlash: true,
  env: {
    ENABLE_MAP: process.env.ENABLE_MAP,
  },
}
