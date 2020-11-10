const yaml = require("js-yaml");

module.exports = function (eleventyConfig) {
  eleventyConfig.addDataExtension("yml", (contents) => yaml.safeLoad(contents));
  eleventyConfig.addPassthroughCopy({ "build/*": "assets" });
  eleventyConfig.addPassthroughCopy("site/assets");
  eleventyConfig.addCollection("sectionRowSorted", function (collectionApi) {
    return collectionApi.getFilteredByTag("section").sort(function (a, b) {
      // console.log(a.fileSlug, a.data.col, b.fileSlug, b.data.col)
      return (a.data.row - b.data.row) || (a.data.col - b.data.col);
    });
  });
  eleventyConfig.addWatchTarget("./site/scss/");
  eleventyConfig.setBrowserSyncConfig(require('./bs-config'));
  return {
    dir: {
      input: "site",
      output: "dist",
      layouts: "_layouts",
    },
  };
};
