# Git Change Repository Author

[![npm version](https://badge.fury.io/js/git-change-repo-author.svg)](https://www.npmjs.com/package/git-change-repo-author)

Changes specific commits author in repository

![](https://media.giphy.com/media/L3hl1eDCrGlyGUgpGd/giphy.gif)

## Installation

```bash
npm i -g git-change-repo-author
```

## Usage

### Simple

Just pass author email you want to change.

```bash
git-change-repo-author --backup --email=<example@example.com> <repo-url>
```

_New author email and username will be taken from your git config._

### Advanced

Pass author email you want to change and new author info

```bash
git-change-repo-author --backup --email=<example@example.com> --new-email=<example2@example.com> new-name=<username> <repo-url>
```

## Tips

> You can pass repository urls as much as you want `<repo-url> <repo-url2> <repo-url3>` etc..

## Options

| Option         | Description                                                                                                                        |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `--email`      | Author email you want to change<br /> **(Required)**                                                                               |
| `--new-email`  | New author email you want to use.<br /> By default, this will be taken from `git config --global user.email` <br />_(Optional)_    |
| `--new-name`   | New author username you want to use.<br /> By default, this will be taken from `git config --global user.name` <br /> _(Optional)_ |                                                                       
| `--backup`     | Creates an original repository backup in the current directory. <br /> _(Optional)_                                   |
| `--push-force` | Force push to repository😎 and remove local copy <br /> _(Optional)_                                                                 |

### How it works

1. Clones repository to the current directory (and copies if `--backup` passed)
2. Changes repository commit author

> Please help me to improve this Readme file by sending PR
