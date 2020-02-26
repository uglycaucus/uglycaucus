
module.exports = {
    exportTrailingSlash: true,
    exportPathMap: function() {
      return {
        '/': { page: '/' },
        '/about': { page: '/about' },
        '/states/nevada' : { page: '/states/nevada'},
        };
    }
  };