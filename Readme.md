# Git Change Repository Author

[![npm version](https://badge.fury.io/js/git-change-repo-author.svg)](https://www.npmjs.com/package/git-change-repo-author)

Changes specific commits author in repository

![](https://media.giphy.com/media/L3hl1eDCrGlyGUgpGd/giphy.gif)

## Installation

```bash
npm i -g git-change-repo-author
```

## Usage

```bash
## Simple
## Rewrite author to your git config author
## You can pass repository urls as much as you want <repo-url> <repo-url2> <repo-url3> etc..
git-change-repo-author --email=<example@example.com> --backup <repo-url>

## Advanced
## Rewrite author to specific author
git-change-repo-author --email=<example@example.com> --new-email=<example2@example.com> new-name=<username> --backup <repo-url>
```

## Options

| Option        | Description                                                                                    |
| ------------- | ---------------------------------------------------------------------------------------------- |
| `--email`     | Email you want to change<br /> **(Required)**                                                  |
| `--new-email` | New email you want to use                                                                      |
| `--new-name`  | New username you want to use                                                                   |
| `--local`     | Changes repository locally                                                                     |
| `--backup`    | Creates an original repository backup in the current directory <br /> **Strongly recommended** |

### How it works

1. Clones repository to the current directory (and copies if `--backup` passed)
2. Changes repository commit author

`--local` not passed:

3. Pushes repository
4. Removes local copy of repository

> Please help me to improve this Readme file by sending PR
