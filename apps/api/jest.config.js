module.exports = {
    testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
    preset: "ts-jest",
    transform: {
        "^.+\\.(ts|tsx)?$": "ts-jest",
        "^.+\\.(js|jsx)$": "babel-jest",
        ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform"
    },
    moduleFileExtensions: ["vue", "js", "json", "ts", "tsx", "jsx"],
    reporters: [
        "default",
        [
            "jest-html-reporter",
            {
                outputPath: "jest/test-report.html",
                pageTitle: "Test Report"
            }
        ]
    ]
};
