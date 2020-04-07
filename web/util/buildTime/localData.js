// @ts-check
const path = require("path")
const fs = require("fs")
const { massageResult } = require("./massageData")

const projectRoot = path.resolve()

const getPaths = state => ({
  csvPath: path.resolve(projectRoot, "data", state, "results.csv"),
  jsonPath: path.resolve(projectRoot, "data", state, "results.json"),
})

exports.transformCSVs = function transformCSVs(states) {
  states.forEach(state => {
    const { csvPath, jsonPath } = getPaths(state)
    const csv = fs.readFileSync(csvPath, { encoding: "utf-8" })
    const data = massageResult(csv)
    fs.writeFileSync(jsonPath, JSON.stringify(data), { encoding: "utf-8" })
  })
}
