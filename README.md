## Prerequisites

* direnv, asdf and gpg (via homebrew)
* add the following to your ~/.zshrc (or .bashrc):
```sh
export PATH=$HOME/.bin:$PATH
eval "$(direnv hook zsh)"
source /usr/local/opt/asdf/asdf.sh
```
* Find available asdf plugins
```sh
asdf plugin-list-all
```
* Add nodejs
```sh
asdf plugin-add nodejs
```
* Add to env
```sh
export GNUPGHOME="${ASDF_DIR:-$HOME/.asdf}/keyrings/nodejs" && mkdir -p "$GNUPGHOME" && chmod 0700 "$GNUPGHOME"
```
* Configure asdf (previous release)
```sh
bash $(brew --prefix asdf)/plugins/nodejs/bin/import-previous-release-team-keyring
```
* Configure asdf (current release)
```sh
bash $(brew --prefix asdf)/plugins/nodejs/bin/import-release-team-keyring
```
* Install Node 10.10 via `asdf install nodejs 10.10.0`

## Getting started

* Open terminal in repo root
* Your first visit to the directory will prompt you to add direnv config. Go ahead and type `direnv allow` when it prompts.
* `yarn dev`

If you want to build or run tests without serving the project, simply check package.json for the relevant yarn task in the scripts section