import { render, screen } from "@testing-library/react";
import ListaDeUnidade from "./ListaDeUnidade";

describe("ListaDeUnidade", () => {
  test("Deveria ter um título 'Lista de Unidades'", () => {
    render(<ListaDeUnidade />);

    const titulo = screen.getByRole("heading", { name: "Lista de Unidades"});
    expect(titulo).toBeInTheDocument();
  });

  test("Deveria existir uma unidade com o texto 'apelido 1'", async () => {
    render(<ListaDeUnidade />);

    const primeiraUnidade = await screen.findByText("apelido 1");
    expect(primeiraUnidade).toBeInTheDocument();
  })
});
