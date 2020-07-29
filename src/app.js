import { downloadPDF, readerPDF } from './helpers';
import Questions from './questions';

const name = Questions();

downloadPDF(name)
  .then(() => {
    readerPDF(name);
  })
  .catch(() => {
    console.log('deu ruiim');
  });
