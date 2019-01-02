const eslintConfig = require("../index");
const semver = require('semver'); // eslint-disable-line node/no-unpublished-require
const recommendedEslintConfig = require("eslint/conf/eslint-recommended");
const latestTslintConfig = require("tslint/lib/configs/latest"); // eslint-disable-line node/no-unpublished-require
const recommendedTslintConfig = require("tslint/lib/configs/recommended"); // eslint-disable-line node/no-unpublished-require

describe("typescript recommended rules", () => {

    test("eslint version", () => {
        expect(semver.satisfies(require("eslint/package").version, ">=5.9.0 <=5.11.1")).toBeTruthy();
    });

    test("tslint version", () => {
        expect(semver.satisfies(require("tslint/package").version, "5.12.0")).toBeTruthy(); // eslint-disable-line node/no-unpublished-require
    });

    test("eslint-plugin-typescript version", () => {
        expect(semver.satisfies(require("eslint-plugin-typescript/package").version, ">=0.13.0 <=0.14.0")).toBeTruthy();
    });

    test("number of rules", () => {
        expect(Object.keys(eslintConfig.rules).length).toBe(78);
    });

    describe("latest", () => {

        test("number of tslint rules", () => {
            expect(Object.keys(latestTslintConfig.rules).length).toBe(17);
        });

        test("align", () => {
            expect(latestTslintConfig.rules["align"]).toMatchObject({options: ["parameters", "statements", "members"]});
            expect(recommendedEslintConfig.rules["align"]).toBeUndefined();

            expect(eslintConfig.rules["align"]).toBeUndefined();
        });

        test("no-invalid-template-strings", () => {
            expect(latestTslintConfig.rules["no-invalid-template-strings"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["no-template-curly-in-string"]).toBeDefined();

            expect(eslintConfig.rules["no-template-curly-in-string"]).toBe("error");
        });

        test("no-sparse-arrays", () => {
            expect(latestTslintConfig.rules["no-sparse-arrays"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["no-sparse-arrays"]).toBeDefined();

            expect(eslintConfig.rules["no-sparse-arrays"]).toBe("error");
        });

        test("no-object-literal-type-assertion", () => {
            expect(latestTslintConfig.rules["no-object-literal-type-assertion"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["no-object-literal-type-assertion"]).toBeUndefined();

            expect(eslintConfig.rules["no-object-literal-type-assertion"]).toBeUndefined();
        });

        test("prefer-conditional-expression", () => {
            expect(latestTslintConfig.rules["prefer-conditional-expression"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["no-cond-assign"]).toBeDefined();

            expect(eslintConfig.rules["no-cond-assign"]).toBe("error");
        });

        test("prefer-object-spread", () => {
            expect(latestTslintConfig.rules["prefer-object-spread"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["prefer-object-spread"]).toBeDefined();

            expect(eslintConfig.rules["prefer-object-spread"]).toBe("error");
        });

        test("no-duplicate-variable", () => {
            expect(latestTslintConfig.rules["no-duplicate-variable"]).toMatchObject([true, "check-parameters"]);
            expect(recommendedEslintConfig.rules["no-redeclare"]).toBeDefined();

            expect(eslintConfig.rules["no-redeclare"]).toBe("error");
        });

        test("no-this-assignment", () => {
            expect(latestTslintConfig.rules["no-this-assignment"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["no-this-assignment"]).toBeUndefined();

            expect(eslintConfig.rules["no-this-assignment"]).toBeUndefined();
        });

        test("no-duplicate-imports", () => {
            expect(latestTslintConfig.rules["no-duplicate-imports"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["no-duplicate-imports"]).toBeDefined();

            expect(eslintConfig.rules["no-duplicate-imports"]).toBe("error");
        });

        test("space-within-parens", () => {
            expect(latestTslintConfig.rules["space-within-parens"]).toMatchObject([true, 0]);
            expect(recommendedEslintConfig.rules["space-in-parens"]).toBeDefined();

            expect(eslintConfig.rules["space-in-parens"]).toMatchObject(["error", "always"]);
        });

        test("no-submodule-imports", () => {
            expect(latestTslintConfig.rules["no-submodule-imports"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["no-submodule-imports"]).toBeUndefined();

            expect(eslintConfig.rules["no-submodule-imports"]).toBeUndefined();
        });

        test("whitespace", () => {
            expect(latestTslintConfig.rules["whitespace"]).toMatchObject({options: ["check-branch", "check-decl", "check-operator", "check-separator", "check-type", "check-typecast", "check-type-operator", "check-rest-spread"]});
            expect(recommendedEslintConfig.rules["keyword-spacing"]).toBeDefined();
            expect(recommendedEslintConfig.rules["space-infix-ops"]).toBeDefined();
            expect(recommendedEslintConfig.rules["comma-spacing"]).toBeDefined();
            expect(recommendedEslintConfig.rules["semi-spacing"]).toBeDefined();
            expect(recommendedEslintConfig.rules["rest-spread-spacing"]).toBeDefined();

            expect(eslintConfig.rules["keyword-spacing"]).toMatchObject(["error", {after: true}]);
            expect(eslintConfig.rules["space-infix-ops"]).toBe("error");
            expect(eslintConfig.rules["comma-spacing"]).toBe("error");
            expect(eslintConfig.rules["semi-spacing"]).toMatchObject(["error", {before: false, after: true}]);
            expect(eslintConfig.rules["rest-spread-spacing"]).toBe("error");
        });

        test("ban-comma-operator", () => {
            expect(latestTslintConfig.rules["ban-comma-operator"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["no-sequences"]).toBeDefined();

            expect(eslintConfig.rules["no-sequences"]).toBe("error");
        });

        test("jsdoc-format", () => {
            expect(latestTslintConfig.rules["jsdoc-format"]).toMatchObject({options: "check-multiline-start"});
            expect(recommendedEslintConfig.rules["jsdoc-format"]).toBeUndefined();

            expect(eslintConfig.rules["jsdoc-format"]).toBeUndefined();
        });

        test("no-duplicate-switch-case", () => {
            expect(latestTslintConfig.rules["no-duplicate-switch-case"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["no-duplicate-case"]).toBeDefined();

            expect(eslintConfig.rules["no-duplicate-case"]).toBe("error");
        });

        test("no-implicit-dependencies", () => {
            expect(latestTslintConfig.rules["no-implicit-dependencies"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["no-implicit-dependencies"]).toBeUndefined();

            expect(eslintConfig.rules["no-implicit-dependencies"]).toBeUndefined();
        });

        test("no-return-await", () => {
            expect(latestTslintConfig.rules["no-return-await"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["no-return-await"]).toBeDefined();

            expect(eslintConfig.rules["no-return-await"]).toBe("error");
        });
    });

    describe("ts", () => {

        test("number of tslint rules", () => {
            expect(Object.keys(recommendedTslintConfig.rules).length).toBe(78);
        });

        test("adjacent-overload-signatures", () => {
            expect(recommendedTslintConfig.rules["adjacent-overload-signatures"]).toBeTruthy();
            expect(require("eslint-plugin-typescript/lib/rules/adjacent-overload-signatures")).toBeDefined();
            expect(recommendedEslintConfig.rules["adjacent-overload-signatures"]).toBeUndefined();

            expect(eslintConfig.rules["typescript/adjacent-overload-signatures"]).toBe("error");
        });

        test("align", () => {
            expect(recommendedTslintConfig.rules["align"]).toMatchObject({options: ["parameters", "statements"]});
            expect(recommendedEslintConfig.rules["align"]).toBeUndefined();

            expect(eslintConfig.rules["align"]).toBeUndefined();
        });

        test("array-type", () => {
            expect(recommendedTslintConfig.rules["array-type"]).toMatchObject({options: ["array-simple"]});
            expect(recommendedEslintConfig.rules["array-type"]).toBeUndefined();

            expect(eslintConfig.rules["array-type"]).toBeUndefined();
        });

        test("arrow-parens", () => {
            expect(recommendedTslintConfig.rules["arrow-parens"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["arrow-parens"]).toBeDefined();

            expect(eslintConfig.rules["arrow-parens"]).toBe("error");
        });

        test("arrow-return-shorthand", () => {
            expect(recommendedTslintConfig.rules["arrow-return-shorthand"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["arrow-body-style"]).toBeDefined();

            expect(eslintConfig.rules["arrow-body-style"]).toMatchObject(["error", "as-needed"]);
        });

        test("ban-types", () => {
            expect(recommendedTslintConfig.rules["ban-types"]).toMatchObject({options: [["Object", "Avoid using the `Object` type. Did you mean `object`?"], ["Function", "Avoid using the `Function` type. Prefer a specific function type, like `() => void`."], ["Boolean", "Avoid using the `Boolean` type. Did you mean `boolean`?"], ["Number", "Avoid using the `Number` type. Did you mean `number`?"], ["String", "Avoid using the `String` type. Did you mean `string`?"], ["Symbol", "Avoid using the `Symbol` type. Did you mean `symbol`?"]]});
            expect(recommendedEslintConfig.rules["ban-types"]).toBeUndefined();

            expect(eslintConfig.rules["ban-types"]).toBeUndefined();
        });

        test("callable-types", () => {
            expect(recommendedTslintConfig.rules["callable-types"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["bcallable-types"]).toBeUndefined();

            expect(eslintConfig.rules["callable-types"]).toBeUndefined();
        });

        test("class-name", () => {
            expect(recommendedTslintConfig.rules["class-name"]).toBeTruthy();
            expect(require("eslint-plugin-typescript/lib/rules/class-name-casing")).toBeDefined();
            expect(recommendedEslintConfig.rules["class-name"]).toBeUndefined();

            expect(eslintConfig.rules["typescript/class-name-casing"]).toBe("error");
        });

        test("comment-format", () => {
            expect(recommendedTslintConfig.rules["comment-format"]).toMatchObject({options: ["check-space"]});
            expect(recommendedEslintConfig.rules["spaced-comment"]).toBeDefined();

            expect(eslintConfig.rules["spaced-comment"]).toBe("error");
        });

        test("curly", () => {
            expect(recommendedTslintConfig.rules["curly"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["curly"]).toBeDefined();

            expect(eslintConfig.rules["curly"]).toBe("error");
        });

        test("cyclomatic-complexity", () => {
            expect(recommendedTslintConfig.rules["cyclomatic-complexity"]).toBeFalsy();
            expect(recommendedEslintConfig.rules["complexity"]).toBeDefined();

            expect(eslintConfig.rules["complexity"]).toBe("off");
        });

        test("eofline", () => {
            expect(recommendedTslintConfig.rules["eofline"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["eol-last"]).toBeDefined();

            expect(eslintConfig.rules["eol-last"]).toBe("error");
        });

        test("forin", () => {
            expect(recommendedTslintConfig.rules["forin"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["guard-for-in"]).toBeDefined();

            expect(eslintConfig.rules["guard-for-in"]).toBe("error");
        });

        test("function-constructor", () => {
            expect(recommendedTslintConfig.rules["function-constructor"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["no-new-func"]).toBeDefined();

            expect(eslintConfig.rules["no-new-func"]).toBe("error");
        });

        test("import-spacing", () => {
            expect(recommendedTslintConfig.rules["import-spacing"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["keyword-spacing"]).toBeDefined();

            expect(eslintConfig.rules["keyword-spacing"]).toMatchObject(["error", {after: true}]);
        });

        test("indent", () => {
            expect(recommendedTslintConfig.rules["indent"]).toMatchObject({options: ["spaces"]});
            expect(recommendedEslintConfig.rules["indent"]).toBeDefined();

            expect(eslintConfig.rules["indent"]).toBe("error");
        });

        test("interface-name", () => {
            expect(recommendedTslintConfig.rules["interface-name"]).toMatchObject({options: ["always-prefix"]});
            expect(require("eslint-plugin-typescript/lib/rules/interface-name-prefix")).toBeDefined();
            expect(recommendedEslintConfig.rules["interface-name"]).toBeUndefined();

            expect(eslintConfig.rules["typescript/interface-name-prefix"]).toMatchObject(["error", "always"]);
        });

        test("interface-over-type-literal", () => {
            expect(recommendedTslintConfig.rules["interface-over-type-literal"]).toBeTruthy();
            expect(require("eslint-plugin-typescript/lib/rules/no-type-alias")).toBeDefined();
            expect(recommendedEslintConfig.rules["interface-over-type-literal"]).toBeUndefined();

            expect(eslintConfig.rules["typescript/no-type-alias"]).toBe("error");
        });

        test("jsdoc-format", () => {
            expect(recommendedTslintConfig.rules["jsdoc-format"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["jsdoc-format"]).toBeUndefined();

            expect(eslintConfig.rules["jsdoc-format"]).toBeUndefined();
        });

        test("label-position", () => {
            expect(recommendedTslintConfig.rules["label-position"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["no-labels"]).toBeDefined();

            expect(eslintConfig.rules["no-labels"]).toBe("error");
        });

        test("max-classes-per-file", () => {
            expect(recommendedTslintConfig.rules["max-classes-per-file"]).toMatchObject({options: [1]});
            expect(recommendedEslintConfig.rules["max-classes-per-file"]).toBeDefined();

            expect(eslintConfig.rules["max-classes-per-file"]).toBe("error");
        });

        test("max-line-length", () => {
            expect(recommendedTslintConfig.rules["max-line-length"]).toMatchObject({options: [120]});
            expect(recommendedEslintConfig.rules["max-len"]).toBeDefined();

            expect(eslintConfig.rules["max-len"]).toMatchObject(["error", {code: 120}]);
        });

        test("member-access", () => {
            expect(recommendedTslintConfig.rules["member-access"]).toBeTruthy();
            expect(require("eslint-plugin-typescript/lib/rules/explicit-member-accessibility")).toBeDefined();
            expect(recommendedEslintConfig.rules["member-access"]).toBeUndefined();

            expect(eslintConfig.rules["typescript/explicit-member-accessibility"]).toBe("error");
        });

        test("member-ordering", () => {
            expect(recommendedTslintConfig.rules["member-ordering"]).toMatchObject({options: {order: "statics-first"}});
            expect(require("eslint-plugin-typescript/lib/rules/member-ordering")).toBeDefined();
            expect(recommendedEslintConfig.rules["member-ordering"]).toBeUndefined();

            expect(eslintConfig.rules["typescript/member-ordering"]).toBe("error");
        });

        test("new-parens", () => {
            expect(recommendedTslintConfig.rules["new-parens"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["new-parens"]).toBeDefined();

            expect(eslintConfig.rules["new-parens"]).toBe("error");
        });

        test("no-angle-bracket-type-assertion", () => {
            expect(recommendedTslintConfig.rules["no-angle-bracket-type-assertion"]).toBeTruthy();
            expect(require("eslint-plugin-typescript/lib/rules/no-angle-bracket-type-assertion")).toBeDefined();
            expect(recommendedEslintConfig.rules["no-angle-bracket-type-assertion"]).toBeUndefined();

            expect(eslintConfig.rules["typescript/no-angle-bracket-type-assertion"]).toBe("error");
        });

        test("no-any", () => {
            expect(recommendedTslintConfig.rules["no-any"]).toBeFalsy();
            expect(require("eslint-plugin-typescript/lib/rules/no-explicit-any")).toBeDefined();
            expect(recommendedEslintConfig.rules["no-any"]).toBeUndefined();

            expect(eslintConfig.rules["typescript/no-explicit-any"]).toBe("off");
        });

        test("no-arg", () => {
            expect(recommendedTslintConfig.rules["no-arg"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["no-caller"]).toBeDefined();

            expect(eslintConfig.rules["no-caller"]).toBe("error");
        });

        test("no-bitwise", () => {
            expect(recommendedTslintConfig.rules["no-bitwise"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["no-bitwise"]).toBeDefined();

            expect(eslintConfig.rules["no-bitwise"]).toBe("error");
        });

        test("no-conditional-assignment", () => {
            expect(recommendedTslintConfig.rules["no-conditional-assignment"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["no-cond-assign"]).toBeDefined();

            expect(eslintConfig.rules["no-cond-assign"]).toBe("error");
        });

        test("no-consecutive-blank-lines", () => {
            expect(recommendedTslintConfig.rules["no-consecutive-blank-lines"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["no-multiple-empty-lines"]).toBeDefined();

            expect(eslintConfig.rules["no-multiple-empty-lines"]).toBe("error");
        });

        test("no-console", () => {
            expect(recommendedTslintConfig.rules["no-console"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["no-console"]).toBeDefined();

            expect(eslintConfig.rules["no-console"]).toBe("error");
        });

        test("no-construct", () => {
            expect(recommendedTslintConfig.rules["no-construct"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["no-new-wrappers"]).toBeDefined();

            expect(eslintConfig.rules["no-new-wrappers"]).toBe("error");
        });

        test("no-debugger", () => {
            expect(recommendedTslintConfig.rules["no-debugger"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["no-debugger"]).toBeDefined();

            expect(eslintConfig.rules["no-debugger"]).toBe("error");
        });

        test("no-duplicate-super", () => {
            expect(recommendedTslintConfig.rules["no-duplicate-super"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["no-duplicate-super"]).toBeUndefined();

            expect(eslintConfig.rules["no-duplicate-super"]).toBeUndefined();
        });

        test("no-empty", () => {
            expect(recommendedTslintConfig.rules["no-empty"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["no-empty"]).toBeDefined();

            expect(eslintConfig.rules["no-empty"]).toBe("error");
        });

        test("no-empty-interface", () => {
            expect(recommendedTslintConfig.rules["no-empty-interface"]).toBeTruthy();
            expect(require("eslint-plugin-typescript/lib/rules/no-empty-interface")).toBeDefined();
            expect(recommendedEslintConfig.rules["no-empty-interface"]).toBeUndefined();

            expect(eslintConfig.rules["typescript/no-empty-interface"]).toBe("error");
        });

        test("no-eval", () => {
            expect(recommendedTslintConfig.rules["no-eval"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["no-eval"]).toBeDefined();

            expect(eslintConfig.rules["no-eval"]).toBe("error");
        });

        test("no-internal-module", () => {
            expect(recommendedTslintConfig.rules["no-internal-module"]).toBeTruthy();
            expect(require("eslint-plugin-typescript/lib/rules/prefer-namespace-keyword")).toBeDefined();
            expect(recommendedEslintConfig.rules["no-internal-module"]).toBeUndefined();

            expect(eslintConfig.rules["typescript/prefer-namespace-keyword"]).toBe("error");
        });

        test("no-invalid-this", () => {
            expect(recommendedTslintConfig.rules["no-invalid-this"]).toBeFalsy();
            expect(recommendedEslintConfig.rules["no-invalid-this"]).toBeDefined();

            expect(eslintConfig.rules["no-invalid-this"]).toBe("off");
        });

        test("no-misused-new", () => {
            expect(recommendedTslintConfig.rules["no-misused-new"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["no-misused-new"]).toBeUndefined();

            expect(eslintConfig.rules["no-misused-new"]).toBeUndefined();
        });

        test("no-namespace", () => {
            expect(recommendedTslintConfig.rules["no-namespace"]).toBeTruthy();
            expect(require("eslint-plugin-typescript/lib/rules/no-namespace")).toBeDefined();
            expect(recommendedEslintConfig.rules["no-namespace"]).toBeUndefined();

            expect(eslintConfig.rules["typescript/no-namespace"]).toBe("error");
        });

        test("no-parameter-properties", () => {
            expect(recommendedTslintConfig.rules["no-parameter-properties"]).toBeFalsy();
            expect(require("eslint-plugin-typescript/lib/rules/no-parameter-properties")).toBeDefined();
            expect(recommendedEslintConfig.rules["no-parameter-properties"]).toBeUndefined();

            expect(eslintConfig.rules["typescript/no-parameter-properties"]).toBe("off");
        });

        test("no-reference", () => {
            expect(recommendedTslintConfig.rules["no-reference"]).toBeTruthy();
            expect(require("eslint-plugin-typescript/lib/rules/no-triple-slash-reference")).toBeDefined();
            expect(recommendedEslintConfig.rules["no-reference"]).toBeUndefined();

            expect(eslintConfig.rules["typescript/no-triple-slash-reference"]).toBe("error");
        });

        test("no-reference-import", () => {
            expect(recommendedTslintConfig.rules["no-reference"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["no-reference"]).toBeUndefined();

            expect(eslintConfig.rules["no-reference-import"]).toBeUndefined();
        });

        test("no-shadowed-variable", () => {
            expect(recommendedTslintConfig.rules["no-shadowed-variable"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["no-shadow"]).toBeDefined();

            expect(eslintConfig.rules["no-shadow"]).toMatchObject(["error", {hoist: "never"}]);
        });

        test("no-string-literal", () => {
            expect(recommendedTslintConfig.rules["no-string-literal"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["object-shorthand"]).toBeDefined();

            const objectShorthand = eslintConfig.rules["object-shorthand"];
            expect(objectShorthand[0]).toBe("error");
            expect(objectShorthand[1] === "properties" || objectShorthand[1] === "always").toBeTruthy();
        });

        test("no-string-throw", () => {
            expect(recommendedTslintConfig.rules["no-string-throw"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["no-throw-literal"]).toBeDefined();

            expect(eslintConfig.rules["no-throw-literal"]).toBe("error");
        });

        test("no-switch-case-fall-through", () => {
            expect(recommendedTslintConfig.rules["no-switch-case-fall-through"]).toBeFalsy();
            expect(recommendedEslintConfig.rules["no-fallthrough"]).toBeDefined();

            expect(eslintConfig.rules["no-fallthrough"]).toBe("off");
        });

        test("no-trailing-whitespace", () => {
            expect(recommendedTslintConfig.rules["no-trailing-whitespace"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["no-trailing-spaces"]).toBeDefined();

            expect(eslintConfig.rules["no-trailing-spaces"]).toBe("error");
        });

        test("no-unnecessary-initializer", () => {
            expect(recommendedTslintConfig.rules["no-unnecessary-initializer"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["no-undef-init"]).toBeDefined();

            expect(eslintConfig.rules["no-undef-init"]).toBe("error");
        });

        test("no-unsafe-finally", () => {
            expect(recommendedTslintConfig.rules["no-unsafe-finally"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["no-unsafe-finally"]).toBeDefined();

            expect(eslintConfig.rules["no-unsafe-finally"]).toBe("error");
        });

        test("no-unused-expression", () => {
            expect(recommendedTslintConfig.rules["no-unused-expression"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["no-unused-expressions"]).toBeDefined();

            expect(eslintConfig.rules["no-unused-expressions"]).toBe("error");
        });

        test("no-use-before-declare", () => {
            expect(recommendedTslintConfig.rules["no-use-before-declare"]).toBeFalsy();
            expect(recommendedEslintConfig.rules["no-use-before-define"]).toBeDefined();

            expect(eslintConfig.rules["no-use-before-define"]).toBe("off");
        });

        test("no-var-keyword", () => {
            expect(recommendedTslintConfig.rules["no-var-keyword"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["no-var"]).toBeDefined();

            expect(eslintConfig.rules["no-var"]).toBe("error");
        });

        test("no-var-requires", () => {
            expect(recommendedTslintConfig.rules["no-var-requires"]).toBeTruthy();
            expect(require("eslint-plugin-typescript/lib/rules/no-var-requires")).toBeDefined();
            expect(recommendedEslintConfig.rules["no-var-requires"]).toBeUndefined();

            expect(eslintConfig.rules["typescript/no-var-requires"]).toBe("error");
        });

        test("object-literal-key-quotes", () => {
            expect(recommendedTslintConfig.rules["object-literal-key-quotes"]).toMatchObject({options: ["consistent-as-needed"]});
            expect(recommendedEslintConfig.rules["quote-props"]).toBeDefined();

            expect(eslintConfig.rules["quote-props"]).toMatchObject(["error", "consistent-as-needed"]);
        });

        test("object-literal-shorthand", () => {
            expect(recommendedTslintConfig.rules["object-literal-shorthand"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["object-shorthand"]).toBeDefined();

            expect(eslintConfig.rules["object-shorthand"]).toMatchObject(["error", "always"]);
        });

        test("object-literal-sort-keys", () => {
            expect(recommendedTslintConfig.rules["object-literal-sort-keys"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["sort-keys"]).toBeDefined();

            expect(eslintConfig.rules["sort-keys"]).toBe("error");
        });

        test("one-line", () => {
            expect(recommendedTslintConfig.rules["one-line"]).toMatchObject({options: ["check-catch", "check-else", "check-finally", "check-open-brace", "check-whitespace"]});
            expect(recommendedEslintConfig.rules["no-unexpected-multiline"]).toBeDefined();

            expect(eslintConfig.rules["no-unexpected-multiline"]).toBe("error");
        });

        test("one-variable-per-declaration", () => {
            expect(recommendedTslintConfig.rules["one-variable-per-declaration"]).toMatchObject({options: ["ignore-for-loop"]});
            expect(recommendedEslintConfig.rules["one-var"]).toBeDefined();

            expect(eslintConfig.rules["one-var"]).toBe("error");
        });

        test("only-arrow-functions", () => {
            expect(recommendedTslintConfig.rules["only-arrow-functions"]).toMatchObject({options: ["allow-declarations", "allow-named-functions"]});
            expect(recommendedEslintConfig.rules["prefer-arrow-callback"]).toBeDefined();

            expect(eslintConfig.rules["prefer-arrow-callback"]).toMatchObject(["error", {allowNamedFunctions: false}]);
        });

        test("ordered-imports", () => {
            expect(recommendedTslintConfig.rules["ordered-imports"]).toMatchObject({options: {"import-sources-order": "case-insensitive", "module-source-path": "full", "named-imports-order": "case-insensitive"}});
            expect(recommendedEslintConfig.rules["sort-imports"]).toBeDefined();

            expect(eslintConfig.rules["sort-imports"]).toBe("error");
        });

        test("prefer-const", () => {
            expect(recommendedTslintConfig.rules["prefer-const"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["prefer-const"]).toBeDefined();

            expect(eslintConfig.rules["prefer-const"]).toBe("error");
        });

        test("prefer-for-of", () => {
            expect(recommendedTslintConfig.rules["prefer-for-of"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["prefer-for-of"]).toBeUndefined();

            expect(eslintConfig.rules["prefer-for-of"]).toBeUndefined();
        });

        test("quotemark", () => {
            expect(recommendedTslintConfig.rules["quotemark"]).toMatchObject({options: ["double", "avoid-escape"]});
            expect(recommendedEslintConfig.rules["quotes"]).toBeDefined();

            expect(eslintConfig.rules["quotes"]).toMatchObject(["error", "double", {avoidEscape: true}]);
        });

        test("radix", () => {
            expect(recommendedTslintConfig.rules["radix"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["radix"]).toBeDefined();

            expect(eslintConfig.rules["radix"]).toBe("error");
        });

        test("semicolon", () => {
            expect(recommendedTslintConfig.rules["semicolon"]).toMatchObject({options: ["always"]});
            expect(recommendedEslintConfig.rules["semi"]).toBeDefined();

            expect(eslintConfig.rules["semi"]).toBe("error");
        });

        test("space-before-function-paren", () => {
            expect(recommendedTslintConfig.rules["space-before-function-paren"]).toMatchObject({options: {anonymous: "never", asyncArrow: "always", constructor: "never", method: "never", named: "never"}});
            expect(recommendedEslintConfig.rules["space-before-function-paren"]).toBeDefined();

            expect(eslintConfig.rules["space-before-function-paren"]).toMatchObject(["error", {
                anonymous: "never",
                asyncArrow: "always",
                named: "never"
            }]);
        });

        test("trailing-comma", () => {
            expect(recommendedTslintConfig.rules["trailing-comma"]).toMatchObject({options: {multiline: "always", singleline: "never"}});
            expect(recommendedEslintConfig.rules["comma-dangle"]).toBeDefined();

            expect(eslintConfig.rules["comma-dangle"]).toMatchObject(["error", "always-multiline"]);
        });

        test("triple-equals", () => {
            expect(recommendedTslintConfig.rules["triple-equals"]).toMatchObject({options: ["allow-null-check"]});
            expect(recommendedEslintConfig.rules["eqeqeq"]).toBeDefined();

            expect(eslintConfig.rules["eqeqeq"]).toMatchObject(["error", "always", {null: "ignore"}]);
        });

        test("typedef", () => {
            expect(recommendedTslintConfig.rules["typedef"]).toBeFalsy();
            expect(recommendedEslintConfig.rules["typedef"]).toBeUndefined();

            expect(eslintConfig.rules["typedef"]).toBeUndefined();
        });

        test("typedef-whitespace", () => {
            expect(recommendedTslintConfig.rules["typedef-whitespace"]).toMatchObject({options: [{"call-signature": "nospace", "index-signature": "nospace", parameter: "nospace", "property-declaration": "nospace", "variable-declaration": "nospace"}, {"call-signature": "onespace", "index-signature": "onespace", parameter: "onespace", "property-declaration": "onespace", "variable-declaration": "onespace"}]});
            expect(recommendedEslintConfig.rules["typedef-whitespace"]).toBeUndefined();
            expect(require("eslint-plugin-typescript/lib/rules/type-annotation-spacing")).toBeDefined();

            expect(eslintConfig.rules["typescript/type-annotation-spacing"]).toBe("error");
        });

        test("typeof-compare", () => {
            expect(recommendedTslintConfig.rules["typeof-compare"]).toBeFalsy();
            expect(recommendedEslintConfig.rules["valid-typeof"]).toBe("error");

            expect(eslintConfig.rules["valid-typeof"]).toBe("error");
        });

        test("unified-signatures", () => {
            expect(recommendedTslintConfig.rules["unified-signatures"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["unified-signatures"]).toBeUndefined();

            expect(eslintConfig.rules["unified-signatures"]).toBeUndefined();
        });

        test("use-isnan", () => {
            expect(recommendedTslintConfig.rules["use-isnan"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["use-isnan"]).toBeDefined();

            expect(eslintConfig.rules["use-isnan"]).toBe("error");
        });

        test("variable-name", () => {
            expect(recommendedTslintConfig.rules["variable-name"]).toMatchObject({options: ["ban-keywords", "check-format", "allow-pascal-case"]});
            expect(recommendedEslintConfig.rules["camelcase"]).toBeDefined();

            expect(eslintConfig.rules["camelcase"]).toBe("error");
        });

        test("whitespace", () => {
            expect(recommendedTslintConfig.rules["whitespace"]).toMatchObject({options: ["check-branch", "check-decl", "check-operator", "check-separator", "check-type", "check-typecast"]});
            expect(recommendedEslintConfig.rules["keyword-spacing"]).toBeDefined();
            expect(recommendedEslintConfig.rules["space-infix-ops"]).toBeDefined();
            expect(recommendedEslintConfig.rules["comma-spacing"]).toBeDefined();
            expect(recommendedEslintConfig.rules["semi-spacing"]).toBeDefined();

            expect(eslintConfig.rules["keyword-spacing"]).toMatchObject(["error", {after: true}]);
            expect(eslintConfig.rules["space-infix-ops"]).toBe("error");
            expect(eslintConfig.rules["comma-spacing"]).toBe("error");
            expect(eslintConfig.rules["semi-spacing"]).toMatchObject(["error", {before: false, after: true}]);
        });
    });

    describe("js", () => {

        test("number of tslint rules", () => {
            expect(Object.keys(recommendedTslintConfig.jsRules).length).toBe(42);
        });

        test("align", () => {
            expect(recommendedTslintConfig.jsRules["align"]).toMatchObject({options: ["parameters", "statements"]});
            expect(recommendedEslintConfig.rules["align"]).toBeUndefined();

            expect(eslintConfig.rules["align"]).toBeUndefined();
        });

        test("class-name", () => {
            expect(recommendedTslintConfig.jsRules["class-name"]).toBeTruthy();
            expect(require("eslint-plugin-typescript/lib/rules/class-name-casing")).toBeDefined();
            expect(recommendedEslintConfig.rules["class-name"]).toBeUndefined();

            expect(eslintConfig.rules["typescript/class-name-casing"]).toBe("error");
        });

        test("curly", () => {
            expect(recommendedTslintConfig.jsRules["curly"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["curly"]).toBeDefined();

            expect(eslintConfig.rules["curly"]).toBe("error");
        });

        test("eofline", () => {
            expect(recommendedTslintConfig.jsRules["eofline"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["eol-last"]).toBeDefined();

            expect(eslintConfig.rules["eol-last"]).toBe("error");
        });

        test("forin", () => {
            expect(recommendedTslintConfig.jsRules["forin"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["guard-for-in"]).toBeDefined();

            expect(eslintConfig.rules["guard-for-in"]).toBe("error");
        });

        test("import-spacing", () => {
            expect(recommendedTslintConfig.jsRules["import-spacing"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["keyword-spacing"]).toBeDefined();

            expect(eslintConfig.rules["keyword-spacing"]).toMatchObject(["error", {after: true}]);
        });

        test("indent", () => {
            expect(recommendedTslintConfig.jsRules["indent"]).toMatchObject({options: ["spaces"]});
            expect(recommendedEslintConfig.rules["indent"]).toBeDefined();

            expect(eslintConfig.rules["indent"]).toBe("error");
        });

        test("jsdoc-format", () => {
            expect(recommendedTslintConfig.jsRules["jsdoc-format"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["jsdoc-format"]).toBeUndefined();

            expect(eslintConfig.rules["jsdoc-format"]).toBeUndefined();
        });

        test("label-position", () => {
            expect(recommendedTslintConfig.jsRules["label-position"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["no-labels"]).toBeDefined();

            expect(eslintConfig.rules["no-labels"]).toBe("error");
        });

        test("max-line-length", () => {
            expect(recommendedTslintConfig.jsRules["max-line-length"]).toMatchObject({options: [120]});
            expect(recommendedEslintConfig.rules["max-len"]).toBeDefined();

            expect(eslintConfig.rules["max-len"]).toMatchObject(["error", {code: 120}]);
        });

        test("new-parens", () => {
            expect(recommendedTslintConfig.jsRules["new-parens"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["new-parens"]).toBeDefined();

            expect(eslintConfig.rules["new-parens"]).toBe("error");
        });

        test("no-arg", () => {
            expect(recommendedTslintConfig.jsRules["no-arg"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["no-caller"]).toBeDefined();

            expect(eslintConfig.rules["no-caller"]).toBe("error");
        });

        test("no-bitwise", () => {
            expect(recommendedTslintConfig.jsRules["no-bitwise"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["no-bitwise"]).toBeDefined();

            expect(eslintConfig.rules["no-bitwise"]).toBe("error");
        });

        test("no-conditional-assignment", () => {
            expect(recommendedTslintConfig.jsRules["no-conditional-assignment"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["no-cond-assign"]).toBeDefined();

            expect(eslintConfig.rules["no-cond-assign"]).toBe("error");
        });

        test("no-consecutive-blank-lines", () => {
            expect(recommendedTslintConfig.jsRules["no-consecutive-blank-lines"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["no-multiple-empty-lines"]).toBeDefined();

            expect(eslintConfig.rules["no-multiple-empty-lines"]).toBe("error");
        });

        test("no-console", () => {
            expect(recommendedTslintConfig.jsRules["no-console"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["no-console"]).toBeDefined();

            expect(eslintConfig.rules["no-console"]).toBe("error");
        });

        test("no-construct", () => {
            expect(recommendedTslintConfig.jsRules["no-construct"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["no-new-wrappers"]).toBeDefined();

            expect(eslintConfig.rules["no-new-wrappers"]).toBe("error");
        });

        test("no-debugger", () => {
            expect(recommendedTslintConfig.jsRules["no-debugger"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["no-debugger"]).toBeDefined();

            expect(eslintConfig.rules["no-debugger"]).toBe("error");
        });

        test("no-duplicate-super", () => {
            expect(recommendedTslintConfig.jsRules["no-duplicate-super"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["no-duplicate-super"]).toBeUndefined();

            expect(eslintConfig.rules["no-duplicate-super"]).toBeUndefined();
        });

        test("no-duplicate-variable", () => {
            expect(recommendedTslintConfig.jsRules["no-duplicate-variable"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["no-redeclare"]).toBeDefined();

            expect(eslintConfig.rules["no-redeclare"]).toBe("error");
        });

        test("no-empty", () => {
            expect(recommendedTslintConfig.jsRules["no-empty"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["no-empty"]).toBeDefined();

            expect(eslintConfig.rules["no-empty"]).toBe("error");
        });

        test("no-eval", () => {
            expect(recommendedTslintConfig.jsRules["no-eval"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["no-eval"]).toBeDefined();

            expect(eslintConfig.rules["no-eval"]).toBe("error");
        });

        test("no-reference", () => {
            expect(recommendedTslintConfig.jsRules["no-reference"]).toBeTruthy();
            expect(require("eslint-plugin-typescript/lib/rules/no-triple-slash-reference")).toBeDefined();
            expect(recommendedEslintConfig.rules["no-reference"]).toBeUndefined();

            expect(eslintConfig.rules["typescript/no-triple-slash-reference"]).toBe("error");
        });

        test("no-shadowed-variable", () => {
            expect(recommendedTslintConfig.jsRules["no-shadowed-variable"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["no-shadow"]).toBeDefined();

            expect(eslintConfig.rules["no-shadow"]).toMatchObject(["error", {hoist: "never"}]);
        });

        test("no-string-literal", () => {
            expect(recommendedTslintConfig.jsRules["no-string-literal"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["object-shorthand"]).toBeDefined();

            const objectShorthand = eslintConfig.rules["object-shorthand"];
            expect(objectShorthand[0]).toBe("error");
            expect(objectShorthand[1] === "properties" || objectShorthand[1] === "always").toBeTruthy();
        });
        test("no-string-throw", () => {
            expect(recommendedTslintConfig.jsRules["no-string-throw"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["no-throw-literal"]).toBeDefined();

            expect(eslintConfig.rules["no-throw-literal"]).toBe("error");
        });

        test("no-switch-case-fall-through", () => {
            expect(recommendedTslintConfig.jsRules["no-switch-case-fall-through"]).toBeFalsy();
            expect(recommendedEslintConfig.rules["no-fallthrough"]).toBeDefined();

            expect(eslintConfig.rules["no-fallthrough"]).toBe("off");
        });

        test("no-trailing-whitespace", () => {
            expect(recommendedTslintConfig.jsRules["no-trailing-whitespace"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["no-trailing-spaces"]).toBeDefined();

            expect(eslintConfig.rules["no-trailing-spaces"]).toBe("error");
        });

        test("no-unused-expression", () => {
            expect(recommendedTslintConfig.jsRules["no-unused-expression"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["no-unused-expressions"]).toBeDefined();

            expect(eslintConfig.rules["no-unused-expressions"]).toBe("error");
        });

        test("no-use-before-declare", () => {
            expect(recommendedTslintConfig.jsRules["no-use-before-declare"]).toBeFalsy();
            expect(recommendedEslintConfig.rules["no-use-before-define"]).toBeDefined();

            expect(eslintConfig.rules["no-use-before-define"]).toBe("off");
        });

        test("object-literal-sort-keys", () => {
            expect(recommendedTslintConfig.jsRules["object-literal-sort-keys"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["sort-keys"]).toBeDefined();

            expect(eslintConfig.rules["sort-keys"]).toBe("error");
        });

        test("one-line", () => {
            expect(recommendedTslintConfig.jsRules["one-line"]).toMatchObject({options: ["check-catch", "check-else", "check-finally", "check-open-brace", "check-whitespace"]});
            expect(recommendedEslintConfig.rules["no-unexpected-multiline"]).toBeDefined();

            expect(eslintConfig.rules["no-unexpected-multiline"]).toBe("error");
        });

        test("one-variable-per-declaration", () => {
            expect(recommendedTslintConfig.jsRules["one-variable-per-declaration"]).toMatchObject({options: ["ignore-for-loop"]});
            expect(recommendedEslintConfig.rules["one-var"]).toBeDefined();

            expect(eslintConfig.rules["one-var"]).toBe("error");
        });

        test("quotemark", () => {
            expect(recommendedTslintConfig.jsRules["quotemark"]).toMatchObject({options: ["double", "avoid-escape"]});
            expect(recommendedEslintConfig.rules["quotes"]).toBeDefined();

            expect(eslintConfig.rules["quotes"]).toMatchObject(["error", "double", {avoidEscape: true}]);
        });

        test("radix", () => {
            expect(recommendedTslintConfig.jsRules["radix"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["radix"]).toBeDefined();

            expect(eslintConfig.rules["radix"]).toBe("error");
        });

        test("semicolon", () => {
            expect(recommendedTslintConfig.jsRules["semicolon"]).toMatchObject({options: ["always"]});
            expect(recommendedEslintConfig.rules["semi"]).toBeDefined();

            expect(eslintConfig.rules["semi"]).toBe("error");
        });

        test("space-before-function-paren", () => {
            expect(recommendedTslintConfig.jsRules["space-before-function-paren"]).toMatchObject({options: {anonymous: "never", asyncArrow: "always", constructor: "never", method: "never", named: "never"}});
            expect(recommendedEslintConfig.rules["space-before-function-paren"]).toBeDefined();

            expect(eslintConfig.rules["space-before-function-paren"]).toMatchObject(["error", {
                anonymous: "never",
                asyncArrow: "always",
                named: "never"
            }]);
        });

        test("trailing-comma", () => {
            expect(recommendedTslintConfig.jsRules["trailing-comma"]).toMatchObject({options: {multiline: "always", singleline: "never"}});
            expect(recommendedEslintConfig.rules["comma-dangle"]).toBeDefined();

            expect(eslintConfig.rules["comma-dangle"]).toMatchObject(["error", "always-multiline"]);
        });

        test("triple-equals", () => {
            expect(recommendedTslintConfig.jsRules["triple-equals"]).toMatchObject({options: ["allow-null-check"]});
            expect(recommendedEslintConfig.rules["eqeqeq"]).toBeDefined();

            expect(eslintConfig.rules["eqeqeq"]).toMatchObject(["error", "always", {null: "ignore"}]);
        });

        test("use-isnan", () => {
            expect(recommendedTslintConfig.jsRules["use-isnan"]).toBeTruthy();
            expect(recommendedEslintConfig.rules["use-isnan"]).toBeDefined();

            expect(eslintConfig.rules["use-isnan"]).toBe("error");
        });

        test("variable-name", () => {
            expect(recommendedTslintConfig.jsRules["variable-name"]).toMatchObject({options: ["ban-keywords", "check-format", "allow-pascal-case"]});
            expect(recommendedEslintConfig.rules["camelcase"]).toBeDefined();

            expect(eslintConfig.rules["camelcase"]).toBe("error");
        });

        test("whitespace", () => {
            expect(recommendedTslintConfig.jsRules["whitespace"]).toMatchObject({options: ["check-branch", "check-decl", "check-operator", "check-separator", "check-type", "check-typecast"]});
            expect(recommendedEslintConfig.rules["keyword-spacing"]).toBeDefined();
            expect(recommendedEslintConfig.rules["space-infix-ops"]).toBeDefined();
            expect(recommendedEslintConfig.rules["comma-spacing"]).toBeDefined();
            expect(recommendedEslintConfig.rules["semi-spacing"]).toBeDefined();

            expect(eslintConfig.rules["keyword-spacing"]).toMatchObject(["error", {after: true}]);
            expect(eslintConfig.rules["space-infix-ops"]).toBe("error");
            expect(eslintConfig.rules["comma-spacing"]).toBe("error");
            expect(eslintConfig.rules["semi-spacing"]).toMatchObject(["error", {before: false, after: true}]);
        });
    });
});
