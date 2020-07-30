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
    const [tableData30, tableData31, tableData32] = tableData;
    try {
      console.log('Iniciando a criação do csv...');
      writeCSV(tableData30, 'table30', name);
      writeCSV(tableData31, 'table31', name);
      writeCSV(tableData32, 'table32', name);
      console.log('CSVs criados com sucesso!');
      return resolve();
    } catch (error) {
      console.log('Error on CSV creator: ', error);
    }
  });
};
export default csvCreator;
