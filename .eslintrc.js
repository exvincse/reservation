module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "@vue/airbnb",
        "plugin:vue/essential"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
      "max-len": [
        "error",
          {
            "code": 300
          }
        ],
      "no-tabs": "off",
      "no-alert": "off",
      "no-plusplus": ['error', { "allowForLoopAfterthoughts": true }],
      "space-unary-ops": [
        2, {
          "words": true,
          "nonwords": false,
          "overrides": {
            "new": false,
            "++": true
          }
      }],
      "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
    }
};