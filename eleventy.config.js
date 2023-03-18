const slinkity = require("slinkity");
const react = require("@slinkity/react");
const sass = require("sass");
const { execSync } = require('child_process')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(
    slinkity.plugin,
    slinkity.defineConfig({
      renderers: [react()],
    })
  );
  eleventyConfig.addPassthroughCopy("public");

  eleventyConfig.on('eleventy.after', () => {
    execSync(`npx pagefind --source dist --glob \"**/*.html\"`, { encoding: 'utf-8' })
  })
  

  // eleventyConfig.addPlugin(mdxPlugin);

  return {
    dir: {
      input: "src",
      output: "dist",
    },
    markdownTemplateEngine: "njk",
  };
};
