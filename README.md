# eslint-config-typescript-recommended

> TSLint recommended rules for ESLint recommended config

See [eslint](https://github.com/eslint/eslint) for recommended rules.
See [tslint](https://github.com/palantir/tslint) for recommended rules.
See [eslint-plugin-typescript](https://github.com/nzakas/eslint-plugin-typescript) for available rules.

This config will use recommended rules from `eslint` and add recommended rules from `tslint` when they are available in `eslint`.
Available rules from `eslint-plugin-typescript` will be included when needed.

## Install

```bash
npm install --save-dev eslint-config-typescript-recommended
```

Then, add this to your eslint config file like:

```
{
  "extends": ["typescript-recommended"]
}
```

No need for adding `eslint:recommended` in eslint config file.
