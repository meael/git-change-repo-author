const { getParameter } = require("./utils");

const allArguments = process.argv.slice(2, process.argv.length);

const repositoriesUrls = allArguments.filter(el => !el.includes("--"));

const oldEmail = getParameter(allArguments, "email");
const newEmail = getParameter(allArguments, "new-email");
const newName = getParameter(allArguments, "new-name");

const isLocal = getParameter(allArguments, "local");
const isBackup = getParameter(allArguments, "backup");

module.exports = {
  oldEmail,
  newEmail,
  newName,
  repositoriesUrls,
  isLocal,
  isBackup
};
