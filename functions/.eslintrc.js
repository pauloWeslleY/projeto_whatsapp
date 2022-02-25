module.exports = {
   "root": true,
   "env": {
      es6: true,
      node: true,
   },
   "extends": [
      "eslint:recommended",
      "google",
   ],
   "rules": {
      "quotes": ["error", "double"],
      "indent": ["error", 3],
      // disable
      "linebreak-style": "off",
      "no-unused-vars": "off",
      "no-tabs": "off",
      "max-len": "off",
      "prefer-const": "off",
   },
};
