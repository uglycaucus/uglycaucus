/* eslint-disable @typescript-eslint/camelcase */

exports.precinctId = candidatePrecinct => {
  const { county, precinct } = candidatePrecinct
  return `${county}-${precinct}`
  // return GEOID10;
}

exports.candidateDisplayName = key => candidateNames[key] || key

exports.precinctDisplayName = candidatePrecinct => {
  const { county, precinct } = candidatePrecinct
  return `${county} ${precinct}`
}

const candidateNames = {
  delaneyj: "John Delaney",
  bennetm: "Michael Bennet",
  bidenj: "Joe Biden",
  bloombergm: "Mike Bloombefg",
  buttigiegp: "Pete Buttigieg",
  gabbardt: "Tulsi Gabbard",
  klobuchara: "Amy Klobuchar",
  other: "Other",
  patrickd: "Deval Patrick",
  sandersb: "Bernie Sanders",
  steyert: "Tom Steyer",
  uncommitted: "Uncommitted",
  warrene: "Elizabeth Warren",
  yanga: "Andrew Yang",
}
