const runGitUserName = () => `
    git config --global user.name; 
`;

const runCopyFolder = (folderPath, destinationPath) => `
    cp -rf ${folderPath} ${destinationPath}
`;

const runGitUserEmail = () => ` 
    git config --global user.email
`;

const runCloneRepo = repositoryLink => `
    git clone --bare ${repositoryLink};
`;

const runChangeAuthor = (oldEmail, email, name) => `
    #!/bin/sh

    git filter-branch --env-filter '
    if [ "$GIT_COMMITTER_EMAIL" = "${oldEmail}" ]
    then
        export GIT_COMMITTER_NAME="${name}"
        export GIT_COMMITTER_EMAIL="${email}"
    fi
    if [ "$GIT_AUTHOR_EMAIL" = "${oldEmail}" ]
    then
        export GIT_AUTHOR_NAME="${name}"
        export GIT_AUTHOR_EMAIL="${email}"
    fi
    ' --tag-name-filter cat -- --branches --tags
  `;

const runGitPush = () => `
    git push --force --tags origin 'refs/heads/*'
`;

const runRemoveRepo = repositoryName => `
    rm -rf ${repositoryName}
`;

module.exports = {
  runGitUserName,
  runGitUserEmail,
  runCloneRepo,
  runChangeAuthor,
  runRemoveRepo,
  runCopyFolder,
  runGitPush
};
