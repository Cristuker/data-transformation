import ora from 'ora';
import { table30, table31, table32 } from '../data/tables';

const searchForText = (pdfBuffer, tableWords) => {
  const words = tableWords;
  const finded = [];
  for (let index = 0; index < words.length; index += 1) {
    pdfBuffer.map((word) => {
      if (word === words[index]) {
        finded.push(word);
        words[index] = '*';
      }
    });
  }

  return finded;
};

const findText = (buffer, alternativeTexts) => {
  return new Promise((resolve) => {
    const spinner = ora('Começando a busca pelos textos...');
    const bufferArray = buffer.split(' ');
    if (!alternativeTexts) {
      const table30Array = table30.split(' ');
      const table31Array = table31.split(' ');
      const table32Array = table32.split(' ');
      spinner.start();
      const wordsFinded30 = searchForText(bufferArray, table30Array);
      const wordsFinded31 = searchForText(bufferArray, table31Array);
      const wordsFinded32 = searchForText(bufferArray, table32Array);
      spinner.succeed();
      return resolve([
        { prefix: 'table30', data: wordsFinded30 },
        { prefix: 'table31', data: wordsFinded31 },
        { prefix: 'table32', data: wordsFinded32 },
      ]);
    }
    if (alternativeTexts) {
      const alternativeTextsArray = alternativeTexts.split(' ');
      const findedTexts = searchForText(bufferArray, alternativeTextsArray);
      return resolve([{ prefix: 'alternative', data: findedTexts }]);
    }
  });
};

export default findText;
