//无用哦
module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-essential",
        "plugin:prettier/recommended" // 解决ESlint和Prettier冲突
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "vue"
    ],
    "rules": {
        "scss/double-slash-comment-whitespace-inside":"off",
        // "@typescript-eslint/no-unused-vars": "off",
        "vue/multi-word-component-names":"off",
        "@typescript-eslint/ban-types": [
      "error",
      {
          "extendDefaults": true,
          "types": {
              "{}": false
          }
      }
    ]
    }
}
