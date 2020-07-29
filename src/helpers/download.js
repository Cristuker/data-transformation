import download from 'download-pdf';

const getPDF = (name) => {
  const pdf =
    'http://www.ans.gov.br/images/stories/Plano_de_saude_e_Operadoras/tiss/Padrao_tiss/tiss3/Padrao_TISS_Componente_Organizacional_201704.pdf';
  const options = {
    directory: './pdf',
    filename: `Teste_Intuitive_Care_${name}.pdf`,
  };

  download(pdf, options, (error) => {
    if (error) throw new Error('DEU RUIM', error);

    console.log('Download concluido!');
  });
};
export default getPDF;
