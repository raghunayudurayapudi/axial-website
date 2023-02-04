const siteUrl = "https://www.axialitsolutions.com/";

module.exports = {
    siteUrl,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                allow: "/",
            },
        ],
    },
    exclude: ['/pricing'],
}