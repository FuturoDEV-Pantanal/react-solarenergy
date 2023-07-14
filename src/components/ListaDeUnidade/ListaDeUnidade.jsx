import { useState, useEffect } from "react";
export default function ListaDeUnidade({setApareceLista}) {
  const [unidades, setUnidades] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3003/unidades")
      .then((resposta) => {
        return resposta.json();
      })
      .then((conteudo) => {
        setUnidades(conteudo);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Unidades</h1>
      <ul>
        {unidades.map((unidade) => {
          return <li key={unidade.id}>{unidade.apelido}</li>;
        })}
      </ul>
      <button onClick={()=>setApareceLista(false)}>Cadastrar Unidade</button>
    </div>
  );
}
