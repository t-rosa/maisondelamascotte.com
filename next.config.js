// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTranspile = require("next-transpile-modules")(["ol", "rlayers"]);
module.exports = withTranspile({
    experimental: { esmExternals: "loose" },
    reactStrictMode: true,
    swcMinify: true,
    // Next.js i18n docs: https://nextjs.org/docs/advanced-features/i18n-routing
    i18n: {
        locales: ["fr"],
        defaultLocale: "fr",
    },
});
