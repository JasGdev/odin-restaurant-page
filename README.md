# Steps to setup Webpack


### 1. Creates a package.json file in it for npm to record information about packages we use

```bash
npm init -y --init-type=module
```

### 2. install Webpack

```bash
npm install --save-dev webpack webpack-cli
```

### 3. Make src directory and setup files

```bash
mkdir src && touch src/index.js
```

### 4. In project Root create a webpack.config.js

```bash
// webpack.config.js
import path from "node:path";

export default {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(import.meta.dirname, "dist"),
    clean: true,
  },
};
```

### 5. Run Webpack to create bundle

```bash
npx webpack
```


