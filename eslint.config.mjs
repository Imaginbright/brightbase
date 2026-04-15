import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    // Fixes the "ignorePatterns" error from before
    ignores: ["components/ui/**", ".next/**", "node_modules/**"],
  },
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "standard",
    "plugin:react/recommended",
    "prettier",
  ),
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "no-undef": "off",
      // Fixes the "React must be in scope" errors (Next.js 15 handles this automatically)
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      // Downgrades unused variables to warnings so they don't stop your build
      "@typescript-eslint/no-unused-vars": "warn",
      "no-unused-vars": "off",
      // Fixes the unescaped entities errors (e.g., using ' instead of &apos;)
      "react/no-unescaped-entities": "off",
      "import/no-duplicates": "warn",
    },
    settings: {
      react: {
        version: "detect", // Automatically detects React version
      },
    },
  },
];

export default eslintConfig;
