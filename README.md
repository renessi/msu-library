# MSU knowledge library


Project details:

[GitHub Page](https://mariiabel.github.io/msu-library/dist/catalog.html)<br>
[Figma design](https://www.figma.com/design/SNHlX8dZEVNcOhyMzh9Asf/DMVN-TZ?node-id=0-1&t=U0Sg0IhMcvOlFqSs-0) <br>
[Discussions](https://github.com/MariiaBel/msu-library/discussions)<br>
[Wiki](https://github.com/MariiaBel/msu-library/wiki/Instractions)<br>
[MSULibraryAPI](https://app.swaggerhub.com/apis-docs/MariiaBel/MSULibraryAPI/1.0.0)<br>

We use it to build a project:

- FSD (Feature-Sliced Design)
- Semantic Comment Msg
  Format:
  ```
  <type>(<scope>): <subject>
  ```
  **feat**: (new feature for the user, not a new feature for build script)<br>
  **fix**: (bug fix for the user, not a fix to a build script)<br>
  **docs**: (changes to the documentation)<br>
  **style**: (formatting, missing semi colons, etc; no production code change)<br>
  **refactor**: (refactoring production code, eg. renaming a variable)<br>
  **test**: (adding missing tests, refactoring tests; no production code change)<br>
  **chore**: (updating grunt tasks etc; no production code change)<br>
- [Vite](https://vitejs.dev/) vanilla template
- ES6, HTML and SCSS
- Desktop First + Responsive
- [JSDoc](https://jsdoc.app/)
- [BEM for styles](https://ru.bem.info/methodology/naming-convention/#%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%B0-%D1%84%D0%BE%D1%80%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B8%D0%BC%D0%B5%D0%BD). No-namespace styles
    ```
    blockName__elemName _modName
    ```
- [Storybook](https://storybook.js.org/docs) for UI docs


How we work with the repositories. Rules to follow:

- Branch Name:
  ```
  MSU-<taskNumber>-<taskShortTitle>
  ```
  Example:
  ```
  MSU-69639434-md-docs
  ```
- Code review is required before pushing to the main branch. Everyone on the team can review code

- [Video how to work with project](https://drive.google.com/file/d/1srBw3dUKgCt_Z2iNkQ1-uGUTjkZUa-hQ/view?usp=sharing)


---

Frontend Team:<br>
[Владислав Миронов](https://github.com/vladmir26)<br>
[Евгения Макеева](https://github.com/EvaM25)<br>
[Екатерина Смирнова](https://github.com/catherinsmi)<br>
[Кристина Новикова](https://github.com/nookismile)<br>
[Марина Моисеенко](https://github.com/marrollyn)<br>
[Мария Белогубова](https://github.com/mariiabel)

---
