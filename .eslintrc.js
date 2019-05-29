const path = require('path');

module.exports = {
 "parser": "babel-eslint",
 "extends": "airbnb",
 settings: {
   'import/resolver': {
     node: {
       paths: [path.resolve(__dirname, './src')],
     },
   },
 },
 "env": {
   "browser": true,
   "node": true,
   "jest": true,
   "es6": true
 },
 "plugins": [
   "react",
   "prettier"
 ],
 "parserOptions": {
   "ecmaVersion": 6,
   "sourceType": "module",
   "ecmaFeatures": {
     "jsx": true
   }
 },
 "rules": {
     "no-tabs": 0,
     "react/forbid-prop-types": 0,
     "no-shadow": 0,
     "no-underscore-dangle": 0,
     "no-mixed-spaces-and-tabs": 0,
     "react/jsx-filename-extension": 0,
     "react/jsx-indent": 0,
     "react/jsx-closing-bracket-location": 0,
     "react/jsx-indent-props": 0,
 },
};
