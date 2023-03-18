## Dev Server

```bash
yarn
yarn dev
```

## Build for production

```bash
yarn build
firebase deploy
```

This runs the `slinkity` command to kick off a 2 step build process:
- Use 11ty to build your routes and copy over static assets
- Use Vite to bundle, minify, and optimize your styles and JS resources

Your new site will appear in the `dist` folder.
