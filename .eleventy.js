const yaml = require("js-yaml");

module.exports = function (eleventyConfig) {
  eleventyConfig.addDataExtension("yml", (contents) => yaml.safeLoad(contents));
  eleventyConfig.addPassthroughCopy({ "build/*": "assets" });
  eleventyConfig.addPassthroughCopy("site/assets");
  eleventyConfig.addCollection("sectionRowSorted", function (collectionApi) {
    return collectionApi.getFilteredByTag("section").sort(function (a, b) {
      return a.data.row- b.data.row;
    });
  });
  return {
    dir: {
      input: "site",
      output: "dist",
      layouts: "_layouts",
    },
  };
};
