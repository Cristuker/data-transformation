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

const findText = (buffer) => {
  return new Promise((resolve) => {
    const table30Array = table30.split(' ');
    const table31Array = table31.split(' ');
    const table32Array = table32.split(' ');
    const bufferArray = buffer.split(' ');

    const wordsFinded30 = searchForText(bufferArray, table30Array);
    const wordsFinded31 = searchForText(bufferArray, table31Array);
    const wordsFinded32 = searchForText(bufferArray, table32Array);
    console.table(wordsFinded30);
    console.table(wordsFinded31);
    console.table(wordsFinded32);
    resolve();
    return [wordsFinded30, wordsFinded31, wordsFinded32];
  });
};

export default findText;
