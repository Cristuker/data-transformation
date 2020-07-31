import { resolve as resolvePath } from 'path';
import { readFileSync } from 'fs';
import PDFParser from 'pdf-parse';
import ora from 'ora';
import findText from './findText';

const readerPDF = async ({ alternativeTexts }) => {
  const spinner = ora('\nBuscando pelo pdf...');
  return new Promise((resolve) => {
    const filenameAndPath = resolvePath(
      'ExternalFiles',
      'pdf',
      `Teste_PDF_File.pdf`
    );
    const buffer = readFileSync(filenameAndPath);
    spinner.succeed('Arquivo localizado');

    PDFParser(buffer).then(async (data) => {
      const dataFinded = await findText(data.text, alternativeTexts);
      spinner.succeed('Textos encontrados com sucesso!\n');
      return resolve(dataFinded);
    });
  });
};

export default readerPDF;
