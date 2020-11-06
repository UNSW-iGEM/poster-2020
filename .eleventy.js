const yaml = require("js-yaml");

module.exports = function(eleventyConfig) {
    eleventyConfig.addDataExtension("yml", contents => yaml.safeLoad(contents));
    eleventyConfig.addPassthroughCopy({"build/*": "assets"});
    eleventyConfig.addPassthroughCopy('site/assets')
    return {
        dir: {
            input: "site",
            output: "dist",
            layouts: "_layouts"
          }
    };
}
