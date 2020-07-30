import { downloadPDF, readerPDF, csvCreator } from './helpers';
import Questions from './questions';

const name = Questions();

async function main() {
  try {
    await downloadPDF(name);
    const tableData = await readerPDF(name);
    csvCreator(tableData, name);
  } catch (error) {
    throw new Error(error);
  }
}

main();
