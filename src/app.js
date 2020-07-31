import { downloadPDF, readerPDF, csvCreator, zipCreator } from './helpers';
import Questions from './questions';

const name = Questions();

async function main() {
  try {
    await downloadPDF(name);
    const tableData = await readerPDF(name);
    await csvCreator(tableData, name);
    zipCreator(name);
  } catch (error) {
    console.log('Error on app: ', error);
  }
}

main();
