# eslint-config-typescript-recommended

> TSLint recommended rules for ESLint

See [eslint](https://github.com/eslint/eslint) for recommended rules.
See [tslint](https://github.com/palantir/tslint) for recommended rules.
See [eslint-plugin-typescript](https://github.com/nzakas/eslint-plugin-typescript) for available rules.

This config add recommended rules from `tslint` when they are available in `eslint`.
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
## Mapped Rules

TSLint | ESLint
:---: | :---:
adjacent-overload-signatures | *-*
align | *-*
arrow-parens | arrow-parens
arrow-return-shorthand | arrow-body-style
array-type | *-*
ban-comma-operator | *-*
ban-types | *-*
callable-types | *-*
class-name | typescript/class-name-casing
comment-format | spaced-comment
curly | curly
cyclomatic-complexity | complexity
eofline | eol-last
forin | guard-for-in
import-spacing | keyword-spacing
indent | indent
interface-name | typescript/interface-name-prefix
interface-over-type-literal | typescript/no-type-alias
jsdoc-format | valid-jsdoc
label-position | no-labels
max-classes-per-file | max-classes-per-file
max-line-length | max-len
member-access | typescript/explicit-member-accessibility
member-ordering | typescript/member-ordering
new-parens | new-parens
no-angle-bracket-type-assertion | typescript/no-angle-bracket-type-assertion
no-any | typescript/no-explicit-any
no-arg | no-caller
no-bitwise | no-bitwise
no-conditional-assignment | no-cond-assign
no-consecutive-blank-lines | no-multiple-empty-lines
no-console | no-console
no-construct | no-new-wrappers
no-debugger | no-debugger
no-duplicate-imports | *-*
no-duplicate-super | *-*
no-duplicate-switch-case | no-duplicate-case
no-duplicate-variable | no-redeclare
no-empty | no-empty
no-empty-interface | typescript/no-empty-interface
no-eval | no-eval
no-implicit-dependencies | *-*
no-internal-module | typescript/prefer-namespace-keyword
no-invalid-template-strings | no-template-curly-in-string
no-invalid-this | no-invalid-this
no-misused-new | *-*
no-namespace | typescript/no-namespace
no-object-literal-type-assertion | *-*
no-parameter-properties | typescript/no-parameter-properties
no-reference | typescript/no-triple-slash-reference
no-reference-import | *-*
no-return-await | no-return-await
no-shadowed-variable | no-shadow
no-sparse-arrays | no-sparse-arrays
no-string-literal | object-shorthand
no-string-throw | no-throw-literal
no-submodule-imports | *-*
no-switch-case-fall-through | no-fallthrough
no-this-assignment | *-*
no-trailing-whitespace | no-trailing-spaces
no-unnecessary-initializer | no-undef-init
no-unsafe-finally | no-unsafe-finally
no-unused-expression | no-new
no-use-before-declare | no-use-before-define
no-var-keyword | no-var
no-var-requires | typescript/no-var-requires
prefer-conditional-expression | no-cond-assign
prefer-object-spread | prefer-object-spread
space-within-parens | space-within-parens
whitespace | keyword-spacing, space-infix-ops, comma-spacing, semi-spacing, rest-spread-spacing
