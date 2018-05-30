
## Linting ##

```shell
yarn add babel-eslint prettier-eslint flow-bin babel-preset-flow eslint eslint-plugin-prettier eslint-plugin-react --dev
```

At `.eslintrc` file:
```json
{
  "env": {
    "amd": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "plugins": [
    "prettier",
    "react"
  ],
  "parser": "babel-eslint",
  "rules": {
    "prettier/prettier": "error"
  }
}
```

## Editor Config ##

At `.editorconfig` file:
```ini
root = true

[*]
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
charset = utf-8

[*.js]
indent_style = space
indent_size = 2

[*.jsx]
indent_style = space
indent_size = 2

[{package.json,*.yml,*.cjson}]
indent_style = space
indent_size = 2

```