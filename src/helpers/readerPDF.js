import { resolve } from 'path';
import { readFileSync } from 'fs';
import PDFParser from 'pdf-parse';
import findText from './findText';

const readerPDF = async (name) => {
  const filenameAndPath = resolve('pdf', `Teste_Intuitive_Care_${name}.pdf`);
  const buffer = readFileSync(filenameAndPath);
  console.log('Arquivo localizado');
  console.log('Começando a busca pelos quadros...  \n');
  let dataFinded;
  PDFParser(buffer).then(async (data) => {
    dataFinded = await findText(data.text);
    return dataFinded;
  });
};

export default readerPDF;
