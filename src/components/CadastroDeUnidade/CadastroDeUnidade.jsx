import { useState } from "react";
import { api } from "../../utils";

export default function CadastroDeUnidade({ setApareceLista }) {
  const unidadeVazia = {
    apelido: "",
    local: "",
    marca: "",
    modelo: "",
    ativo: false
  };
  const [unidade, setUnidade] = useState(unidadeVazia);
  console.log({ unidade });

  const cadastrarUnidade = (evento) => {
    evento.preventDefault();

    fetch(`${api}/unidades`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(unidade),
    }).then(() => setApareceLista(true));
  };

  return (
    <div>
      <h2>Cadastro de Unidades</h2>

      <form onSubmit={cadastrarUnidade}>
        <input
          type="text"
          placeholder="Nome da unidade"
          value={unidade.apelido}
          onChange={(evento) =>
            setUnidade({ ...unidade, apelido: evento.target.value })
          }
        />

        <input
          type="text"
          placeholder="Local"
          value={unidade.local}
          onChange={(evento) =>
            setUnidade({ ...unidade, local: evento.target.value })
          }
        />

        <input
          type="text"
          placeholder="Marca"
          value={unidade.marca}
          onChange={(evento) =>
            setUnidade({ ...unidade, marca: evento.target.value })
          }
        />

        <input
          type="text"
          placeholder="Modelo"
          value={unidade.modelo}
          onChange={(evento) =>
            setUnidade({ ...unidade, modelo: evento.target.value })
          }
        />

        <input
          type="boolean"
          placeholder="Ativo"
          value={unidade.ativo}
          onChange={(evento) =>
            setUnidade({ ...unidade, ativo: evento.target.value })
          }
        />

        <button type="submit">Salvar Unidade</button>
      </form>
    </div>
  );
}