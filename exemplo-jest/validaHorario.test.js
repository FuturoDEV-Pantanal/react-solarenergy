//Utilizando TDD, crie uma função que recebe um número (em segundos) 
//e transforma no formato “_h _m _s”.
//Dica: escreva testes para os valores 30, 350 e 3725

function formatarTempo(segundos) {
    const horas = Math.floor(segundos/(60*60));
    const minutos = Math.trunc(segundos / 60) % 60;
    const segRestantes = segundos % 60;
  
    return `${horas}h ${minutos}m ${segRestantes}s`;
  }
  
  describe("formatarTempo", () => {
    test("deve retornar '0h 0m 30s' para 30 segundos", () => {
      const resultado = formatarTempo(30);
      const resultadoEsperado = "0h 0m 30s";
  
      expect(resultado).toBe(resultadoEsperado);
    });
  
    test("deve retornar '0h 5m 50s' para 350 segundos", () => {
      const resultado = formatarTempo(350);
      const resultadoEsperado = "0h 5m 50s";
  
      expect(resultado).toBe(resultadoEsperado);
    });
  
    test("deve retornar '1h 2m 5s' para 3725 segundos", () => {
      const resultado = formatarTempo(3725);
      const resultadoEsperado = "1h 2m 5s";
  
      expect(resultado).toBe(resultadoEsperado);
    });
  });