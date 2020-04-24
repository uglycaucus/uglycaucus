// @ts-check
const path = require("path")
const fs = require("fs")
const { massageResult } = require("./massageData")

const projectRoot = path.resolve()

const getPaths = state => ({
  csvPath: path.resolve(projectRoot, "data", "build", state, "results.csv"),
  jsonPath: path.resolve(projectRoot, "data", "build", state, "results.json"),
})

const enabledStates = fs.readdirSync(path.resolve("data", "build"))
exports.enabledStates = enabledStates
exports.transformCSVs = function transformCSVs() {
  console.warn("Enabled States: ", enabledStates.join(", "))
  enabledStates.forEach(state => {
    const { csvPath, jsonPath } = getPaths(state)
    const csv = fs.readFileSync(csvPath, { encoding: "utf-8" })
    const data = massageResult(csv)
    fs.writeFileSync(jsonPath, JSON.stringify(data), { encoding: "utf-8" })
  })
}
