const slinkity = require("slinkity");
const react = require("@slinkity/react");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(
    slinkity.plugin,
    slinkity.defineConfig({
      renderers: [react()],
    })
  );
  // copy Vite's public folder to Eleventy's output
  eleventyConfig.addPassthroughCopy("public");

  return {
    dir: {
      input: "src",
    },
  };
};
