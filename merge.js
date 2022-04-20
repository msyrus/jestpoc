const istanbulLibReport = require("istanbul-lib-report");
const istanbulLibCoverage = require("istanbul-lib-coverage");
const istanbulReports = require("istanbul-reports");

function main(argv) {
    const cov1 = require("./coverage/__tests__/file1.test.js.json");
    const cov2 = require("./coverage/__tests__/file2.test.js.json");

    const covMap = istanbulLibCoverage.createCoverageMap(cov1);
    covMap.merge(cov2);

    const context = istanbulLibReport.createContext({
        dir: "./coverage/",
        coverageMap: covMap,
    });

    const report = istanbulReports.create("cobertura", {
        file: 'merged-coverage.xml',
        timestamp: '123456789',
    });

    report.execute(context);
}

main({});
