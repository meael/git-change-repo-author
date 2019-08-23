const { execPromise } = require("./utils");
const { logger } = require("./logger");
const {
  isLocal,
  isBackup,
  oldEmail,
  newEmail,
  newName,
  repositoriesUrls
} = require("./parameters");

const messages = require("./messages");
const commands = require("./commands");

const isNewUserInfoPassed = newName && newEmail;

(async () => {
  // get new commit author info from git settings
  const name = isNewUserInfoPassed ? newName : await execPromise(commands.runGitUserName());
  const email = isNewUserInfoPassed ? newEmail : await execPromise(commands.runGitUserEmail());
  if (!isNewUserInfoPassed) {
    logger.yellow(messages.showGitConfig());
  }

  // show passed repositoriesUrls info
  logger.default(messages.showRepositories(repositoriesUrls.length));
  repositoriesUrls.forEach(repositoryLink => {
    logger.link(repositoryLink);
  });

  // handle all passed repos
  repositoriesUrls.forEach(async repositoryLink => {
    const repositoryLinkSplit = repositoryLink.split("/");
    const repositoryName = repositoryLinkSplit[repositoryLinkSplit.length - 1];
    const repositoryPath = `./${repositoryName}`;

    // show handling repository info
    logger.default(messages.showRepositoryName(repositoryName));

    // clone repository
    await execPromise(commands.runCloneRepo(repositoryLink));
    logger.successIcon(messages.showCloned());

    if (isBackup) {
      await execPromise(
        commands.runCopyFolder(repositoryPath, `./${repositoryName + "[backup]/"}`)
      );
    }

    logger[isBackup ? "successIcon" : "errorIcon"]("backup created");

    // change local repository author
    await execPromise(commands.runChangeAuthor(oldEmail, email, name), repositoryPath);
    logger.successIcon(messages.showAuthorChanged());

    if (!isLocal) {
      // push local to remote repository
      await execPromise(commands.runGitPush(), repositoryPath);

      // remove temporary local repository path
      await execPromise(commands.runRemoveRepo(repositoryName));
    }

    logger[isLocal ? "errorIcon" : "successIcon"](messages.showPushed());

    // show complete message
    logger.green(messages.showComplete());

    // show new author info
    logger.gray(messages.showNewAuthorInfo(oldEmail, email, name));
  });
})();
