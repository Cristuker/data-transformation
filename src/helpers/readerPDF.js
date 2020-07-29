import { resolve } from 'path';
import { readFileSync } from 'fs';
import PDFParser from 'pdf-parse';
import findText from './findText';

const readerPDF = async (name) => {
  const filenameAndPath = resolve('pdf', `Teste_Intuitive_Care_${name}.pdf`);
  const buffer = readFileSync(filenameAndPath);
  console.log('Começando a busca pelos quadros  \n');
  PDFParser(buffer).then((data) => {
    //console.log(data.text);
    findText(data.text);
  });
  console.log('Arquivo localizado');
};

export default readerPDF;
