import { downloadPDF, readerPDF, csvCreator, zipCreator } from './helpers';
import Questions from './questions';

const options = Questions();

async function main() {
  try {
    await downloadPDF(options);
    const tableData = await readerPDF(options);
    await csvCreator(tableData, options);
    setTimeout(() => {
      zipCreator(options);
    }, 1000);
  } catch (error) {
    console.log('Error on app: ', error);
  }
}

main();
