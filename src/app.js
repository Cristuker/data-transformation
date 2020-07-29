import { downloadPDF, readerPDF } from './helpers';
import Questions from './questions';

const name = Questions();
console.log(name);

downloadPDF(name);
readerPDF(name);
