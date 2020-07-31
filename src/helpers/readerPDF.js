import { resolve as resolvePath } from 'path';
import { readFileSync } from 'fs';
import PDFParser from 'pdf-parse';
import findText from './findText';

const readerPDF = async ({ alternativeTexts }) => {
  return new Promise((resolve) => {
    const filenameAndPath = resolvePath(
      'ExternalFiles',
      'pdf',
      `Teste_PDF_File.pdf`
    );
    const buffer = readFileSync(filenameAndPath);
    console.log('Arquivo localizado');
    console.log('Começando a busca pelos quadros...  \n');

    PDFParser(buffer).then(async (data) => {
      const dataFinded = await findText(data.text, alternativeTexts);
      console.log('Textos encontrados com sucesso!');
      return resolve(dataFinded);
    });
  });
};

export default readerPDF;
