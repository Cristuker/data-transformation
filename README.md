# 💾 Data Transformation

Teste feito para IntuitiveCare, onde o objetivo é pegar as informações de 4 quadros(30, 31, 32) que estão contidos nesse [PDF](http://www.ans.gov.br/images/stories/Plano_de_saude_e_Operadoras/tiss/Padrao_tiss/tiss3/Padrao_TISS_Componente_Organizacional_201704.pdf) e passar para CSV.

> Todos os arquivos usados ficam na pasta ExternalFiles separados em pastas por sua extensão (pdf, csv e zip).

### 🎒 Pré-requisitos

- Node.js >=v12.16.3
- [Info zip](http://infozip.sourceforge.net/Zip.html)

### 🏁 Como rodar

Entre na pasta do projeto e rode os seguintes comandos:

1. Para instalar as depêndencias do projeto

```bash
    $ npm ci
```

2. Para começar a sua execução

```bash
    $ npm start
```

### 📦 Pacotes usados

- [git-commit-msg-lint](https://www.npmjs.com/package/git-commit-msg-linter)
- [husky](https://www.npmjs.com/package/husky)
- [lint-staged](https://www.npmjs.com/package/lint-staged)
- [Eslint](https://eslint.org/)
- [AirBnB-Config-Eslint](https://github.com/airbnb/javascript)
- [Prettier](https://prettier.io/)
- [ora](https://github.com/sindresorhus/ora)
- [pdf-parse](https://www.npmjs.com/package/pdf-parse)
- [readlineSync](https://www.npmjs.com/package/readline-sync)
- [Sucrase](https://www.npmjs.com/package/sucrase)
- [zip-a-folder](https://www.npmjs.com/package/zip-a-folder)

> Esse projeto usa o padrão de [convetional commits](https://github.com/conventional-changelog/commitlint)

<p align="center">Made whit ❤️ by <strong><a href="http://cristuker.github.io" target="blank" >Cristian</></p></strong>
