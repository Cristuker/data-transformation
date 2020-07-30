import readfileSync from 'readline-sync';

const Question = () => {
  const name = readfileSync.question(
    'Qual é o nome que deseja inserir no arquivo? \n\nExemplo: Teste_PDF_File_{name}.zip \n-> '
  );

  return name;
};

export default Question;
