# eslint-config-typescript-recommended

[![Build Status](https://img.shields.io/travis/diva-e/eslint-config-typescript-recommended.svg)](https://travis-ci.org/diva-e/eslint-config-typescript-recommended)

> TSLint recommended rules for ESLint

See [eslint](https://github.com/eslint/eslint) for recommended rules.
See [tslint](https://github.com/palantir/tslint) for recommended rules.
See [eslint-plugin-typescript](https://github.com/nzakas/eslint-plugin-typescript) for available rules.

This config adds recommended rules from `tslint` when they are available in `eslint`.
Available rules from `eslint-plugin-typescript` will be included when needed.


## Pre-Install

[eslint](https://github.com/eslint/eslint) and [eslint-plugin-typescript](https://github.com/nzakas/eslint-plugin-typescript) are installed and configured via eslint config.

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
adjacent-overload-signatures | typescript/adjacent-overload-signatures
align | *-*
arrow-parens | arrow-parens
arrow-return-shorthand | arrow-body-style
array-type | *-*
ban-comma-operator | no-sequences
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
jsdoc-format | *-*
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
no-duplicate-imports | no-duplicate-imports
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
no-unused-expression | no-unused-expressions
no-use-before-declare | no-use-before-define
no-var-keyword | no-var
no-var-requires | typescript/no-var-requires
object-literal-key-quotes | quote-props
object-literal-shorthand | object-shorthand
object-literal-sort-keys | sort-keys
one-line | no-unexpected-multiline
one-variable-per-declaration | one-var
only-arrow-functions | prefer-arrow-callback
ordered-imports | sort-imports
prefer-conditional-expression | no-cond-assign
prefer-const | prefer-const
prefer-for-of | *-*
prefer-object-spread | prefer-object-spread
quotemark | quotes
radix | radix
semicolon | semi
space-before-function-paren | space-before-function-paren
space-within-parens | space-in-parens
trailing-comma | comma-dangle
triple-equals | eqeqeq
typedef | *-*
typedef-whitespace | *-*
typeof-compare | *-*
unified-signatures | *-*
use-isnan | use-isnan
variable-name | camelcase
whitespace | keyword-spacing, space-infix-ops, comma-spacing, semi-spacing, rest-spread-spacing
