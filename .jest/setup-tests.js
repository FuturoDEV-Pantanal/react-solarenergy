import "@testing-library/jest-dom";

const listaDeUnidadesMock = [
  {
    id: "abc",
    apelido: "apelido 1",
    local: "local 1",
    marca: "marca 1",
    modelo: "modelo 1",
    ativo: true,
  },
  {
    id: "def",
    apelido: "apelido 2",
    local: "local 2",
    marca: "marca 2",
    modelo: "modelo 2",
    ativo: false,
  },
];

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(listaDeUnidadesMock),
  })
);
