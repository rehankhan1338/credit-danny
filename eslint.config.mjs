import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescript from "eslint-config-next/typescript";

const eslintConfig = [
  ...coreWebVitals,
  ...typescript,
  {
    ignores: [".next/**", "node_modules/**", "public/**", "scripts/**", "next-env.d.ts"],
  },
  {
    rules: {
      "@next/next/no-img-element": "off",
      "@next/next/no-sync-scripts": "off",
      "@next/next/no-css-tags": "off",
      "@next/next/next-script-for-ga": "off",
    },
  },
];

export default eslintConfig;
