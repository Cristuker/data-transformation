import { writeFile } from 'fs';
import { resolve as resolvePath } from 'path';

function writeCSV(data, prefix, name) {
  let csv = prefix;
  data.forEach((element) => {
    csv += `,${element}`;
    const path = resolvePath('src', 'csv');
    writeFile(`${path}/${prefix}-${name}.csv`, csv, (err) => {
      if (err) {
        return console.log('err', err);
      }
    });
  });
}

const csvCreator = (tableData, name) => {
  return new Promise((resolve) => {
    try {
      console.log('Iniciando a criação do csv...');
      tableData.forEach((table) => {
        writeCSV(table.data, table.prefix, name);
      });
      console.log('CSVs criados com sucesso!');
      return resolve();
    } catch (error) {
      console.log('Error on CSV creator: ', error);
    }
  });
};
export default csvCreator;
