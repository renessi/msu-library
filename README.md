# MSU knowledge library

---
Frontend Team:
[Владислав Миронов](https://github.com/vladmir26)
[Евгения Макеева](https://github.com/EvaM25)
[Екатерина](https://github.com/catherinsmi)
[Кристина Новикова](https://github.com/nookismile)
[Марина Моисеенко](https://github.com/marrollyn)
[Наиля Казачук](https://github.com/Nailusha)
[Мария Белогубова](https://github.com/vladmir26)

---
Project details:

[GitHub Page](https://mariiabel.github.io/msu-library/)
[Figma design](https://www.figma.com/design/SNHlX8dZEVNcOhyMzh9Asf/DMVN-TZ?node-id=0-1&t=U0Sg0IhMcvOlFqSs-0) 
[Discussions](https://github.com/MariiaBel/msu-library/discussions)


We use it to build a project:

- FSD (Feature-Sliced Design)
- Semantic Comment Msg
    Format: 
    ```
    <type>(<scope>): <subject>
    ```
        
    **feat**: (new feature for the user, not a new feature for build script)
    **fix**: (bug fix for the user, not a fix to a build script)
    **docs**: (changes to the documentation)
    **style**: (formatting, missing semi colons, etc; no production code change)
    **refactor**: (refactoring production code, eg. renaming a variable)
    **test**: (adding missing tests, refactoring tests; no production code change)
    **chore**: (updating grunt tasks etc; no production code change)
- [Vite](https://vitejs.dev/) vanilla template
- ES6, HTML and SCSS
- Desktop First + Responsive

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

    