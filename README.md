## Dev Server

```bash
npm i
npm run dev
```

## Build for production

```bash
npm run build
firebase deploy
```

This runs the `slinkity` command to kick off a 2 step build process:
- Use 11ty to build your routes and copy over static assets
- Use Vite to bundle, minify, and optimize your styles and JS resources

Your new site will appear in the `_site` folder, or [wherever you tell 11ty to build your site](https://www.11ty.dev/docs/config/#output-directory).
