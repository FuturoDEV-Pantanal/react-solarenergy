import { useState } from "react";
import ListaDeUnidade from "../../components/ListaDeUnidade/ListaDeUnidade";
import CadastroDeUnidade from "../../components/CadastroDeUnidade/CadastroDeUnidade";

function Unidades() {
    const [apareceLista, setApareceLista] = useState(true);

    return (
      <>
        {apareceLista === true && (
          <ListaDeUnidade setApareceLista={setApareceLista} />
        )}

        {apareceLista === false && (
          <CadastroDeUnidade setApareceLista={setApareceLista} />
        )}
      </>
    );
  }

export default Unidades;
