# Git Change Repository Author

[![npm version](https://badge.fury.io/js/git-change-repo-author.svg)](https://www.npmjs.com/package/git-change-repo-author)

Rewrites commit author for all commits in repository

## Installation

```bash
npm i -g git-change-repo-author
```

## Usage

```bash
## Simple
## Rewrite author to your git config author
git-change-repo-author --email='<example@example.com>' --backup <repo-url>

## Advanced
## Rewrite author to specific author
git-change-repo-author --email='<example@example.com>' --new-email='<example2@example.com>' new-name='<username>' --backup <repo-url>
```

### Options

| Option        | Description                                                                               |
| ------------- | ----------------------------------------------------------------------------------------- |
| `--email`     | Author email which you want to rewrite from <br /> **(Required)**                         |
| `--new-email` | Author email which you want to rewrite to                                                 |
| `--new-name`  | Author name which you want to rewrite to                                                  |
| `--local`     | Dont push changed repo                                                                    |
| `--backup`    | Creates a original repository backup in current directory <br /> **Strongly recommended** |

> Please help me to improve this Readme file by sending PR
