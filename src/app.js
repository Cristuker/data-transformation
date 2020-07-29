import { createInterface } from 'readline';
import getPDF from './helpers/download';

let name;
const prompt = createInterface({
  input: process.stdin,
  output: process.stdout,
});

prompt.question(
  'Qual é o nome que deseja inserir no arquivo? \n\nExemplo: Teste*Intuitive_Care*{seu_nome}.zip \n-> ',
  (resposta) => {
    name = resposta;
    getPDF(name);
    prompt.close();
  }
);
