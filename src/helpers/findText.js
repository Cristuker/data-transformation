const findText = (buffer) => {
  const quadro30 =
    'Tabela de Tipo do Demandante Código Descrição da categoria 1 Operadora 2 Prestador de serviço 3 Consumidor 4 Gestor 5 ANS';

  const quadro30Array = quadro30.split(' ');
  const bufferArray = buffer.split(' ');
  const totalWord = quadro30Array.length;
  const wordsFinded = [];

  for (let index = 0; index < totalWord; index += 1) {
    // eslint-disable-next-line array-callback-return
    bufferArray.map((word) => {
      if (word === quadro30Array[index]) {
        wordsFinded.push(word);
        quadro30Array[index] = '*';
      }
    });
  }
  console.table(wordsFinded);
};

export default findText;
