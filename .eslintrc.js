module.exports = {
  "root": true,
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module"
  },
  "env": {
    "browser": true,
  },
  "extends": "eslint-config-bfe",
  "plugins": [
    "html"
  ],
  // add your custom rules here
  "rules": {
    // allow paren-less arrow functions
    "arrow-parens": 0,
    // allow async-await
    "generator-star-spacing": 0,
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    "quote-props": [0, "consistent-as-needed"],
    "no-lonely-if": 0,
    "dot-notation": 0,
    "no-unused-vars": 0,
    "no-nested-ternary": 0,
    "max-len": [1, 120, 4],
    "no-extra-parens": 0,
  }
}