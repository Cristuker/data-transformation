import { resolve } from 'path';
import { zip } from 'zip-a-folder';

const zipCreator = async ({ name }) => {
  console.log('Iniciando o processo de zipagem...');

  try {
    const fileToByZiped = resolve('ExternalFiles', 'csv');
    const fileZiped = resolve(
      'ExternalFiles',
      'zip',
      `Teste_Intuitive_Care_${name}.zip`
    );

    await zip(fileToByZiped, fileZiped);

    console.log('Processo de zipagem concluido!');
  } catch (error) {
    throw Error(error);
  }
};

export default zipCreator;
