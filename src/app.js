import { downloadPDF, readerPDF } from './helpers';
import Questions from './questions';

const name = Questions();

downloadPDF(name)
  .then(() => {
    readerPDF(name);
  })
  .catch((error) => {
    console.log('Erro ao baixar o pdf', error);
  });
