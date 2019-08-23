const showGitConfig = () => `
NOTE:
New author info is getted from git settings
You can pass it manually by --new-name= and --new-email=`;

const showRepositories = repoCount => `
\n${repoCount} repositories will change:`;

const showRepositoryName = name => `
${name}`;

const showCloned = name => `cloned`;

const showAuthorChanged = (oldEmail, newEmail, newName) => `author changed`;

const showNewAuthorInfo = (oldEmail, newEmail, newName) => `old author: ${oldEmail}
 new author: ${newEmail} (${newName})`;

const showPushed = () => `pushed to remote repository`;

const showComplete = () => `
\n succesful complete!`;

module.exports = {
  showGitConfig,
  showRepositories,
  showRepositoryName,
  showCloned,
  showAuthorChanged,
  showNewAuthorInfo,
  showPushed,
  showComplete
};
