// eslint-disable-next-line @typescript-eslint/no-var-requires
// const withTranspile = require("next-transpile-modules")(["ol", "rlayers"]);
module.exports ={ 
    // experimental: { esmExternals: "loose" },
    reactStrictMode: true,
    swcMinify: true,
    i18n: {
        locales: ["fr"],
        defaultLocale: "fr",
    },
};
