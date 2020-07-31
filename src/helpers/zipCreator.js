import { resolve } from 'path';
import { execSync } from 'child_process';

const zipCreator = (name) => {
  console.log('Iniciando o processo de zipagem...');

  try {
    const fileToByZiped = resolve('ExternalFiles', 'csv');
    const fileZiped = resolve(
      'ExternalFiles',
      'zip',
      `Teste_Intuitive_Care_${name}.zip`
    );
    execSync(`zip -r ${fileZiped} *`, {
      cwd: fileToByZiped,
    });
    console.log('Processo de zipagem concluido!');
  } catch (error) {
    throw Error(error);
  }
};

export default zipCreator;
