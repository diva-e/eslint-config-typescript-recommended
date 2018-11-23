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
            expect(false).toBeTruthy();
        });

        test("arrow-parens", () => {
            expect(false).toBeTruthy();
        });

        test("arrow-return-shorthand", () => {
            expect(false).toBeTruthy();
        });

        test("ban-types", () => {
            expect(false).toBeTruthy();
        });

        test("callable-types", () => {
            expect(false).toBeTruthy();
        });

        test("class-name", () => {
            expect(false).toBeTruthy();
        });

        test("comment-format", () => {
            expect(false).toBeTruthy();
        });

        test("curly", () => {
            expect(false).toBeTruthy();
        });

        test("cyclomatic-complexity", () => {
            expect(false).toBeTruthy();
        });

        test("eofline", () => {
            expect(false).toBeTruthy();
        });

        test("forin", () => {
            expect(false).toBeTruthy();
        });

        test("import-spacing", () => {
            expect(false).toBeTruthy();
        });

        test("indent", () => {
            expect(false).toBeTruthy();
        });

        test("interface-name", () => {
            expect(false).toBeTruthy();
        });

        test("interface-over-type-literal", () => {
            expect(false).toBeTruthy();
        });

        test("jsdoc-format", () => {
            expect(eslintConfig.rules["valid-jsdoc"]).toBe("error");
        });

        test("label-position", () => {
            expect(false).toBeTruthy();
        });

        test("max-classes-per-file", () => {
            expect(false).toBeTruthy();
        });

        test("max-line-length", () => {
            expect(false).toBeTruthy();
        });

        test("member-access", () => {
            expect(false).toBeTruthy();
        });

        test("member-ordering", () => {
            expect(false).toBeTruthy();
        });

        test("new-parens", () => {
            expect(false).toBeTruthy();
        });

        test("no-angle-bracket-type-assertion", () => {
            expect(false).toBeTruthy();
        });

        test("no-any", () => {
            expect(false).toBeTruthy();
        });

        test("no-arg", () => {
            expect(false).toBeTruthy();
        });

        test("no-bitwise", () => {
            expect(false).toBeTruthy();
        });

        test("no-conditional-assignment", () => {
            expect(false).toBeTruthy();
        });

        test("no-consecutive-blank-lines", () => {
            expect(false).toBeTruthy();
        });

        test("no-console", () => {
            expect(false).toBeTruthy();
        });

        test("no-construct", () => {
            expect(false).toBeTruthy();
        });

        test("no-debugger", () => {
            expect(false).toBeTruthy();
        });

        test("no-duplicate-super", () => {
            expect(false).toBeTruthy();
        });

        test("no-empty", () => {
            expect(false).toBeTruthy();
        });

        test("no-empty-interface", () => {
            expect(false).toBeTruthy();
        });

        test("no-eval", () => {
            expect(false).toBeTruthy();
        });

        test("no-internal-module", () => {
            expect(false).toBeTruthy();
        });

        test("no-invalid-this", () => {
            expect(false).toBeTruthy();
        });

        test("no-misused-new", () => {
            expect(false).toBeTruthy();
        });

        test("no-namespace", () => {
            expect(false).toBeTruthy();
        });

        test("no-parameter-properties", () => {
            expect(false).toBeTruthy();
        });

        test("no-reference", () => {
            expect(false).toBeTruthy();
        });

        test("no-reference-import", () => {
            expect(false).toBeTruthy();
        });

        test("no-shadowed-variable", () => {
            expect(false).toBeTruthy();
        });

        test("no-string-literal", () => {
            expect(false).toBeTruthy();
        });

        test("no-string-throw", () => {
            expect(false).toBeTruthy();
        });

        test("no-switch-case-fall-through", () => {
            expect(false).toBeTruthy();
        });

        test("no-trailing-whitespace", () => {
            expect(false).toBeTruthy();
        });

        test("no-unnecessary-initializer", () => {
            expect(false).toBeTruthy();
        });

        test("no-unsafe-finally", () => {
            expect(false).toBeTruthy();
        });

        test("no-unused-expression", () => {
            expect(false).toBeTruthy();
        });

        test("no-use-before-declare", () => {
            expect(false).toBeTruthy();
        });

        test("no-var-keyword", () => {
            expect(false).toBeTruthy();
        });

        test("no-var-requires", () => {
            expect(false).toBeTruthy();
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
            expect(false).toBeTruthy();
        });

        test("curly", () => {
            expect(false).toBeTruthy();
        });

        test("eofline", () => {
            expect(false).toBeTruthy();
        });

        test("forin", () => {
            expect(false).toBeTruthy();
        });

        test("import-spacing", () => {
            expect(false).toBeTruthy();
        });

        test("indent", () => {
            expect(false).toBeTruthy();
        });

        test("jsdoc-format", () => {
            expect(eslintConfig.rules["valid-jsdoc"]).toBe("error");
        });

        test("label-position", () => {
            expect(false).toBeTruthy();
        });

        test("max-line-length", () => {
            expect(false).toBeTruthy();
        });

        test("new-parens", () => {
            expect(false).toBeTruthy();
        });

        test("no-arg", () => {
            expect(false).toBeTruthy();
        });

        test("no-bitwise", () => {
            expect(false).toBeTruthy();
        });

        test("no-conditional-assignment", () => {
            expect(false).toBeTruthy();
        });

        test("no-consecutive-blank-lines", () => {
            expect(false).toBeTruthy();
        });

        test("no-console", () => {
            expect(false).toBeTruthy();
        });

        test("no-construct", () => {
            expect(false).toBeTruthy();
        });

        test("no-debugger", () => {
            expect(false).toBeTruthy();
        });

        test("no-duplicate-super", () => {
            expect(false).toBeTruthy();
        });

        test("no-duplicate-variable", () => {
            expect(eslintConfig.rules["no-redeclare"][0]).toBe("error");
        });

        test("no-empty", () => {
            expect(false).toBeTruthy();
        });

        test("no-eval", () => {
            expect(false).toBeTruthy();
        });

        test("no-reference", () => {
            expect(false).toBeTruthy();
        });

        test("no-shadowed-variable", () => {
            expect(false).toBeTruthy();
        });

        test("no-string-literal", () => {
            expect(false).toBeTruthy();
        });

        test("no-string-throw", () => {
            expect(false).toBeTruthy();
        });

        test("no-switch-case-fall-through", () => {
            expect(false).toBeTruthy();
        });

        test("no-trailing-whitespace", () => {
            expect(false).toBeTruthy();
        });

        test("no-unused-expression", () => {
            expect(false).toBeTruthy();
        });

        test("no-use-before-declare", () => {
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
