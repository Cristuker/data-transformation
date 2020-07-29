import readfileSync from 'readline-sync';

const Question = () => {
  const name = readfileSync.question(
    'Qual é o nome que deseja inserir no arquivo? \n\nExemplo: Teste*Intuitive_Care*_{seu_nome}.zip \n-> '
  );

  return name;
};

export default Question;
