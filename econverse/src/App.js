import Axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    Axios.get('https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json')
      .then(response => {
        setList(response.data.products);
      })
      .catch(error => {
        console.error('Erro ao consultar a API:', error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Produtos</h1>
      
    </div>
  );
}

export default App;
