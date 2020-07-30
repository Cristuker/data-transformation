import { existsSync } from 'fs';
import { resolve as pathResolve } from 'path';
import download from 'download-pdf';
import ora from 'ora';

const spinner = ora('Baixando o pdf');
const downloadPDF = (name) => {
  try {
    // eslint-disable-next-line consistent-return
    return new Promise((resolve) => {
      const filenameAndPath = pathResolve(
        'pdf',
        `Teste_Intuitive_Care_${name}.pdf`
      );

      const fileExits = existsSync(filenameAndPath);

      if (fileExits) {
        console.log('Já existe um arquivo com esse nome! \n');
        return resolve();
      }

      console.log('Iniciando download...');

      const pdf =
        'http://www.ans.gov.br/images/stories/Plano_de_saude_e_Operadoras/tiss/Padrao_tiss/tiss3/Padrao_TISS_Componente_Organizacional_201704.pdf';

      const options = {
        directory: './pdf',
        filename: `Teste_Intuitive_Care_${name}.pdf`,
      };

      spinner.start();
      download(pdf, options, (error) => {
        if (error) {
          spinner.fail('Houve um erro ao baixar o pdf!');
          console.log('Erro no download: ', error);
        }

        spinner.stop();
        spinner.succeed('Download concluido!');
        return resolve();
      });
    });
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
};
export default downloadPDF;
