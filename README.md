# eslint-config-typescript-recommended

> TSLint recommended rules for ESLint

See [eslint](https://github.com/eslint/eslint) for recommended rules.
See [tslint](https://github.com/palantir/tslint) for recommended rules.
See [eslint-plugin-typescript](https://github.com/nzakas/eslint-plugin-typescript) for available rules.

This config will use recommended rules in `tslint` when they are available in `eslint`.
Additionally this config will use available rules from `eslint-plugin-typescript` and configure when possible like recommended rules in `tslint`.

## Install

```bash
npm install --save-dev eslint-config-typescript-recommended
```

Then, add this to your .eslintrc file:

```
{
  "extends": ["typescript-recommended"]
}
```
