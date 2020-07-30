import { downloadPDF, readerPDF } from './helpers';
import Questions from './questions';

const name = Questions();

async function main() {
  try {
    await downloadPDF(name);
    await readerPDF(name);
  } catch (error) {
    throw new Error(error);
  }
}

main();
