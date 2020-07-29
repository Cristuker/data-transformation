import { existsSync } from 'fs';
import { resolve } from 'path';
import PDFParser from 'pdf2json';

const readerPDF = async (name) => {
  const filenameAndPath = resolve('pdf', `Teste_Intuitive_Care_${name}.pdf`);

  console.log('começando a busca pelos quadros', filenameAndPath);

  const fileExits = existsSync(filenameAndPath);

  if (fileExits) {
    const parser = new PDFParser();

    parser.on('pdfParser_dataError', (error) => {
      console.error('Error: ', error.parserError);
    });

    parser.on('pdfParser_dataReady', (data) => {
      console.log('PDF:', data);
    });

    parser.loadPDF(filenameAndPath);
    console.log('Arquivo localizado');
  } else {
    console.log('Arquivo não encontrado!');
  }
};

export default readerPDF;
