import { useState } from "react";

export default function CadastroDeUnidade({ setApareceLista }) {
  const [novaUnidade, setNovaUnidade] = useState({
    apelido: "",
    local: "",
    marca: "",
    modelo: "",
    status: false,
  });

  function cadastrarUnidade(e) {
    e.preventDefault();

    fetch("http://localhost:3003/unidades", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(novaUnidade),
    }).then(() => {
      setApareceLista(true);
    });
  }

  return (
    <div>Nova Unidade

      <form onSubmit={cadastrarUnidade}>
        <label htmlFor="apelido">Apelido</label>
        <input
          type="text"
          id="apelido"
          value={novaUnidade.apelido}
          onChange={(e) => {
            setNovaUnidade({
              ...novaUnidade,
              apelido: e.target.value,
            });
          }}
          required
        />

        <label htmlFor="local">Local</label>
        <input
          type="text"
          id="local"
          value={novaUnidade.local}
          onChange={(e) => {
            setNovaUnidade({
              ...novaUnidade,
              local: e.target.value,
            });
          }}
          required
        />

        <label htmlFor="marca">Marca</label>
        <input
          type="text"
          id="marca"
          value={novaUnidade.marca}
          onChange={(e) => {
            setNovaUnidade({
              ...novaUnidade,
              marca: e.target.value,
            });
          }}
          required
        />

        <label htmlFor="modelo">Modelo</label>
        <input
          type="text"
          id="modelo"
          value={novaUnidade.modelo}
          onChange={(e) => {
            setNovaUnidade({
              ...novaUnidade,
              modelo: e.target.value,
            });
          }}
          required
        />

        <label htmlFor="status">Status</label>
        <input
          type="checkbox"
          id="status"
          checked={novaUnidade.status}
          onChange={(e) => {
            setNovaUnidade({
              ...novaUnidade,
              status: e.target.checked,
            });
          }}
          required
        />

        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

////// Pages/Unidades
Unidades.jsx


import { useState, useEffect } from "react";
import CadastroDeUnidade from "./CadastroDeUnidade";

function Unidades() {
  const [unidades, setUnidades] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3003/unidades")
      .then((resposta) => resposta.json())
      .then((conteudo) => {
        setUnidades(conteudo);
      });
  }, []);

  console.log(unidades);

  return (
    <>
      <CadastroDeUnidade setApareceLista={() => {}} />
      Esta funcionando
    </>
  );
}
