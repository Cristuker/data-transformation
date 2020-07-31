import readfileSync from 'readline-sync';

const Question = () => {
  let alternativeTexts;
  let name = readfileSync.question(
    'Qual é o nome que deseja inserir no arquivo? \n\nExemplo: Teste_Intuitive_Care_{seu_nome}.zip \n-> '
  );
  if (!name) name = 'Cristian';

  const findPerAlternativeTexts = readfileSync.question(
    'Você deseja buscar pelos textos padrões ou deseja inserir um texto para ser buscado? s/n \nLembre-se: As palavras do texto serão separadas por espaços \n-> '
  );
  if (findPerAlternativeTexts === 's') {
    do {
      alternativeTexts = readfileSync.question(
        'Cole ou digite o texto que você deseja buscar no PDF \n-> '
      );
    } while (!alternativeTexts);
    return { name, alternativeTexts };
  }
  alternativeTexts = false;
  return { name, alternativeTexts };
};

export default Question;
