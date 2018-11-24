const eslintConfig = require("./index");

describe("typescript recommended rules", () => {

    test("rule object defined", () => {
        expect(eslintConfig.rules).toBeDefined();
    });

    describe('latest', () => {

        test("align", () => {
            expect(eslintConfig.rules["align"]).toBeUndefined();
        });

        test("no-invalid-template-strings", () => {
            expect(eslintConfig.rules["no-template-curly-in-string"]).toBe("error");
        });

        test("no-sparse-arrays", () => {
            expect(eslintConfig.rules["no-sparse-arrays"]).toBe("error");
        });

        test("no-object-literal-type-assertion", () => {
            expect(eslintConfig.rules["no-object-literal-type-assertion"]).toBeUndefined();
        });

        test("prefer-conditional-expression", () => {
            expect(eslintConfig.rules["no-cond-assign"]).toBe("error");
        });

        test("prefer-object-spread", () => {
            expect(eslintConfig.rules["prefer-object-spread"]).toBe("error");
        });

        test("no-duplicate-variable", () => {
            expect(eslintConfig.rules["no-redeclare"]).toMatchObject(["error", {hoist: "never"}]);
        });

        test("no-this-assignment", () => {
            expect(eslintConfig.rules["no-this-assignment"]).toBeUndefined();
        });

        test("no-duplicate-imports", () => {
            expect(eslintConfig.rules["no-duplicate-imports"]).toBe("error");
        });

        test("space-within-parens", () => {
            expect(eslintConfig.rules["space-within-parens"]).toMatchObject(["error", "always"]);
        });

        test("no-submodule-imports", () => {
            expect(eslintConfig.rules["no-submodule-imports"]).toBeUndefined();
        });

        test("whitespace", () => {
            expect(eslintConfig.rules["keyword-spacing"]).toMatchObject(["error", {after: true}]);
            expect(eslintConfig.rules["space-infix-ops"]).toBe("error");
            expect(eslintConfig.rules["comma-spacing"]).toBe("error");
            expect(eslintConfig.rules["semi-spacing"]).toMatchObject(["error", {before: false, after: true}]);
            expect(eslintConfig.rules["rest-spread-spacing"]).toBe("error");
        });

        test("ban-comma-operator", () => {
            expect(eslintConfig.rules["ban-comma-operator"]).toBeUndefined();
        });

        test("jsdoc-format", () => {
            expect(eslintConfig.rules["valid-jsdoc"]).toBe("error");
        });

        test("no-duplicate-switch-case", () => {
            expect(eslintConfig.rules["no-duplicate-case"]).toBe("error");
        });

        test("no-implicit-dependencies", () => {
            expect(eslintConfig.rules["no-implicit-dependencies"]).toBeUndefined();
        });

        test("no-return-await", () => {
            expect(eslintConfig.rules["no-return-await"]).toBe("error");
        });

        test("adjacent-overload-signatures", () => {
            expect(eslintConfig.rules["adjacent-overload-signatures"]).toBeUndefined();
        });
    });

    describe('ts', () => {

        test("align", () => {
            expect(eslintConfig.rules["align"]).toBeUndefined();
        });

        test("array-type", () => {
            expect(eslintConfig.rules["array-type"]).toBeUndefined();
        });

        test("arrow-parens", () => {
            expect(eslintConfig.rules["arrow-parens"]).toBe("error");
        });

        test("arrow-return-shorthand", () => {
            expect(eslintConfig.rules["arrow-body-style"]).toMatchObject([
                "error",
                "as-needed"
            ]);
        });

        test("ban-types", () => {
            expect(eslintConfig.rules["ban-types"]).toBeUndefined();
        });

        test("callable-types", () => {
            expect(eslintConfig.rules["callable-types"]).toBeUndefined();
        });

        test("class-name", () => {
            expect(eslintConfig.rules["typescript/class-name-casing"]).toBe("error");
        });

        test("comment-format", () => {
            expect(eslintConfig.rules["spaced-comment"]).toBe("error");
        });

        test("curly", () => {
            expect(eslintConfig.rules["curly"]).toBe("error");
        });

        test("cyclomatic-complexity", () => {
            expect(eslintConfig.rules["complexity"]).toBe("off");
        });

        test("eofline", () => {
            expect(eslintConfig.rules["eol-last"]).toBe("error");
        });

        test("forin", () => {
            expect(eslintConfig.rules["guard-for-in"]).toBe("error");
        });

        test("import-spacing", () => {
            expect(eslintConfig.rules["keyword-spacing"]).toMatchObject(["error", {after: true}]);
        });

        test("indent", () => {
            expect(eslintConfig.rules["indent"]).toBe("error");
        });

        test("interface-name", () => {
            expect(eslintConfig.rules["typescript/interface-name-prefix"]).toMatchObject(["error", 'always']);
        });

        test("interface-over-type-literal", () => {
            expect(eslintConfig.rules["typescript/no-type-alias"]).toBe("error");
        });

        test("jsdoc-format", () => {
            expect(eslintConfig.rules["valid-jsdoc"]).toBe("error");
        });

        test("label-position", () => {
            expect(eslintConfig.rules["no-labels"]).toBe("error");
        });

        test("max-classes-per-file", () => {
            expect(eslintConfig.rules["max-classes-per-file"]).toBe("error");
        });

        test("max-line-length", () => {
            expect(eslintConfig.rules["max-len"]).toMatchObject(["error", {code: 120}]);
        });

        test("member-access", () => {
            expect(eslintConfig.rules["typescript/explicit-member-accessibility"]).toBe("error");
        });

        test("member-ordering", () => {
            expect(eslintConfig.rules["typescript/member-ordering"]).toBe("error");
        });

        test("new-parens", () => {
            expect(eslintConfig.rules["new-parens"]).toBe("error");
        });

        test("no-angle-bracket-type-assertion", () => {
            expect(eslintConfig.rules["typescript/no-angle-bracket-type-assertion"]).toBe("error");
        });

        test("no-any", () => {
            expect(eslintConfig.rules["typescript/no-explicit-any"]).toBe("off");
        });

        test("no-arg", () => {
            expect(eslintConfig.rules["no-caller"]).toBe("error");
        });

        test("no-bitwise", () => {
            expect(eslintConfig.rules["no-bitwise"]).toBe("error");
        });

        test("no-conditional-assignment", () => {
            expect(eslintConfig.rules["no-cond-assign"]).toBe("error");
        });

        test("no-consecutive-blank-lines", () => {
            expect(eslintConfig.rules["no-multiple-empty-lines"]).toBe("error");
        });

        test("no-console", () => {
            expect(eslintConfig.rules["no-console"]).toBe("error");
        });

        test("no-construct", () => {
            expect(eslintConfig.rules["no-new-wrappers"]).toBe("error");
        });

        test("no-debugger", () => {
            expect(eslintConfig.rules["no-debugger"]).toBe("error");
        });

        test("no-duplicate-super", () => {
            expect(eslintConfig.rules["no-duplicate-super"]).toBeUndefined();
        });

        test("no-empty", () => {
            expect(eslintConfig.rules["no-empty"]).toBe("error");
        });

        test("no-empty-interface", () => {
            expect(eslintConfig.rules["typescript/no-empty-interface"]).toBe("error");
        });

        test("no-eval", () => {
            expect(eslintConfig.rules["no-eval"]).toBe("error");
        });

        test("no-internal-module", () => {
            expect(eslintConfig.rules["typescript/prefer-namespace-keyword"]).toBe("error");
        });

        test("no-invalid-this", () => {
            expect(eslintConfig.rules["no-invalid-this"]).toBe("off");
        });

        test("no-misused-new", () => {
            expect(eslintConfig.rules["no-misused-new"]).toBeUndefined();
        });

        test("no-namespace", () => {
            expect(eslintConfig.rules["typescript/no-namespace"]).toBe("error");
        });

        test("no-parameter-properties", () => {
            expect(eslintConfig.rules["typescript/no-parameter-properties"]).toBe("off");
        });

        test("no-reference", () => {
            expect(eslintConfig.rules["typescript/no-triple-slash-reference"]).toBe("error");
        });

        test("no-reference-import", () => {
            expect(eslintConfig.rules["no-reference-import"]).toBeUndefined();
        });

        test("no-shadowed-variable", () => {
            expect(eslintConfig.rules["no-shadow"]).toBe("error");
        });

        test("no-string-literal", () => {
            expect(eslintConfig.rules["object-shorthand"]).toMatchObject(["error", 'properties']);
        });

        test("no-string-throw", () => {
            expect(eslintConfig.rules["no-throw-literal"]).toBe("error");
        });

        test("no-switch-case-fall-through", () => {
            expect(eslintConfig.rules["no-fallthrough"]).toBe("off");
        });

        test("no-trailing-whitespace", () => {
            expect(eslintConfig.rules["no-trailing-spaces"]).toBe("error");
        });

        test("no-unnecessary-initializer", () => {
            expect(eslintConfig.rules["no-undef-init"]).toBe("error");
        });

        test("no-unsafe-finally", () => {
            expect(eslintConfig.rules["no-unsafe-finally"]).toBe("error");
        });

        test("no-unused-expression", () => {
            expect(eslintConfig.rules["no-new"]).toBe("error");
        });

        test("no-use-before-declare", () => {
            expect(eslintConfig.rules["no-use-before-define"]).toBe("off");
        });

        test("no-var-keyword", () => {
            expect(eslintConfig.rules["no-var"]).toBe("error");
        });

        test("no-var-requires", () => {
            expect(eslintConfig.rules["typescript/no-var-requires"]).toBe("error");
        });

        test("object-literal-key-quotes", () => {
            expect(false).toBeTruthy();
        });

        test("object-literal-shorthand", () => {
            expect(false).toBeTruthy();
        });

        test("object-literal-sort-keys", () => {
            expect(false).toBeTruthy();
        });

        test("one-line", () => {
            expect(false).toBeTruthy();
        });

        test("one-variable-per-declaration", () => {
            expect(false).toBeTruthy();
        });

        test("only-arrow-functions", () => {
            expect(false).toBeTruthy();
        });

        test("ordered-imports", () => {
            expect(false).toBeTruthy();
        });

        test("prefer-const", () => {
            expect(false).toBeTruthy();
        });

        test("prefer-for-of", () => {
            expect(false).toBeTruthy();
        });

        test("quotemark", () => {
            expect(false).toBeTruthy();
        });

        test("radix", () => {
            expect(false).toBeTruthy();
        });

        test("semicolon", () => {
            expect(false).toBeTruthy();
        });

        test("space-before-function-paren", () => {
            expect(false).toBeTruthy();
        });

        test("trailing-comma", () => {
            expect(false).toBeTruthy();
        });

        test("triple-equals", () => {
            expect(false).toBeTruthy();
        });

        test("typedef", () => {
            expect(false).toBeTruthy();
        });

        test("typedef-whitespace", () => {
            expect(false).toBeTruthy();
        });

        test("typeof-compare", () => {
            expect(false).toBeTruthy();
        });

        test("unified-signatures", () => {
            expect(false).toBeTruthy();
        });

        test("use-isnan", () => {
            expect(false).toBeTruthy();
        });

        test("variable-name", () => {
            expect(false).toBeTruthy();
        });

        test("whitespace", () => {
            expect(eslintConfig.rules["keyword-spacing"]).toMatchObject(["error", {after: true}]);
            expect(eslintConfig.rules["space-infix-ops"]).toBe("error");
            expect(eslintConfig.rules["comma-spacing"]).toBe("error");
            expect(eslintConfig.rules["semi-spacing"]).toMatchObject(["error", {before: false, after: true}]);
        });
    });

    describe('js', () => {

        test("align", () => {
            expect(eslintConfig.rules["align"]).toBeUndefined();
        });

        test("class-name", () => {
            expect(eslintConfig.rules["typescript/class-name-casing"]).toBe("error");
        });

        test("curly", () => {
            expect(eslintConfig.rules["curly"]).toBe("error");
        });

        test("eofline", () => {
            expect(eslintConfig.rules["eol-last"]).toBe("error");
        });

        test("forin", () => {
            expect(eslintConfig.rules["guard-for-in"]).toBe("error");
        });

        test("import-spacing", () => {
            expect(eslintConfig.rules["keyword-spacing"]).toMatchObject(["error", {after: true}]);
        });

        test("indent", () => {
            expect(eslintConfig.rules["indent"]).toBe("error");
        });

        test("jsdoc-format", () => {
            expect(eslintConfig.rules["valid-jsdoc"]).toBe("error");
        });

        test("label-position", () => {
            expect(eslintConfig.rules["no-labels"]).toBe("error");
        });

        test("max-line-length", () => {
            expect(eslintConfig.rules["max-len"]).toMatchObject(["error", {code: 120}]);
        });

        test("new-parens", () => {
            expect(eslintConfig.rules["new-parens"]).toBe("error");
        });

        test("no-arg", () => {
            expect(eslintConfig.rules["no-caller"]).toBe("error");
        });

        test("no-bitwise", () => {
            expect(eslintConfig.rules["no-bitwise"]).toBe("error");
        });

        test("no-conditional-assignment", () => {
            expect(eslintConfig.rules["no-cond-assign"]).toBe("error");
        });

        test("no-consecutive-blank-lines", () => {
            expect(eslintConfig.rules["no-multiple-empty-lines"]).toBe("error");
        });

        test("no-console", () => {
            expect(eslintConfig.rules["no-console"]).toBe("error");
        });

        test("no-construct", () => {
            expect(eslintConfig.rules["no-new-wrappers"]).toBe("error");
        });

        test("no-debugger", () => {
            expect(eslintConfig.rules["no-debugger"]).toBe("error");
        });

        test("no-duplicate-super", () => {
            expect(eslintConfig.rules["no-duplicate-super"]).toBeUndefined();
        });

        test("no-duplicate-variable", () => {
            expect(eslintConfig.rules["no-redeclare"][0]).toBe("error");
        });

        test("no-empty", () => {
            expect(eslintConfig.rules["no-empty"]).toBe("error");
        });

        test("no-eval", () => {
            expect(eslintConfig.rules["no-eval"]).toBe("error");
        });

        test("no-reference", () => {
            expect(eslintConfig.rules["typescript/no-triple-slash-reference"]).toBe("error");
        });

        test("no-shadowed-variable", () => {
            expect(eslintConfig.rules["no-shadow"]).toBe("error");
        });

        test("no-string-literal", () => {
            expect(eslintConfig.rules["object-shorthand"]).toMatchObject(["error", 'properties']);
        });

        test("no-string-throw", () => {
            expect(eslintConfig.rules["no-throw-literal"]).toBe("error");
        });

        test("no-switch-case-fall-through", () => {
            expect(eslintConfig.rules["no-fallthrough"]).toBe("off");
        });

        test("no-trailing-whitespace", () => {
            expect(eslintConfig.rules["no-trailing-spaces"]).toBe("error");
        });

        test("no-unused-expression", () => {
            expect(eslintConfig.rules["no-new"]).toBe("error");
        });

        test("no-use-before-declare", () => {
            expect(eslintConfig.rules["no-use-before-define"]).toBe("off");
        });

        test("object-literal-sort-keys", () => {
            expect(false).toBeTruthy();
        });

        test("one-line", () => {
            expect(false).toBeTruthy();
        });

        test("one-variable-per-declaration", () => {
            expect(false).toBeTruthy();
        });

        test("quotemark", () => {
            expect(false).toBeTruthy();
        });

        test("radix", () => {
            expect(false).toBeTruthy();
        });

        test("semicolon", () => {
            expect(false).toBeTruthy();
        });

        test("space-before-function-paren", () => {
            expect(false).toBeTruthy();
        });

        test("trailing-comma", () => {
            expect(false).toBeTruthy();
        });

        test("triple-equals", () => {
            expect(false).toBeTruthy();
        });

        test("use-isnan", () => {
            expect(false).toBeTruthy();
        });

        test("variable-name", () => {
            expect(false).toBeTruthy();
        });

        test("whitespace", () => {
            expect(eslintConfig.rules["keyword-spacing"]).toMatchObject(["error", {after: true}]);
            expect(eslintConfig.rules["space-infix-ops"]).toBe("error");
            expect(eslintConfig.rules["comma-spacing"]).toBe("error");
            expect(eslintConfig.rules["semi-spacing"]).toMatchObject(["error", {before: false, after: true}]);
        });

    });
});
