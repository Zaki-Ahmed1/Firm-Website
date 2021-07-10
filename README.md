# Energy Consulting Firm Website

## Local setup

Clone the repository from GitHub.

```shell
git clone https://github.com/Zaki-Ahmed1/Firm-Website.git

# install dependencies
npm install
```

It's recommended to use [VSCode](https://code.visualstudio.com/) as the editor for local development. There are useful extensions that can facilitate real-time linting and automatic styling of files.

- ESLint extension: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
- Prettier extension: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

To enable auto-format on save for the project's files, open up the command palette (Ctrl+Shift+P on Windows, Command+Shift+P on Mac) and select `Preferences: Open Settings (JSON)`. Add the following lines to the settings JSON file.

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "javascript.updateImportsOnFileMove.enabled": "always"
}
```

To start the development server, run the npm start script.

```shell
# starts a development server on localhost:3000
npm start
```

## Commit conventions

We will use industry standard [commit conventions](https://www.conventionalcommits.org/en/v1.0.0/) when writing commit messages. Please see below for a condensed cheatsheet ([source](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)).

Format: `<type>(<scope>): <subject>`

`<scope>` is optional

## Example

```
feat: add hat wobble
^--^  ^------------^
|     |
|     +-> Summary in present tense.
|
+-------> Type: chore, docs, feat, fix, refactor, style, or test.
```

More Examples:

- `feat`: (new feature for the user, not a new feature for build script)
- `fix`: (bug fix for the user, not a fix to a build script)
- `docs`: (changes to the documentation)
- `style`: (formatting, missing semi colons, etc; no production code change)
- `refactor`: (refactoring production code, eg. renaming a variable)
- `test`: (adding missing tests, refactoring tests; no production code change)
- `chore`: (updating grunt tasks etc; no production code change)
