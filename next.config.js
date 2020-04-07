// @ts-check
require("dotenv").config()
const fs = require("fs")
const path = require("path")
const { transformCSVs } = require("./util/buildTime/localData")

const enabledStates = fs.readdirSync(path.resolve("data", "build"))
console.warn("Enabled States: ", enabledStates.join(", "))

transformCSVs(enabledStates)

module.exports = {
  exportTrailingSlash: true,
  env: {
    ENABLE_MAP: process.env.ENABLE_MAP,
    enabledStates,
  },
}
