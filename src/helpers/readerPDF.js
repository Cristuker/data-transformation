import { resolve as resolvePath } from 'path';
import { readFileSync } from 'fs';
import PDFParser from 'pdf-parse';
import findText from './findText';

const readerPDF = async (name) => {
  console.log('entrei no reader');
  return new Promise((resolve) => {
    const filenameAndPath = resolvePath(
      'ExternalFiles',
      'pdf',
      `Teste_PDF_File_${name}.pdf`
    );
    const buffer = readFileSync(filenameAndPath);
    console.log('Arquivo localizado');
    console.log('Começando a busca pelos quadros...  \n');
    let dataFinded;
    PDFParser(buffer).then(async (data) => {
      dataFinded = await findText(data.text);
      console.log('Textos encontrados com sucesso!');
      return resolve(dataFinded);
    });
  });
};

export default readerPDF;
