const { ensureDirSync, writeFileSync } = require("fs-extra");
const { dirname, relative, join } = require("path")
class CustomReporter {
    constructor(globalConfig, options) {
        this._globalConfig = globalConfig;
        this._options = options;
    }

    onRunComplete(contexts, results) {
        console.log("Custom reporter output:");
        console.log("Results: ", JSON.stringify(results));

        const { coverageDirectory } = this._globalConfig;
        const fpath = join(coverageDirectory, "coverage.json");
        ensureDirSync(coverageDirectory);
        writeFileSync(fpath, JSON.stringify(results.coverageMap, "\n", "\t"));
    }

    onTestResult(data, results) {
        const { coverageDirectory, rootDir } = this._globalConfig;
        const { testFilePath } = results;
        const fpath = join(coverageDirectory, relative(rootDir, testFilePath) + ".json");
        ensureDirSync(join(coverageDirectory, relative(rootDir, dirname(testFilePath))));
        writeFileSync(fpath, JSON.stringify(results.coverage, "\n", "\t"));

        console.log("Test result output:");
        console.log("Data: ", JSON.stringify(data));
        console.log("Results: ", JSON.stringify(results, "\n", "\t"));
    }
}

module.exports = CustomReporter;
