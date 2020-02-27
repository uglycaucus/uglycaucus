require("dotenv").config()

module.exports = {
  exportTrailingSlash: true,
  env: {
    ENABLE_MAP: process.env.ENABLE_MAP,
  },
  // exportPathMap: function() {
  //   return {
  //     '/': { page: '/' },
  //     '/about': { page: '/about' },
  // may be worth returning to this method of rendering if we are querying a whole directory of data and dynamically generating pages from it
  //     '/states/nevada' : { page: '/states/nevada'},
  //     };
  // }
}
