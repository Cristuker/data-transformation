import { resolve } from 'path';
import { zip } from 'zip-a-folder';
import ora from 'ora';

const zipCreator = async ({ name }) => {
  const spinner = ora('\nIniciando o processo de zipagem...');

  try {
    const fileToByZiped = resolve('ExternalFiles', 'csv');
    const fileZiped = resolve(
      'ExternalFiles',
      'zip',
      `Teste_Intuitive_Care_${name}.zip`
    );
    spinner.start();
    await zip(fileToByZiped, fileZiped);

    spinner.succeed('Processo de zipagem concluido!');
  } catch (error) {
    throw Error(error);
  }
};

export default zipCreator;
