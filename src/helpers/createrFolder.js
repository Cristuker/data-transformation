import { existsSync, mkdir } from 'fs';
import { resolve } from 'path';
import ora from 'ora';

const createEssentialsDir = () => {
  const spinner = ora('Criando pastas necessárias para o projeto...');
  const dirToCreate = [
    resolve('ExternalFiles'),
    resolve('ExternalFiles', 'csv'),
    resolve('ExternalFiles', 'pdf'),
    resolve('ExternalFiles', 'zip'),
  ];
  dirToCreate.map((dir) => {
    spinner.start();
    if (existsSync(dir)) spinner.succeed(`A pasta (${dir}) já existe!`);
    if (!existsSync(dir)) {
      mkdir(dir, (err) => {
        if (err) {
          spinner.fail('Erro ao criar as pastas...', err);
          return;
        }

        spinner.succeed(`Diretório (${dir}) criado!`);
      });
    }
  });
  console.log('\n');
};

export default createEssentialsDir;
