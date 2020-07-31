import { writeFile } from 'fs';
import { resolve as resolvePath } from 'path';
import ora from 'ora';

function writeCSV({ data, prefix }, name) {
  let csv = prefix;
  data.forEach((element) => {
    csv += `,${element}`;
    const path = resolvePath('ExternalFiles', 'csv');
    writeFile(`${path}/${prefix}-${name}.csv`, csv, (err) => {
      if (err) {
        return console.log('err', err);
      }
    });
  });
}

const csvCreator = (tableData, { name }) => {
  return new Promise((resolve) => {
    try {
      const spinner = ora('\nIniciando a criação do csv...');
      spinner.start();
      tableData.forEach((table) => {
        writeCSV(table, name);
      });
      spinner.succeed('CSVs criados com sucesso!\n');
      return resolve();
    } catch (error) {
      console.log('Error on CSV creator: ', error);
    }
  });
};
export default csvCreator;
