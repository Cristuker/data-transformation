import { existsSync, mkdir } from 'fs';
import { resolve } from 'path';

const createEssentialsDir = () => {
  const dirToCreate = [
    resolve('ExternalFiles'),
    resolve('ExternalFiles', 'csv'),
    resolve('ExternalFiles', 'pdf'),
    resolve('ExternalFiles', 'zip'),
  ];
  dirToCreate.map((dir) => {
    // Verifica se não existe
    if (!existsSync(dir)) {
      // Efetua a criação do diretório
      mkdir(dir, (err) => {
        if (err) {
          console.log('Erro ao criar as pastas...', err);
          return;
        }

        console.log(`Diretório ${dir} criado!`);
      });
    }
  });
};

export default createEssentialsDir;
